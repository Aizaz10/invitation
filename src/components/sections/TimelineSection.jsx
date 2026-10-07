import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { TIMELINE } from '../../data/event'
import { EASE_SILK } from '../../utils/motion'
import SectionHeading from '../ui/SectionHeading'

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  // IntersectionObserver-backed: fires once when the node enters the viewport
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' })
  const onLeft = index % 2 === 0

  return (
    <li
      ref={ref}
      className={`relative pl-10 sm:pl-12 md:w-1/2 ${onLeft ? 'md:pl-0 md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'}`}
    >
      {/* node */}
      <motion.span
        aria-hidden="true"
        className={`absolute left-[11px] top-7 -translate-x-1/2 ${
          onLeft ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0'
        }`}
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE_SILK }}
      >
        <span className="relative block size-4 rotate-45 border border-gold bg-ivory shadow-[0_0_0_5px_var(--color-ivory)]">
          <span className="absolute inset-[3px] bg-gold" />
        </span>
      </motion.span>

      {/* card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.9, ease: EASE_SILK }}
        className="rounded-sm border border-gold/25 bg-white/60 px-6 py-5 shadow-[0_12px_32px_-20px_rgb(2_48_32/0.4)] transition-[border-color,box-shadow,translate] duration-500 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-[0_18px_40px_-20px_rgb(2_48_32/0.5)]"
      >
        <p className="font-display text-xs font-medium tracking-[0.28em] text-gold-deep sm:text-sm">
          {item.time}
        </p>
        <h3 className="mt-2 font-serif text-xl text-emerald-ink sm:text-2xl">{item.title}</h3>
        <p
          lang="ur"
          dir="rtl"
          className={`mt-2 text-left font-urdu text-[0.95rem] leading-[2.5] text-emerald-ink/65 ${
            onLeft ? 'md:text-right' : ''
          }`}
        >
          {item.urdu}
        </p>
      </motion.div>
    </li>
  )
}

export default function TimelineSection() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 75%', 'end 55%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 })

  return (
    <section
      id="programme"
      aria-labelledby="programme-title"
      className="relative px-6 py-20 sm:py-28"
    >
      <SectionHeading id="programme-title" eyebrow="Order of the Day" title="Programme" />

      <div ref={trackRef} className="relative mx-auto max-w-3xl px-2 sm:px-6 md:px-0">
        <div aria-hidden="true" className="absolute inset-y-0 left-[19px] w-0.5 bg-gold/20 sm:left-[35px] md:left-1/2" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: progress }}
          className="absolute inset-y-0 left-[19px] w-0.5 origin-top bg-linear-to-b from-gold-light via-gold to-gold-rich sm:left-[35px] md:left-1/2"
        />
        <ol className="relative space-y-10 md:space-y-6">
          {TIMELINE.map((item, i) => (
            <TimelineItem key={item.time} item={item} index={i} />
          ))}
        </ol>
      </div>

      <div className="mt-12 text-center text-sm leading-relaxed text-[#C5A059]">
        <p className="italic">
          The ceremony will commence on time. Your punctuality will be highly appreciated.
        </p>
        <p lang="ur" dir="rtl" className="mt-2 font-urdu">
          تقریب کا آغاز مقررہ وقت پر ہوگا۔ آپ کی وقت کی پابندی باعثِ مسرت ہوگی۔
        </p>
      </div>
    </section>
  )
}
