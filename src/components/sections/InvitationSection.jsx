import { EVENT } from '../../data/event'
import Reveal from '../ui/Reveal'
import { Divider, Star8 } from '../ui/Ornaments'

/*
 * Letter-spacing adds trailing space after the last glyph, which nudges
 * centred text to the left. A matching left padding re-balances each line.
 */
const SMALL_LINE =
  'font-display text-[0.68rem] font-normal uppercase leading-relaxed tracking-[0.26em] pl-[0.26em] text-emerald-ink/70 text-balance sm:text-sm sm:tracking-[0.4em] sm:pl-[0.4em]'

export default function InvitationSection() {
  return (
    <section
      id="invitation"
      aria-labelledby="invitation-title"
      className="relative bg-ivory-deep/60 px-6 py-32 text-center sm:py-40"
    >
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <Star8 className="mx-auto size-6 text-gold" />
        </Reveal>

        {/* Line 1 — hosts */}
        <Reveal
          as="p"
          delay={0.1}
          className="mt-10 pl-[0.1em] font-display text-[clamp(1.5rem,5.5vw,2.4rem)] font-semibold uppercase leading-tight tracking-[0.1em] text-emerald-ink"
        >
          {EVENT.hosts}
        </Reveal>

        {/* Lines 2–4 — the invitation */}
        <div className="mt-8 space-y-2.5 sm:mt-10 sm:space-y-3">
          <Reveal as="p" delay={0.2} className={SMALL_LINE}>
            Cordially invite you
          </Reveal>
          <Reveal as="p" delay={0.28} className={SMALL_LINE}>
            To the <span className="whitespace-nowrap">Takmeel-e-Hifz-ul-Quran</span> of
          </Reveal>
          <Reveal as="p" delay={0.36} className={SMALL_LINE}>
            Their beloved granddaughter
          </Reveal>
        </div>

        {/* Line 5 — honoree */}
        <h1 id="invitation-title" className="mt-8 sm:mt-10">
          <Reveal as="span" delay={0.48} y={16} duration={1.3} className="block">
            {/* padding keeps script swashes inside the clipped gold-foil background */}
            <span className="text-gold-foil animate-shimmer inline-block px-[0.2em] py-[0.08em] font-script text-6xl font-normal leading-[1.3] sm:text-7xl">
              {EVENT.honoree}
            </span>
          </Reveal>
        </h1>

        {/* Line 6 — parentage */}
        <Reveal
          as="p"
          delay={0.6}
          className="mt-5 pl-[0.35em] font-display text-[0.7rem] uppercase tracking-[0.35em] text-emerald-ink/80 sm:mt-6 sm:text-sm sm:tracking-[0.42em] sm:pl-[0.42em]"
        >
          {EVENT.lineage}
        </Reveal>

        <Reveal delay={0.7}>
          <Divider className="mt-12 text-gold" />
        </Reveal>
      </div>
    </section>
  )
}
