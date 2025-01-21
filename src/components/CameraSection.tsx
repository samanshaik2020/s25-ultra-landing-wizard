import { Camera, Aperture, Video } from "lucide-react";

const cameraFeatures = [
  {
    icon: Camera,
    title: "200MP Main Camera",
    description: "Capture life-like details in stunning resolution",
  },
  {
    icon: Aperture,
    title: "Night Mode 2.0",
    description: "Advanced AI-powered low-light photography",
  },
  {
    icon: Video,
    title: "8K Video",
    description: "Professional-grade video recording at 8K resolution",
  },
];

export const CameraSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
          Revolutionary Camera System
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group animate-fade-right">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Camera Features"
              className="rounded-lg shadow-xl transform transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg transform transition-all duration-500 group-hover:opacity-0"></div>
          </div>
          <div className="space-y-8">
            {cameraFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 animate-fade-left"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <feature.icon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};