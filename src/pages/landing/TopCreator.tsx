import CreatorCard from '../../components/ui/CreatorCard'
import SectionHeader from '../../components/ui/SectionHeader'
import topCreators from '../../utils/data/creatorData'

function TopCreator() {
  return (
    <div className="space-y-4">
      <SectionHeader
        title="Top Creator"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
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
