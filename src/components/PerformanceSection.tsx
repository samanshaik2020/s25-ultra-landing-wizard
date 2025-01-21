import { Cpu, Zap, Smartphone } from "lucide-react";

const performanceFeatures = [
  {
    icon: Cpu,
    stat: "4nm",
    title: "Snapdragon 8 Gen 3",
    description: "Most powerful mobile processor",
  },
  {
    icon: Zap,
    stat: "16GB",
    title: "RAM",
    description: "Seamless multitasking performance",
  },
  {
    icon: Smartphone,
    stat: "1TB",
    title: "Storage",
    description: "Ultra-fast UFS 4.0 storage",
  },
];

export const PerformanceSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Unmatched Performance
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {performanceFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-secondary-foreground/10 backdrop-blur-sm"
            >
              <feature.icon className="h-12 w-12 mx-auto text-primary mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">
                {feature.stat}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};