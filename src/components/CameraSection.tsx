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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Revolutionary Camera System
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cameraFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};