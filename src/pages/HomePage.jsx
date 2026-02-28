import Hero from '../components/Hero'
import WhoAreWe from '../components/WhoAreWe'
import Mission from '../components/Mission'
import Services from '../components/Services'
import FounderNote from '../components/FounderNote'
import CallToAction from '../components/CallToAction'
import WhyChooseUs from '../components/WhyChooseUs'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhoAreWe />
      <Services />
      <Mission />
      <WhyChooseUs />
      <FounderNote />
      <CallToAction />
    </div>
  )
}
