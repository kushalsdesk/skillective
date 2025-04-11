"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Mic, MessageSquare, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IslandNav from "@/components/IslandNav";

export default function CreateInterviewPage() {
  const [selectedTechstack, setSelectedTechstack] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState("medium");
  const [mode, setMode] = useState("text");
  const [isGenerating, setIsGenerating] = useState(false);

  const techOptions = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Python",
    "Java",
    "C#",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "REST API",
  ];

  const handleTechstackChange = (tech: string) => {
    if (selectedTechstack.includes(tech)) {
      setSelectedTechstack(selectedTechstack.filter((item) => item !== tech));
    } else {
      setSelectedTechstack([...selectedTechstack, tech]);
    }
  };

  const handleGenerateInterview = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      // Redirectedirect would happen here in a real app
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-transparent text-zinc-100">
      <main className="flex-1 container py-12 pb-24 w-[85%] md:w-full">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <Link
              href="/interviews"
              className="flex items-center text-sm text-zinc-400 hover:text-zinc-100 mr-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              <Home className="h-4 w-4 mr-1" />
            </Link>
            <h1 className="text-3xl font-bold text-zinc-100">
              Create Custom Interview
            </h1>
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-zinc-100">Interview Details</CardTitle>
              <CardDescription className="text-zinc-400">
                Customize your interview experience by selecting the role,
                technologies, and difficulty level.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="role" className="text-zinc-300">
                  Role / Title
                </Label>
                <Input
                  id="role"
                  placeholder="e.g. Frontend Developer, Full Stack Engineer"
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-zinc-300">Select Techstack</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {techOptions.map((tech) => (
                    <div key={tech} className="flex items-center space-x-2">
                      <Checkbox
                        id={`tech-${tech}`}
                        checked={selectedTechstack.includes(tech)}
                        onCheckedChange={() => handleTechstackChange(tech)}
                        className="border-zinc-600 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                      />
                      <Label
                        htmlFor={`tech-${tech}`}
                        className="text-sm font-normal text-zinc-300"
                      >
                        {tech}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-zinc-300">Choose Difficulty</Label>
                <RadioGroup
                  defaultValue="medium"
                  value={difficulty}
                  onValueChange={setDifficulty}
                  className="text-zinc-300"
                >
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="easy"
                        id="easy"
                        className="border-zinc-600 text-purple-500"
                      />
                      <Label htmlFor="easy" className="font-normal">
                        Easy
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="medium"
                        id="medium"
                        className="border-zinc-600 text-purple-500"
                      />
                      <Label htmlFor="medium" className="font-normal">
                        Medium
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="hard"
                        id="hard"
                        className="border-zinc-600 text-purple-500"
                      />
                      <Label htmlFor="hard" className="font-normal">
                        Hard
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label className="text-zinc-300">Interview Mode</Label>
                <Tabs
                  defaultValue="text"
                  value={mode}
                  onValueChange={setMode}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 bg-zinc-800 text-zinc-400">
                    <TabsTrigger
                      value="text"
                      className="flex items-center gap-2 data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-100"
                    >
                      <MessageSquare className="h-4 w-4" />
                      AI Text
                    </TabsTrigger>
                    <TabsTrigger
                      value="voice"
                      className="flex items-center gap-2 data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-100"
                    >
                      <Mic className="h-4 w-4" />
                      AI Voice
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="text" className="mt-2">
                    <p className="text-sm text-zinc-400">
                      Text-based interview with AI-generated questions and
                      feedback. Type your answers.
                    </p>
                  </TabsContent>
                  <TabsContent value="voice" className="mt-2">
                    <p className="text-sm text-zinc-400">
                      Voice-based interview with AI that listens to your spoken
                      answers and provides feedback.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleGenerateInterview}
                disabled={isGenerating || selectedTechstack.length === 0}
                className="w-full bg-transparent border border-purple-500/50 hover:bg-purple-950/30 text-purple-400 disabled:border-zinc-700 disabled:text-zinc-600 disabled:bg-transparent"
              >
                {isGenerating
                  ? "Generating Interview..."
                  : "Generate Interview"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Island Navbar */}
      <IslandNav />
    </div>
  );
}
