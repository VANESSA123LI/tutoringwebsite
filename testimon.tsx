import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      grade: "High School Senior",
      subject: "AP Calculus",
      quote: "Thanks to Elite Tutoring, I went from struggling with calculus to earning a 5 on my AP exam. My tutor made complex concepts easy to understand!",
      rating: 5
    },
    {
      name: "Michael Chen",
      grade: "College Sophomore",
      subject: "Organic Chemistry",
      quote: "The personalized approach and flexible scheduling made all the difference. I improved my grade from a C to an A in just one semester.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      grade: "8th Grade",
      subject: "Algebra",
      quote: "My daughter's confidence in math has completely transformed. She actually looks forward to her tutoring sessions now!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Student Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from students and parents who have achieved their academic goals with our help
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-card-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.grade}</p>
                  <p className="text-sm text-accent font-medium">{testimonial.subject}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-gold-subtle border-primary/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Join Our Success Stories</h3>
              <p className="text-card-foreground">
                Over 1,000+ students have achieved their academic goals with Elite Tutoring. 
                Start your success story today!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
