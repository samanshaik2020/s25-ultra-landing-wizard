const specs = [
  { label: "Display", value: "6.8\" Dynamic AMOLED 2X" },
  { label: "Resolution", value: "3088 x 1440 (500 ppi)" },
  { label: "Processor", value: "Snapdragon 8 Gen 3" },
  { label: "RAM", value: "12GB/16GB" },
  { label: "Storage", value: "256GB/512GB/1TB" },
  { label: "Battery", value: "5000mAh" },
];

export const SpecsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical Specifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-sm text-gray-500 mb-2">{spec.label}</h3>
              <p className="text-lg font-semibold">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};