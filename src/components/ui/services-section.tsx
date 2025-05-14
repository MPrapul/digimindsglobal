import Link from "next/link";

const services = [
  {
    title: "Marketing Cloud",
    description: "Create personalized customer journeys and deliver targeted campaigns across all channels.",
    icon: "🎯",
  },
  {
    title: "Data Cloud",
    description: "Unify customer data across systems and create a single source of truth for better insights.",
    icon: "📊",
  },
  {
    title: "AI/CRM Solutions",
    description: "Leverage AI-powered analytics and automation to enhance customer engagement.",
    icon: "🤖",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 