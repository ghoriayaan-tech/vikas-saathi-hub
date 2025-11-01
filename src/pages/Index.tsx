import Hero from "@/components/Hero";
import ProblemCards from "@/components/ProblemCards";
import SolutionSplit from "@/components/SolutionSplit";
import TaplessDemo from "@/components/TaplessDemo";
import AltCreditDemo from "@/components/AltCreditDemo";
import MetricsGrid from "@/components/MetricsGrid";
import PersonaCards from "@/components/PersonaCards";
import PilotCards from "@/components/PilotCards";
import TeamVision from "@/components/TeamVision";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemCards />
      <SolutionSplit />
      
      {/* Interactive Demos Section */}
      <section id="demo" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Experience the Future
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Try our working demos and see the magic yourself
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <TaplessDemo />
            <AltCreditDemo />
          </div>
        </div>
      </section>

      <MetricsGrid />
      <PersonaCards />
      <PilotCards />
      <TeamVision />
      <CTAFooter />
    </div>
  );
};

export default Index;
