import AboutUs from './AboutUs'
import Home from './Home'
import Sponsored from './Sponsored'

function Landing() {
  return (
    <div className="space-y-20 lg:space-y-32">
      <Home />
      <Sponsored />
      <AboutUs />
    </div>
  )
}

export default Landing
