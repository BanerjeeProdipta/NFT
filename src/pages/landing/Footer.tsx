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
          <p>
            Product
          </p>
          <p>
            Resource
          </p>
          <p>
            Term & Condition
          </p>
          <p>
            FAQ
          </p>
        </div>
        <div className="space-y-3">
          <h4>Company</h4>
          <p>
            Our Team
          </p>
          <p>
            Partner With Us
          </p>
          <p>
            Privacy & Policy
          </p>
          <p>
            Features
          </p>
        </div>
        <div className="space-y-3">
          <h4>Contact</h4>
          <p>
            +012 3456789
          </p>
          <p>
            saquib@universalmachine.io
          </p>
          <div className="flex space-x-6">
            <img src="/image/footer/youtube.png" alt="youtube" />
            <img src="/image/footer/discord.png" alt="discord" />
            <img src="/image/footer/instagram.png" alt="instagram" />
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
