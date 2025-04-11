"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ChevronRight,
  Crown,
  Plus,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import IslandNav from "@/components/IslandNav";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("interviews");

  // Mock user data
  const user = {
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 1250,
    level: 7,
    rank: 42,
    badges: [
      { id: 1, name: "First Interview", icon: <Award className="h-6 w-6" /> },
      { id: 2, name: "Perfect Score", icon: <Star className="h-6 w-6" /> },
      { id: 3, name: "5 Day Streak", icon: <Trophy className="h-6 w-6" /> },
    ],
    completedInterviews: [
      {
        id: 1,
        title: "React Mid-Level Interview",
        score: 85,
        techstack: ["React", "JavaScript", "CSS"],
        date: "2023-04-15",
        difficulty: "Medium",
      },
      {
        id: 2,
        title: "Node.js Backend Developer",
        score: 92,
        techstack: ["Node.js", "Express", "MongoDB"],
        date: "2023-04-10",
        difficulty: "Hard",
      },
      {
        id: 3,
        title: "Frontend Basics",
        score: 78,
        techstack: ["HTML", "CSS", "JavaScript"],
        date: "2023-04-05",
        difficulty: "Easy",
      },
    ],
  };

  // Calculate XP to next level
  const xpToNextLevel = 2000;
  const currentXp = user.points % xpToNextLevel;
  const xpProgress = (currentXp / xpToNextLevel) * 100;

  return (
    <div className="flex min-h-screen flex-col items-center bg-transparent text-zinc-100">
      <main className="flex-1 container py-12 pb-24 w-[85%] md:w-full">
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          {/* User Profile Sidebar */}
          <div className="space-y-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4 border-2 border-purple-500/30">
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-zinc-100">
                  {user.name}
                </h2>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span>Level {user.level}</span>
                </div>
                <div className="w-full mt-4 space-y-2">
                  <div className="flex justify-between text-sm text-zinc-400">
                    <span>
                      XP: {currentXp}/{xpToNextLevel}
                    </span>
                    <span>Level {user.level}</span>
                  </div>
                  <Progress
                    value={xpProgress}
                    className="h-2 bg-zinc-800"
                    indicatorClassName="bg-purple-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 w-full mt-6">
                  <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-800 border border-zinc-700">
                    <Crown className="h-5 w-5 text-yellow-500 mb-1" />
                    <span className="text-sm font-medium text-zinc-300">
                      Rank
                    </span>
                    <span className="text-xl font-bold text-zinc-100">
                      #{user.rank}
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-800 border border-zinc-700">
                    <Users className="h-5 w-5 text-purple-400 mb-1" />
                    <span className="text-sm font-medium text-zinc-300">
                      Points
                    </span>
                    <span className="text-xl font-bold text-zinc-100">
                      {user.points}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-100">Badges</CardTitle>
                <CardDescription className="text-zinc-400">
                  Achievements you've earned
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {user.badges.map((badge) => (
                    <div
                      key={badge.id}
                      className="flex flex-col items-center p-2 rounded-lg hover:bg-zinc-800"
                    >
                      <div className="h-10 w-10 rounded-full bg-purple-950/30 flex items-center justify-center text-purple-400 mb-1 border border-purple-500/20">
                        {badge.icon}
                      </div>
                      <span className="text-xs text-center text-zinc-300">
                        {badge.name}
                      </span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center p-2 rounded-lg hover:bg-zinc-800 cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 mb-1 border border-zinc-700">
                      <Plus className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-center text-zinc-500">
                      More
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-zinc-100">Your Profile</h1>
              <Link href="/create">
                <Button className="bg-transparent border border-purple-500/50 hover:bg-purple-950/30 text-purple-400">
                  Create Custom Interview
                </Button>
              </Link>
            </div>

            <Tabs
              defaultValue="interviews"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-2 bg-zinc-800 text-zinc-400">
                <TabsTrigger
                  value="interviews"
                  className="data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-100"
                >
                  Completed Interviews
                </TabsTrigger>
                <TabsTrigger
                  value="stats"
                  className="data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-100"
                >
                  Statistics
                </TabsTrigger>
              </TabsList>
              <TabsContent value="interviews" className="mt-6">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-100">
                      Your Interview History
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      You've completed {user.completedInterviews.length}{" "}
                      interviews
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {user.completedInterviews.map((interview) => (
                        <div
                          key={interview.id}
                          className="flex items-center justify-between p-4 rounded-lg border border-zinc-800 bg-zinc-800/50"
                        >
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-zinc-100">
                                {interview.title}
                              </h3>
                              <Badge
                                variant={
                                  interview.difficulty === "Easy"
                                    ? "outline"
                                    : interview.difficulty === "Medium"
                                      ? "secondary"
                                      : "destructive"
                                }
                                className={
                                  interview.difficulty === "Easy"
                                    ? "border-green-500/50 text-green-400"
                                    : interview.difficulty === "Medium"
                                      ? "border-yellow-500/50 text-yellow-400 bg-yellow-950/20"
                                      : "border-red-500/50 text-red-400 bg-red-950/20"
                                }
                              >
                                {interview.difficulty}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {interview.techstack.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="bg-zinc-800 border-zinc-700 text-zinc-400"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <span className="text-xs text-zinc-500 mt-1">
                              {new Date(interview.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex flex-col items-center">
                              <div
                                className={`text-lg font-bold ${
                                  interview.score >= 90
                                    ? "text-green-400"
                                    : interview.score >= 70
                                      ? "text-yellow-400"
                                      : "text-red-400"
                                }`}
                              >
                                {interview.score}%
                              </div>
                              <span className="text-xs text-zinc-500">
                                Score
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="stats" className="mt-6">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-100">
                      Performance Statistics
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      Your interview performance over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border border-zinc-800 rounded-lg bg-zinc-800/50">
                      <p className="text-zinc-500">
                        Performance chart will appear here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Island Navbar */}
      <IslandNav />
    </div>
  );
}
