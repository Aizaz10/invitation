import { MotionConfig } from 'framer-motion'
import { useEffect, useState } from 'react'
import Cover from './components/Cover'
import AyahSection from './components/sections/AyahSection'
import ClosingSection from './components/sections/ClosingSection'
import CountdownSection from './components/sections/CountdownSection'
import DressCodeSection from './components/sections/DressCodeSection'
import InvitationSection from './components/sections/InvitationSection'
import TimelineSection from './components/sections/TimelineSection'
import VenueSection from './components/sections/VenueSection'
import ScrollProgress from './components/ui/ScrollProgress'
import { COVER_TOTAL_MS } from './utils/motion'

/** closed → opening (doors parting) → open (cover removed from the DOM) */
export default function App() {
  const [phase, setPhase] = useState('closed')

  // Always start at the top, behind the cover
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  // Lock scrolling until the doors have fully parted
  useEffect(() => {
    const root = document.documentElement
    root.style.overflow = phase === 'open' ? '' : 'hidden'
    return () => {
      root.style.overflow = ''
    }
  }, [phase])

  // Safety net in case the animation-complete callback is skipped
  useEffect(() => {
    if (phase !== 'opening') return
    const id = setTimeout(() => setPhase('open'), COVER_TOTAL_MS + 400)
    return () => clearTimeout(id)
  }, [phase])

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />

      {phase !== 'open' && (
        <Cover
          opening={phase === 'opening'}
          onOpen={() => setPhase('opening')}
          onOpened={() => setPhase('open')}
        />
      )}

      <div inert={phase === 'closed'} className="relative overflow-x-clip">
        <main>
          <AyahSection revealed={phase !== 'closed'} />
          <InvitationSection />
          <CountdownSection />
          <TimelineSection />
          <DressCodeSection />
          <VenueSection />
        </main>
        <ClosingSection />
      </div>
    </MotionConfig>
  )
}
