import { motion } from 'framer-motion'
import { EASE_SILK } from '../../utils/motion'

/**
 * Fades + lifts its children into view.
 * - Default: triggered once by IntersectionObserver (whileInView).
 * - Pass `show` to drive it manually (e.g. content beneath the opening cover).
 */
export default function Reveal({
  as = 'div',
  children,
  delay = 0,
  y = 24,
  duration = 1,
  amount = 0.3,
  show,
  ...rest
}) {
  const Component = motion[as]
  const variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration, delay, ease: EASE_SILK } },
  }
  const trigger =
    show === undefined
      ? { whileInView: 'visible', viewport: { once: true, amount } }
      : { animate: show ? 'visible' : 'hidden' }

  return (
    <Component initial="hidden" variants={variants} {...trigger} {...rest}>
      {children}
    </Component>
  )
}
