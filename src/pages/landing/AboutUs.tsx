import PrimaryButton from '../../components/ui/PrimaryButton'

function AboutUs() {
  return (
    <div className="space-y-8 text-center">
      <div className="space-y-2">
        <h2 className="text-center">About Us</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit.
        </p>
      </div>
      <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-x-8 md:space-y-0">
        <img src="image/aboutUs/1.png" alt="about us 1" className="max-w-md md:w-1/2" />
        <div className="space-y-4 text-left lg:w-1/2">
          <h3 className="text-3xl font-bold">Get Popular NFT</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
          <PrimaryButton text="Show more" />

        </div>
      </div>
    </div>
  )
}

export default AboutUs
