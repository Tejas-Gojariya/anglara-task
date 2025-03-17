"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur quam adipiscing quam ipsum dolor?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum faucibus sed integer facilisis. Massa nunc velit nunc faucibus. Tempus nulla ut tempus massa lacus adipiscing. Pellentesque magna scelerisque et.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur quam adipiscing quam ipsum dolor?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum faucibus sed integer facilisis. Massa nunc velit nunc faucibus. Tempus nulla ut tempus massa lacus adipiscing. Pellentesque magna scelerisque et.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur quam adipiscing quam ipsum dolor?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum faucibus sed integer facilisis. Massa nunc velit nunc faucibus. Tempus nulla ut tempus massa lacus adipiscing. Pellentesque magna scelerisque et.",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button className="flex justify-between items-center w-full text-left" onClick={() => toggleFaq(index)}>
                <h3 className="text-lg font-medium text-gray-900">
                  {index + 1}. {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && <div className="mt-2 text-gray-600 pl-6">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

