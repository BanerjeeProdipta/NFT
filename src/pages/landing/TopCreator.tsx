import CreatorCard from '../../components/ui/CreatorCard'
import topCreators from '../../utils/data/creatorData'

function TopCreator() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-center">Top Creator</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {topCreators.map((creator) => (
          <CreatorCard
            key={creator.img}
            banner={creator.banner}
            img={creator.img}
            bio={creator.bio}
            name={creator.name}
          />
        ))}
      </div>
    </div>
  )
}

export default TopCreator
