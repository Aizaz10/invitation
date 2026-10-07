import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'
import { Divider, FrameCorners, Star8 } from '../ui/Ornaments'

export default function AyahSection({ revealed }) {
  return (
    <section
      id="ayah"
      aria-label="Quranic verse"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-12 pb-8 sm:pt-16 sm:pb-12"
    >
      <FrameCorners className="inset-4 text-gold/60 sm:inset-8" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[min(120vw,52rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(197_160_89/0.12),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-3xl text-center -mt-16 sm:-mt-24">
        <Reveal show={revealed} delay={0.9}>
          <Star8 className="mx-auto size-7 text-gold" />
        </Reveal>

        <Reveal
          as="p"
          show={revealed}
          delay={1.05}
          lang="ar"
          dir="rtl"
          className="mt-8 font-arabic text-[clamp(2.5rem,8vw,5rem)] leading-[2] text-gold-rich"
        >
          إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
        </Reveal>

        <Reveal show={revealed} delay={1.25}>
          <Divider className="mb-10 mt-8 text-gold sm:mb-14 sm:mt-12" />
        </Reveal>

        <Reveal
          as="p"
          show={revealed}
          delay={1.4}
          lang="ur"
          dir="rtl"
          className="font-urdu text-[clamp(1.05rem,3.6vw,1.6rem)] leading-[3] text-emerald-ink"
        >
          بیشک یہ ذکر (قرآن) ہم نے ہی نازل کیا ہے اور ہم ہی اس کے محافظ ہیں۔
        </Reveal>

        <Reveal
          as="p"
          show={revealed}
          delay={1.6}
          className="mt-6 font-serif text-sm italic tracking-wide text-gold-deep"
        >
          (Surah Al-Hijr 15:9)
        </Reveal>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-gold-deep"
        initial={{ opacity: 0 }}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.4em]">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-gold/25">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-line bg-gold" />
        </span>
      </motion.div>
    </section>
  )
}
