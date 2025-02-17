
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Book, Brain, FileText, Lightbulb, Rocket } from "lucide-react";

const Index = () => {
  const [topic, setTopic] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  const handleStartStudying = () => {
    if (topic.trim()) {
      setShowDashboard(true);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-background to-secondary">
      <main className="container max-w-7xl mx-auto space-y-8">
        {!showDashboard ? (
          <div className="space-y-8 fade-in">
            <section className="text-center space-y-4 py-20">
              <h1 className="text-5xl font-bold tracking-tight">
                SmartStudyBot.ai
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your AI-powered study assistant for personalized learning and exam preparation
              </p>
              <div className="max-w-md mx-auto space-y-4 pt-8">
                <Input
                  type="text"
                  placeholder="Enter your study topic..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="text-lg"
                />
                <Button
                  onClick={handleStartStudying}
                  className="w-full hover-lift"
                  size="lg"
                >
                  Start Studying
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
          <Dashboard topic={topic} />
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

const Dashboard = ({ topic }: { topic: string }) => (
  <div className="space-y-6 fade-in">
    <header className="flex justify-between items-center">
      <h2 className="text-3xl font-bold">Studying: {topic}</h2>
      <Button variant="outline" onClick={() => window.location.reload()}>
        New Topic
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
          <Button className="w-full">Start Quiz</Button>
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
