import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="prose-p:text-sm prose-h4:font-bold prose-h4:text-xl prose-h4:text-white">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
        <div className="col-span-2">
          <h1 className="mb-2 text-xl font-bold text-white">
            Psycho
            <span className="text-primaryLight">Art</span>
          </h1>
          <p className="max-w-xs">
            The best NFT marketplace
            website in the world and feel your experience in selling or buy our work
          </p>
        </div>
        <div className="space-y-3">
          <h4>About</h4>
          <Link to="/" className="block">
            Product
          </Link>
          <Link to="/" className="block">
            Resource
          </Link>
          <Link to="/" className="block">
            Term & Condition
          </Link>
          <Link to="/" className="block">
            FAQ
          </Link>
        </div>
        <div className="space-y-3">
          <h4>Company</h4>
          <Link to="/" className="block">
            Our Team
          </Link>
          <Link to="/" className="block">
            Partner With Us
          </Link>
          <Link to="/" className="block">
            Privacy & Policy
          </Link>
          <Link to="/" className="block">
            Features
          </Link>
        </div>
        <div className="space-y-3">
          <h4>Contact</h4>
          <p />
          <div>
            <a
              href="tel: +01234567895"
            >
              <p>
                +012 3456789
              </p>
            </a>
          </div>
          <div>

            <a
              href="mailto:saquib@universalmachine.io
          "
            >
              <p>
                saquib@universalmachine.io

              </p>
            </a>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="block">
              <img src="/image/footer/youtube.png" alt="youtube" />
            </Link>
            <Link to="/" className="block">
              <img src="/image/footer/discord.png" alt="discord" />
            </Link>
            <Link to="/" className="block">
              <img src="/image/footer/instagram.png" alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
      <p className="py-24 text-center">
        Tero Labs | All Right Reserved!
      </p>
    </div>
  )
}

export default Footer
