import Image from "next/image";

const testimonial = {
  quote: "Redhibbert transformed our customer engagement strategy with Salesforce Marketing Cloud. Their expertise in both banking and technology made them the perfect partner for our digital transformation journey.",
  author: "Sarah Johnson",
  role: "VP of Digital Strategy",
  company: "Bank of America",
  image: "/testimonials/sarah.jpg",
};

export function Testimonial() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div>
            <p className="font-semibold text-lg">{testimonial.author}</p>
            <p className="text-gray-600">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 