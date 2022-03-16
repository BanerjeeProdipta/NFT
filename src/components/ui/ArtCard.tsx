import PrimaryButton from './PrimaryButton'

interface props{
  img:string;
  author:string;
  price:string;
  name:string;
}

function ArtCard({
  img, author, price, name,
}:props) {
  return (
    <div className="p-4 space-y-4 rounded-lg bg-white/10">
      <img src={img} alt={img} className="object-scale-down w-full xs:object-fill" />
      <div className="flex flex-wrap justify-between">
        <div className="space-y-2">
          <p>
            @
            {author}
          </p>
          <h4 className="text-xl font-semibold">{name}</h4>
        </div>
        <div>
          <p className="text-xs not-prose">
            Current Bid
          </p>
          <h4 className="text-xl font-semibold text-right">
            {price}
          </h4>
        </div>
      </div>
      <PrimaryButton
        text="Place a bid"
        className="w-full"
      />
    </div>
  )
}

export default ArtCard
