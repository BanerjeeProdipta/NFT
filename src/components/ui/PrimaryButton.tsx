interface props{
  text:string,
  className?:string
}

function PrimaryButton({ text, className }:props) {
  return (
    <button type="button" className={`px-4 py-2 text-white transition delay-200 rounded-lg bg-gradient-to-bl from-primaryLight to-primaryDark hover:bg-gradient-to-tr ${className}`}>{text}</button>
  )
}

PrimaryButton.defaultProps = {
  className: '',
}

export default PrimaryButton
