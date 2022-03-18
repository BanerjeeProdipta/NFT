import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Routes from './routes/Routes'
import './styles/global.css'
import './styles/tailwind.css'

function App() {
  return (
    <div
      className="min-h-screen selection:bg-primaryLight/10 selection:text-primaryDark"
      style={{
        background: 'linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)',
      }}
    >
      <BrowserRouter>
        <div className="prose-p:font-medium prose-p:text-xl text-white/50 prose-h2:leading-[3rem] prose-headings:text-white prose-h2:font-[Roboto] prose-h2:font-bold prose-h2:text-4xl prose-p:leading-relaxed">
          <div
            className="fixed w-full"
            style={{ backdropFilter: 'blur(6px)' }}
          >
            <Navbar />
          </div>
          <div className="p-4 lg:container lg:mx-auto">
            <div className="flex flex-col items-center justify-center">
              <div className="max-w-6xl mt-12 sm:mt-16 lg:mt-32">
                <Routes />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
