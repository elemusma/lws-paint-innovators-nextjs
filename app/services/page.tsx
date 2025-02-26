import { Company } from "../components/globals";

export default function Services() {
  const services = [
    {
      title: "Industrial Painting",
      description:
        "Professional industrial coating solutions for manufacturing facilities and equipment",
      icon: "🏭",
    },
    {
      title: "Commercial Painting",
      description:
        "Expert painting services for offices, retail spaces, and commercial buildings",
      icon: "🏢",
    },
    {
      title: "Specialty Coatings",
      description:
        "Advanced coating applications for specific industrial requirements",
      icon: "🎨",
    },
  ];

  return (
    <div className="services-container max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        {Company} Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card p-6 rounded-lg shadow-lg bg-white"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
