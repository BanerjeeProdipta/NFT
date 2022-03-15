import PrimaryButton from '../../components/ui/PrimaryButton'
import homeData from '../../utils/data/homeData'

function Home() {
  return (
    <div className="items-center justify-between space-y-6 lg:flex lg:space-y-0">
      <div className="space-y-4 lg:w-1/2 lg:pr-24">
        <h1 className="text-5xl font-bold leading-normal">
          Create, Sell & Collect Your Own Creative NFT
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
        </p>
        <div className="flex items-center py-4 space-x-4">
          <PrimaryButton text="Explore Now" />
          <button
            type="button"
            className="px-4 py-2 text-white transition delay-200 rounded-lg bg-white/10 hover:bg-white hover:text-primaryLight whitespace-nowrap"
          >
            Sell NFT
          </button>

        </div>
        <div className="flex items-center justify-between">
          {homeData.map((item) => (
            <div key={item.title}>
              <h3 className="text-3xl font-bold">{item.count}</h3>
              <p>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:flex">
        <div className="flex flex-col justify-center space-y-4">
          <img src="/image/home/1.png" alt="art 1" />
          <img src="/image/home/2.png" alt="art 2" />
          <img src="/image/home/3.png" alt="art 3" />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <img src="/image/home/4.png" alt="art 4" />
          <img src="/image/home/5.png" alt="art 5" />
          <img src="/image/home/6.png" alt="art 6" />
        </div>
        <div className="flex flex-col justify-center"><img src="/image/home/7.png" alt="art 7" /></div>
      </div>

    </div>
  )
}

export default Home
