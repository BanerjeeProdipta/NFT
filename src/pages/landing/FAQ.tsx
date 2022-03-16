import Accordion from '../../components/ui/Accordion'
import faqData from '../../utils/data/faqData'

function FAQ() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-center">Featured Artworks</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {
          faqData.map((faq, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Accordion key={index} title={faq.title} body={faq.body} />
          ))
        }
      </div>
    </div>
  )
}

export default FAQ
