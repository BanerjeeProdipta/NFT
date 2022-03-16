import AboutUs from './AboutUs'
import CallToAction from './CallToAction'
import Collection from './Collection'
import FAQ from './FAQ'
import FeaturedArts from './FeaturedArts'
import Footer from './Footer'
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
      <Footer />
    </div>
  )
}

export default Landing
