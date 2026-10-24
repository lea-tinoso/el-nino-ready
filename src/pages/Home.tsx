import { Checklist } from '../components/Checklist.tsx'
import { Faq } from '../components/Faq.tsx'
import { Footer } from '../components/Footer.tsx'
import { Hero } from '../components/Hero.tsx'
import { Hotlines } from '../components/Hotlines.tsx'
import { ProvinceCheck } from '../components/ProvinceCheck.tsx'
import { Timeline } from '../components/Timeline.tsx'
import { useReveal } from '../lib/reveal.ts'
import { useStoredState } from '../lib/storage.ts'

export default function Home() {
  const [province, setProvince] = useStoredState('province', '')
  const [done, setDone] = useStoredState<Record<string, boolean>>('done', {})
  useReveal()

  if (import.meta.env.VITE_HERO_ONLY) {
    return (
      <div id="top" className="min-h-svh bg-paper">
        <Hero />
      </div>
    )
  }

  return (
    <div id="top">
      <Hero />
      <main>
        <ProvinceCheck province={province} onChange={setProvince} />
        <Checklist
          done={done}
          onToggle={(id) => setDone((d) => ({ ...d, [id]: !d[id] }))}
          onClear={() => setDone({})}
        />
        <Timeline />
        <Faq />
        <Hotlines />
      </main>
      <Footer />
    </div>
  )
}
