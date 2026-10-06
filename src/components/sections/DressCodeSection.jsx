import Reveal from '../ui/Reveal'
import { Divider, Star8, VerticalDivider } from '../ui/Ornaments'
import SectionHeading from '../ui/SectionHeading'

function AttireCard({ label, text, delay = 0 }) {
  return (
    <Reveal delay={delay} className="mx-auto w-full max-w-[18rem]">
      <div className="group rounded-t-full border border-gold/45 p-2 transition-colors duration-500 hover:border-gold">
        <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-t-full border border-gold/20 bg-ivory/80 px-6 pt-12 text-center transition-colors duration-500 group-hover:bg-ivory">
          <Star8 className="size-5 text-gold transition-transform duration-700 ease-silk group-hover:rotate-45" />
          <h3 className="mt-5 font-display text-sm font-medium tracking-[0.45em] text-gold-deep">
            {label}
          </h3>
          <span aria-hidden="true" className="my-5 h-px w-10 bg-gold/50" />
          <p className="font-serif text-2xl italic leading-snug text-emerald-ink">{text}</p>
        </div>
      </div>
    </Reveal>
  )
}

export default function DressCodeSection() {
  return (
    <section
      id="dress-code"
      aria-labelledby="dress-code-title"
      className="relative bg-ivory-deep px-6 py-32 sm:py-40"
    >
      <SectionHeading id="dress-code-title" eyebrow="Attire" title="Dress Code" />

      <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-14">
        <AttireCard label="MEN" text="Modest & Traditional Attire" />
        <Reveal delay={0.1}>
          <Divider className="text-gold md:hidden" />
          <VerticalDivider className="hidden text-gold md:flex" />
        </Reveal>
        <AttireCard label="WOMEN" text="Modest & Traditional Attire" delay={0.15} />
      </div>
    </section>
  )
}
