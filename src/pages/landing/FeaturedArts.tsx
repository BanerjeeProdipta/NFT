import ArtCard from '../../components/ui/ArtCard'
import featuredArts from '../../utils/data/featuredArts'

function FeaturedArts() {
  return (
    <div id="featured-arts" className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-center">Featured Artworks</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        {featuredArts.map((art) => (
          <ArtCard
            key={art.img}
            img={art.img}
            author={art.author}
            price={art.price}
            name={art.name}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedArts
