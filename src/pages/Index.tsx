import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Book, Brain, FileText, Lightbulb, Rocket } from "lucide-react";

interface StudyConfig {
  topic: string;
  duration: string;
  lessons: string;
}

const Index = () => {
  const [studyConfig, setStudyConfig] = useState<StudyConfig>({
    topic: "",
    duration: "",
    lessons: ""
  });
  const [showDashboard, setShowDashboard] = useState(false);

  const handleStartStudying = () => {
    if (studyConfig.topic.trim() && studyConfig.duration.trim() && studyConfig.lessons.trim()) {
      setShowDashboard(true);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-background to-secondary">
      <main className="container max-w-7xl mx-auto space-y-8">
        {!showDashboard ? (
          <div className="space-y-8 fade-in">
            <section className="text-center space-y-4 py-12">
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/9b502ecd-6762-4be7-815a-ba58aa69b2d5.png" 
                  alt="SmartStudyBot.AI Logo" 
                  className="h-24 mb-4"
                />
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your AI-powered study assistant for personalized learning and exam preparation
              </p>
              <div className="max-w-md mx-auto space-y-4 pt-8">
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="What topic would you like to study?"
                    value={studyConfig.topic}
                    onChange={(e) => setStudyConfig({...studyConfig, topic: e.target.value})}
                    className="text-lg"
                  />
                  <Input
                    type="text"
                    placeholder="How long do you have to study? (e.g., 2 weeks)"
                    value={studyConfig.duration}
                    onChange={(e) => setStudyConfig({...studyConfig, duration: e.target.value})}
                    className="text-lg"
                  />
                  <Input
                    type="text"
                    placeholder="Which lessons do you need to cover?"
                    value={studyConfig.lessons}
                    onChange={(e) => setStudyConfig({...studyConfig, lessons: e.target.value})}
                    className="text-lg"
                  />
                </div>
                <Button
                  onClick={handleStartStudying}
                  className="w-full hover-lift bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  Create Study Plan
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6 py-12">
              <FeatureCard
                icon={<Brain className="w-8 h-8" />}
                title="AI-Powered Learning"
                description="Personalized study plans tailored to your pace and style"
              />
              <FeatureCard
                icon={<FileText className="w-8 h-8" />}
                title="Smart Quizzes"
                description="Test your knowledge with AI-generated questions"
              />
              <FeatureCard
                icon={<Rocket className="w-8 h-8" />}
                title="Track Progress"
                description="Monitor your improvement with detailed analytics"
              />
            </section>
          </div>
        ) : (
          <Dashboard studyConfig={studyConfig} />
        )}
      </main>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="p-6 glass-card hover-lift">
    <div className="space-y-4">
      <div className="text-primary">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </Card>
);

const Dashboard = ({ studyConfig }: { studyConfig: StudyConfig }) => (
  <div className="space-y-6 fade-in">
    <header className="flex justify-between items-center">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold">Studying: {studyConfig.topic}</h2>
        <p className="text-muted-foreground">Duration: {studyConfig.duration} • Lessons: {studyConfig.lessons}</p>
      </div>
      <Button variant="outline" onClick={() => window.location.reload()}>
        New Study Plan
      </Button>
    </header>

    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6 glass-card">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Book className="w-5 h-5" /> Study Plan
          </h3>
          <p className="text-muted-foreground">
            Your personalized study plan is being generated...
          </p>
          <Progress value={33} className="w-full" />
        </div>
      </Card>

      <Card className="p-6 glass-card">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Lightbulb className="w-5 h-5" /> Quick Quiz
          </h3>
          <p className="text-muted-foreground">
            Test your knowledge with an AI-generated quiz
          </p>
          <Button className="w-full bg-primary hover:bg-primary/90">Start Quiz</Button>
        </div>
      </Card>
    </div>

    <Card className="p-6 glass-card">
      <h3 className="text-xl font-semibold mb-4">Learning Resources</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-secondary rounded-lg animate-pulse" />
        ))}
      </div>
    </Card>
  </div>
);

export default Index;
