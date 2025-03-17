import { Truck, ShieldCheck, HeadphonesIcon, CreditCard } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on all orders over $50",
    },
    {
      icon: ShieldCheck,
      title: "Money Guarantee",
      description: "30 days money back guarantee",
    },
    {
      icon: HeadphonesIcon,
      title: "Online Support",
      description: "24/7 customer support",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Pay with multiple credit cards",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center p-4 border border-gray-100 rounded-lg">
              <div className="mr-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-500">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

