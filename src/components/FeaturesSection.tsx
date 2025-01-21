import { Camera, Battery, Smartphone } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "200MP Camera",
    description: "Capture stunning details with our most advanced camera system.",
  },
  {
    icon: Battery,
    title: "All-Day Battery",
    description: "5000mAh battery with super fast charging technology.",
  },
  {
    icon: Smartphone,
    title: "Snapdragon 8 Gen 3",
    description: "Unprecedented performance with the latest mobile processor.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Revolutionary Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-secondary-foreground/5 backdrop-blur-sm space-y-4 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <feature.icon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};