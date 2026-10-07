import Reveal from '../ui/Reveal'
import { Divider, Flourish, Star8 } from '../ui/Ornaments'

export default function ClosingSection() {
  return (
    <div className="relative overflow-hidden bg-emerald-ink text-ivory">
      <div aria-hidden="true" className="bg-door absolute inset-0" />
      <div aria-hidden="true" className="bg-geometric mask-frame absolute inset-0 opacity-15" />

      <section
        id="closing"
        aria-label="Closing dua"
        className="relative mx-auto max-w-2xl px-6 pt-20 text-center sm:pt-28"
      >
        <Reveal>
          <Star8 className="mx-auto size-7 animate-spin-slow text-gold" />
        </Reveal>

        <Reveal
          as="blockquote"
          delay={0.1}
          className="mt-10 font-serif text-[clamp(1.25rem,3.9vw,1.8rem)] italic leading-relaxed text-ivory/90"
        >
          “O Allah, make the Quran the spring of our hearts, and grant Javeria steadfastness and
          barakah in preserving Your Word.”
        </Reveal>

        <Reveal delay={0.2}>
          <Divider className="my-12 text-gold" />
        </Reveal>

        <Reveal
          as="p"
          delay={0.3}
          lang="ur"
          dir="rtl"
          className="font-urdu text-[clamp(1.6rem,5.6vw,2.7rem)] leading-[2.6] text-gold-light"
        >
          آپ کی شرکت ہمارے لیے باعثِ مسرت ہوگی
        </Reveal>
      </section>

      <footer className="relative px-6 pb-12 pt-16 sm:pt-24">
        <Reveal y={12}>
          <Flourish className="mx-auto w-64 text-gold/70 sm:w-80" />
        </Reveal>
      </footer>
    </div>
  )
}
