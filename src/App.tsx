import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import './styles/global.css'
import './styles/tailwind.css'

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)',
      }}
    >
      <div className="container p-4 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-6xl prose-p:font-medium prose-p:text-xl text-white/50 prose-headings:text-white prose-h2:font-[Roboto] prose-h2:font-bold prose-h2:text-4xl">
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
