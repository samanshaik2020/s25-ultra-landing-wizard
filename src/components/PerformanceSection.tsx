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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
          Unmatched Performance
        </h2>
        <div className="relative mb-12 group animate-fade-up">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            alt="Performance"
            className="w-full h-64 object-cover rounded-lg transform transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent rounded-lg"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {performanceFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-secondary-foreground/10 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
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