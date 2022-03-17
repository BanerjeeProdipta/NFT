import ArtCard from '../../components/ui/ArtCard'
import SectionHeader from '../../components/ui/SectionHeader'
import featuredArts from '../../utils/data/featuredArts'

function FeaturedArts() {
  return (
    <div id="featured-arts" className="space-y-4">
      <SectionHeader
        title="Featured Artworks"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
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
