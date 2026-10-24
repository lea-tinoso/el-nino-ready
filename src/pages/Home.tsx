import { ChilimansiPopup } from '../components/ChilimansiPopup.tsx'
import { Checker } from '../components/Checker.tsx'
import { Checklist } from '../components/Checklist.tsx'
import { Faq } from '../components/Faq.tsx'
import { Footer } from '../components/Footer.tsx'
import { Hero } from '../components/Hero.tsx'
import { Hotlines } from '../components/Hotlines.tsx'
import { ProvinceCheck } from '../components/ProvinceCheck.tsx'
import { SubNav } from '../components/SubNav.tsx'
import { Timeline } from '../components/Timeline.tsx'
import { WhatsNext } from '../components/WhatsNext.tsx'
import { useReveal } from '../lib/reveal.ts'
import { useStoredState } from '../lib/storage.ts'

export default function Home() {
  const [province, setProvince] = useStoredState('province', '')
  const [done, setDone] = useStoredState<Record<string, boolean>>('done', {})
  useReveal()

  return (
    <div id="top">
      <Hero />
      <SubNav />
      <main className="-mt-[58px]">
        <ProvinceCheck province={province} onChange={setProvince} />
        <Checker />
        <Checklist
          done={done}
          onToggle={(id) => setDone((d) => ({ ...d, [id]: !d[id] }))}
          onClear={() => setDone({})}
        />
        <Checker />
        <Timeline />
        <Checker />
        <Faq />
        <Hotlines />
        <WhatsNext />
      </main>
      <Checker />
      <Footer />
      <ChilimansiPopup
        engaged={province !== '' || Object.values(done).some(Boolean)}
      />
    </div>
  )
}
