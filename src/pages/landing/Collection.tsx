import { useState } from 'react'
import ArtCard from '../../components/ui/ArtCard'
import PrimaryButton from '../../components/ui/PrimaryButton'
import SectionHeader from '../../components/ui/SectionHeader'
import { arts, tabItems } from '../../utils/data/collectionData'

function Collection() {
  const [selected, setSelected] = useState('Sport')

  return (
    <div id="collections" className="space-y-4">
      <SectionHeader
        title="Collection"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <div className="justify-between text-white sm:flex">
        {tabItems.map((item) => (
          selected === item
            ? (
              <PrimaryButton
                key={item}
                text={item}
                className="w-full m-2"
              />
            )
            : (
              <button key={item} type="button" onClick={() => setSelected(item)} className="w-full py-2 m-2 rounded-lg bg-white/20">
                {item}
              </button>
            )
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {arts.map((art) => (
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

export default Collection
