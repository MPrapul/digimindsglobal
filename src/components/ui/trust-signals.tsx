import Image from "next/image";

const clients = [
  {
    name: "Final Logo",
    logo: "/images/companies/Final logo (1).jpg",
  },
  {
    name: "Company 1",
    logo: "/images/companies/PHOTO-2025-05-14-21-43-50.jpg",
  },
  {
    name: "Company 2",
    logo: "/images/companies/PHOTO-2025-05-14-21-44-48.jpg",
  },
  {
    name: "Company 3",
    logo: "/images/companies/PHOTO-2025-05-14-21-48-22.jpg",
  },
  {
    name: "Physiocare Plus",
    logo: "/images/companies/physiocare plus.png",
  },
];

export function TrustSignals() {
  return (
    <section className="pt-8 pb-0 bg-white border-t border-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-blue-700">
          Trusted by Leading Organizations
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          We collaborate with forward-thinking companies across diverse industries to deliver exceptional digital transformation solutions
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mx-auto max-w-4xl mb-0">
          {clients.map((client) => (
            <div
              key={client.name}
              className="relative w-full h-20 grayscale hover:grayscale-0 transition-all duration-300 px-4 hover:scale-105"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-lg">
            <span className="text-blue-700 font-medium">Digital Marketing Partner</span>
            <div className="w-px h-6 bg-blue-200 mx-4"></div>
            <span className="text-blue-700 font-medium">Web Development Experts</span>
          </div>
        </div>
      </div>
    </section>
  );
} 