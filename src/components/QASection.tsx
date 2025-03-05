import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface QASectionProps {
  faqs: Array<{ question: string; answer: string }>
}

export function QASection({ faqs }: QASectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }
  
  return (
    <div className="my-16">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-8"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-md border border-amber-100 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-lg' : ''
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-semibold text-lg text-black">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-amber-700" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amber-700" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 border-t border-amber-100 animate-fade-in">
                  <p className="text-gray-800">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QASection 