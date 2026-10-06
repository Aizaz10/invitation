import Reveal from './Reveal'
import { Divider } from './Ornaments'

export default function SectionHeading({ id, eyebrow, title, tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <header className="mx-auto mb-14 max-w-xl text-center sm:mb-16">
      <Reveal
        as="p"
        className={`font-sans text-[0.68rem] font-medium uppercase tracking-[0.42em] ${
          dark ? 'text-gold' : 'text-gold-deep'
        }`}
      >
        {eyebrow}
      </Reveal>
      <Reveal
        as="h2"
        id={id}
        delay={0.1}
        className={`mt-4 font-serif text-[clamp(2rem,6vw,3rem)] leading-tight ${
          dark ? 'text-gold-foil animate-shimmer' : 'text-emerald-ink'
        }`}
      >
        {title}
      </Reveal>
      <Reveal delay={0.2}>
        <Divider className="mt-6 text-gold" />
      </Reveal>
    </header>
  )
}
