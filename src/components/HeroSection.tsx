import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-light/10 to-transparent px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary">
            Samsung S25 Ultra
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Experience the future of mobile technology with our most powerful smartphone yet.
          </p>
          <div className="flex gap-4">
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Pre-order now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </div>
        <div className="relative animate-fade-down">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Samsung S25 Ultra"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};