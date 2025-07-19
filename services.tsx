import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const subjects = [
    {
      title: "Mathematics",
      description: "From basic arithmetic to advanced calculus, our math tutors help students excel in all areas of mathematics.",
      icon: "📊"
    },
    {
      title: "Science",
      description: "Expert guidance in physics, chemistry, biology, and earth sciences with hands-on learning approaches.",
      icon: "🔬"
    },
    {
      title: "English & Literature",
      description: "Improve reading comprehension, writing skills, and literary analysis with our language arts specialists.",
      icon: "📚"
    },
    {
      title: "Test Preparation",
      description: "Comprehensive prep for SAT, ACT, GRE, GMAT, and other standardized tests with proven strategies.",
      icon: "🎯"
    },
    {
      title: "Foreign Languages",
      description: "Learn Spanish, French, German, Mandarin, and more with native-speaking tutors.",
      icon: "🌍"
    },
    {
      title: "Computer Science",
      description: "Programming, algorithms, data structures, and software development from beginner to advanced.",
      icon: "💻"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Subjects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tutoring across all academic disciplines with expert instructors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold group">
              <CardHeader>
                <div className="text-4xl mb-2 group-hover:animate-gold-glow">{subject.icon}</div>
                <CardTitle className="text-primary">{subject.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-card-foreground">
                  {subject.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
