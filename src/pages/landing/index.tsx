import MotionDiv from '../../components/ui/MotionDiv'
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
      <MotionDiv>
        <Home />
      </MotionDiv>

      <MotionDiv>
        <Sponsored />
      </MotionDiv>

      <MotionDiv>
        <AboutUs />
      </MotionDiv>

      <MotionDiv>
        <Collection />
      </MotionDiv>

      <MotionDiv>
        <FeaturedArts />
      </MotionDiv>

      <MotionDiv>
        <TopCreator />
      </MotionDiv>

      <MotionDiv>
        <FAQ />
      </MotionDiv>

      <MotionDiv>
        <CallToAction />
      </MotionDiv>

      <MotionDiv>
        <Footer />
      </MotionDiv>

    </div>
  )
}

export default Landing
