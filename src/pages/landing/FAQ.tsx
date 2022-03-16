import Accordion from '../../components/ui/Accordion'
import faqData from '../../utils/data/faqData'

function FAQ() {
  return (
    <div id="faq" className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-center">
          Frequently Asked
          <br />
          Question
        </h2>
        <p className="text-center">
          Wanna Ask Something?
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
