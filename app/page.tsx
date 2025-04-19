import Link from "next/link";
import { ArrowRight, Award, MessageSquare, Mic, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import IslandNav from "@/components/IslandNav";
import Image from "next/image";

export default function LandingPage() {
  const featuredInterviews = [
    {
      id: 1,
      title: "React Mid-Level Interview",
      techstack: ["React", "JavaScript", "CSS"],
      difficulty: "Medium" as const,
      duration: 30,
      questions: 15,
    },
    {
      id: 2,
      title: "Full Stack Developer",
      techstack: ["React", "Node.js", "MongoDB"],
      difficulty: "Hard" as const,
      duration: 45,
      questions: 20,
    },
    {
      id: 3,
      title: "Frontend Basics",
      techstack: ["HTML", "CSS", "JavaScript"],
      difficulty: "Easy" as const,
      duration: 20,
      questions: 10,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center mx-auto text-zinc-100">
      <main className="flex-1 container py-12 w-[85%] md:w-full">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Welcome Section */}
          <div className="space-y-4 text-center">
            <div className="flex flex-row gap-2 justify-center items-center">
              <Image
                src="/logo.png"
                height={100}
                width={100}
                alt="logo"
                className="object-contain"
              />
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl leading-none">
                Skillective - AI Interviews
              </h1>
            </div>

            <p className="text-zinc-400 max-w-[700px] mx-auto">
              Prepare for your next job interview with our AI-powered platform.
              Get real-time feedback, practice with voice interactions, earn
              badges, and climb the leaderboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/interviews">
                <Button className="w-full sm:w-auto border border-purple-500 bg-transparent hover:bg-purple-950 text-purple-400">
                  Start Practicing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/create">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"
                >
                  Create Custom Interview
                </Button>
              </Link>
            </div>
          </div>

          {/* Featured Interviews */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Featured Interviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredInterviews.map((interview) => (
                <InterviewCard
                  key={interview.id}
                  id={interview.id}
                  title={interview.title}
                  techstack={interview.techstack}
                  difficulty={interview.difficulty}
                  duration={interview.duration}
                  questions={interview.questions}
                />
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Why InterviewAI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 space-y-4 hover:border-purple-500/50 transition-all">
                <div className="rounded-full bg-purple-950/30 p-3 w-fit border border-purple-500/20">
                  <MessageSquare className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">AI-Generated Interviews</h3>
                <p className="text-zinc-400">
                  Custom interviews tailored to your experience level, role, and
                  tech stack preferences.
                </p>
              </div>
              <div className="bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 space-y-4 hover:border-purple-500/50 transition-all">
                <div className="rounded-full bg-purple-950/30 p-3 w-fit border border-purple-500/20">
                  <Mic className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Voice Interaction</h3>
                <p className="text-zinc-400">
                  Practice speaking your answers with our voice recognition
                  technology for a realistic experience.
                </p>
              </div>
              <div className="bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 space-y-4 hover:border-purple-500/50 transition-all">
                <div className="rounded-full bg-purple-950/30 p-3 w-fit border border-purple-500/20">
                  <Award className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Badges & Leaderboard</h3>
                <p className="text-zinc-400">
                  Earn badges for your achievements and compete with others on
                  our global leaderboard.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 space-y-4 hover:border-purple-500/50 transition-all">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-zinc-400">
                  "After practicing with InterviewAI for just two weeks, I felt
                  so much more confident in my technical interviews. I landed a
                  job at a top tech company!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-zinc-800"></div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-zinc-500">
                      Software Engineer at Google
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 space-y-4 hover:border-purple-500/50 transition-all">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-zinc-400">
                  "The voice interaction feature helped me overcome my interview
                  anxiety. The feedback was incredibly valuable and helped me
                  improve rapidly."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-zinc-800"></div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-xs text-zinc-500">
                      Frontend Developer at Meta
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 space-y-4 hover:border-purple-500/50 transition-all">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-zinc-400">
                  "As a career switcher, I needed a lot of practice.
                  InterviewAI's custom interviews helped me focus on the areas I
                  needed to improve the most."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-zinc-800"></div>
                  <div>
                    <p className="text-sm font-medium">Jessica Patel</p>
                    <p className="text-xs text-zinc-500">
                      Data Scientist at Amazon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Island Navbar */}
      <IslandNav />
    </div>
  );
}
