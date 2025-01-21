import { Battery, Zap, Clock } from "lucide-react";

export const BatterySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          All-Day Power
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Battery className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">5000mAh Battery</h3>
                <p className="text-gray-600">
                  Massive battery capacity for extended use
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Zap className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">45W Fast Charging</h3>
                <p className="text-gray-600">
                  0 to 50% in just 30 minutes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Intelligent Power Management</h3>
                <p className="text-gray-600">
                  AI-optimized battery life for your usage patterns
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-primary/10 rounded-full flex items-center justify-center">
              <Battery className="h-32 w-32 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};