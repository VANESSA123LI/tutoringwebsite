import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
          Elite Tutoring
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
          Unlock your academic potential with personalized, one-on-one tutoring 
          from certified experts across all subjects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
            Start Learning Today
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg">
            View Our Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
