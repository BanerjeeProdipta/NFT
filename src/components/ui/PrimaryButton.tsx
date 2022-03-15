interface props{
  text:string
}

function PrimaryButton({ text }:props) {
  return (
    <button type="button" className="w-auto px-4 py-2 text-white transition delay-200 rounded-lg bg-gradient-to-bl from-primaryLight to-primaryDark hover:bg-gradient-to-tr">{text}</button>
  )
}

export default PrimaryButton
