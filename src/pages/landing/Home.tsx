import Button from '../../components/ui/Button'
import homeData from '../../utils/data/homeData'

function Home() {
  return (
    <div className="lg:flex">
      <div className="space-y-4 lg:w-1/2 lg:pr-8">
        <h1 className="text-[50px] font-bold">
          Create, Sell & Collect Your Own Creative NFT
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
        </p>
        <div className="flex items-center py-4 space-x-4">
          <Button text="Explore Now" />
          <button
            type="button"
            className="px-4 py-2 text-white rounded-lg bg-white/10 whitespace-nowrap"
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

      <div>
        images
      </div>

    </div>
  )
}

export default Home
