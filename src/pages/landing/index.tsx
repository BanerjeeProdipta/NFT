import AboutUs from './AboutUs'
import Collection from './Collection'
import Home from './Home'
import Sponsored from './Sponsored'

function Landing() {
  return (
    <div className="space-y-20 lg:space-y-32">
      <Home />
      <Sponsored />
      <AboutUs />
      <Collection />
    </div>
  )
}

export default Landing
