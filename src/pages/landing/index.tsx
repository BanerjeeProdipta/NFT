import AboutUs from './AboutUs'
import CallToAction from './CallToAction'
import Collection from './Collection'
import FAQ from './FAQ'
import FeaturedArts from './FeaturedArts'
import Home from './Home'
import Sponsored from './Sponsored'
import TopCreator from './TopCreator'

function Landing() {
  return (
    <div className="space-y-20 lg:space-y-32">
      <Home />
      <Sponsored />
      <AboutUs />
      <Collection />
      <FeaturedArts />
      <TopCreator />
      <FAQ />
      <CallToAction />
    </div>
  )
}

export default Landing
