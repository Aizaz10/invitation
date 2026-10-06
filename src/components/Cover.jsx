import { motion } from 'framer-motion'
import { DOOR_DELAY, DOOR_DURATION, DOOR_EASE, EASE_SILK } from '../utils/motion'
import Button from './ui/Button'
import { ArchFrame, Divider, Star8 } from './ui/Ornaments'

const content = {
  hidden: {},
  enter: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
  leave: {
    opacity: 0,
    scale: 0.97,
    filter: 'blur(6px)',
    transition: { duration: 0.55, ease: 'easeIn' },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  enter: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE_SILK } },
}

/** The full emerald artwork. Rendered once per door; each door crops its half. */
function DoorFace() {
  return (
    <div className="bg-door absolute inset-0">
      <div className="bg-geometric mask-frame absolute inset-0 opacity-25" />
      <div className="absolute inset-3 border border-gold/30 sm:inset-6" />
      <div className="absolute inset-5 border border-gold/10 sm:inset-9" />
      <div className="absolute left-1/2 top-1/2 h-[min(84svh,720px)] w-[min(88vw,440px)] -translate-x-1/2 -translate-y-1/2">
        <ArchFrame className="absolute inset-0 size-full text-gold/70" />
        <Star8 filled className="absolute left-1/2 top-0 size-4 -translate-x-1/2 -translate-y-1/2 text-gold" />
      </div>
    </div>
  )
}

function Door({ side, opening, onDone }) {
  const isLeft = side === 'left'
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute inset-y-0 w-1/2 overflow-hidden will-change-transform ${
        isLeft ? 'left-0' : 'right-0'
      } ${
        opening
          ? isLeft
            ? 'shadow-[30px_0_60px_-10px_rgb(0_0_0/0.45)]'
            : 'shadow-[-30px_0_60px_-10px_rgb(0_0_0/0.45)]'
          : ''
      }`}
      initial={false}
      animate={{ x: opening ? (isLeft ? '-100%' : '100%') : '0%' }}
      transition={{ duration: DOOR_DURATION, delay: DOOR_DELAY, ease: DOOR_EASE }}
      onAnimationComplete={() => opening && onDone?.()}
    >
      {/* 200% wide so the artwork stays continuous across the seam */}
      <div className={`absolute inset-y-0 w-[200%] ${isLeft ? 'left-0' : 'right-0'}`}>
        <DoorFace />
      </div>
      {/* gilded inner edge */}
      <div
        className={`absolute inset-y-0 w-px bg-linear-to-b from-transparent via-gold/60 to-transparent ${
          isLeft ? 'right-0' : 'left-0'
        }`}
      />
    </motion.div>
  )
}

export default function Cover({ opening, onOpen, onOpened }) {
  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Invitation cover"
    >
      <Door side="left" opening={opening} />
      <Door side="right" opening={opening} onDone={onOpened} />

      {/* Light escaping through the seam as the doors unlatch */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[calc(50%-1px)] w-0.5 origin-center bg-gold-light shadow-[0_0_30px_8px_rgb(226_202_148/0.55)]"
        initial={false}
        animate={opening ? { scaleY: [0, 1, 1], opacity: [0, 1, 0] } : { scaleY: 0, opacity: 0 }}
        transition={{ duration: 1.3, times: [0, 0.45, 1], ease: 'easeInOut', delay: 0.2 }}
      />

      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center"
        variants={content}
        initial="hidden"
        animate={opening ? 'leave' : 'enter'}
      >
        <motion.div variants={item}>
          <Star8 className="mx-auto size-6 animate-spin-slow text-gold" />
        </motion.div>

        <motion.p
          variants={item}
          lang="ar"
          dir="rtl"
          className="mt-6 font-arabic text-[clamp(1.6rem,min(6.6vw,6svh),2.9rem)] leading-[1.9] text-gold-light"
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>

        <motion.div variants={item}>
          <Divider className="my-4 text-gold sm:my-6" />
        </motion.div>

        <motion.p
          variants={item}
          className="font-display text-[0.7rem] font-medium tracking-[0.32em] text-gold sm:text-sm sm:tracking-[0.4em]"
        >
          TAKMEEL-E-HIFZ-UL-QURAN
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-[12ch] font-display text-[clamp(2.3rem,min(11vw,8.5svh),4.4rem)] leading-[1.1] tracking-[0.06em] sm:max-w-none"
        >
          <span className="text-gold-foil animate-shimmer">JAVERIA BILAL</span>
        </motion.p>

        <motion.div variants={item} className="mt-10 sm:mt-12">
          <Button
            id="open-invitation"
            variant="outline-gold"
            onClick={onOpen}
            disabled={opening}
            aria-label="Open invitation"
          >
            Open Invitation
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
