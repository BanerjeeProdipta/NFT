import { useState } from 'react'
import ArtCard from '../../components/ui/ArtCard'
import PrimaryButton from '../../components/ui/PrimaryButton'
import { arts, tabItems } from '../../utils/data/collectionData'

function Collection() {
  const [selected, setSelected] = useState('Sport')

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-center">Collection</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit.
        </p>
      </div>

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
      <div>
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
    </div>
  )
}

export default Collection
