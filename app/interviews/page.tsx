import Link from "next/link";
import { Plus, Home, MessageSquare, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import IslandNav from "@/components/IslandNav";

export default function InterviewsPage() {
  // Mock interview data
  const interviews = [
    {
      id: 1,
      title: "React Mid-Level Interview",
      techstack: ["React", "JavaScript", "CSS"],
      difficulty: "Medium" as const,
      duration: 30,
      questions: 15,
      mode: "Text" as const,
    },
    {
      id: 2,
      title: "Full Stack Developer",
      techstack: ["React", "Node.js", "MongoDB"],
      difficulty: "Hard" as const,
      duration: 45,
      questions: 20,
      mode: "Voice" as const,
    },
    {
      id: 3,
      title: "Frontend Basics",
      techstack: ["HTML", "CSS", "JavaScript"],
      difficulty: "Easy" as const,
      duration: 20,
      questions: 10,
      mode: "Text" as const,
    },
    {
      id: 4,
      title: "Backend Developer",
      techstack: ["Node.js", "Express", "SQL"],
      difficulty: "Medium" as const,
      duration: 35,
      questions: 18,
      mode: "Text" as const,
    },
    {
      id: 5,
      title: "DevOps Engineer",
      techstack: ["Docker", "Kubernetes", "AWS"],
      difficulty: "Hard" as const,
      duration: 40,
      questions: 15,
      mode: "Voice" as const,
    },
    {
      id: 6,
      title: "Data Structures & Algorithms",
      techstack: ["JavaScript", "Python", "Algorithms"],
      difficulty: "Medium" as const,
      duration: 45,
      questions: 12,
      mode: "Text" as const,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-transparent text-zinc-100">
      <main className="flex-1 container py-12 pb-24 w-[85%] md:w-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Available Interviews</h1>
          <Link href="/create">
            <Button className="bg-transparent border border-purple-500/50 hover:bg-purple-950/30 text-purple-400">
              <Plus className="h-4 w-4 mr-2" />
              Create Custom
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              id={interview.id}
              title={interview.title}
              techstack={interview.techstack}
              difficulty={interview.difficulty}
              duration={interview.duration}
              questions={interview.questions}
              mode={interview.mode}
            />
          ))}
        </div>
      </main>

      {/* Island Navbar */}
      <IslandNav />
    </div>
  );
}
