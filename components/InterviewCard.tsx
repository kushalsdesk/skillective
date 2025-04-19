import Link from "next/link";
import { Clock, MessageSquare, Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InterviewCardProps {
  id: string | number;
  title: string;
  techstack: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  duration: number;
  questions: number;
  mode?: "Text" | "Voice";
}

export default function InterviewCard({
  id,
  title,
  techstack,
  difficulty,
  duration,
  questions,
  mode,
}: InterviewCardProps) {
  return (
    <Card className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:bg-zinc-900/80 hover:border-purple-500/50 transition-all">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg text-zinc-100">{title}</CardTitle>
          <Badge
            variant={
              difficulty === "Easy"
                ? "outline"
                : difficulty === "Medium"
                  ? "secondary"
                  : "destructive"
            }
            className={
              difficulty === "Easy"
                ? "border-green-500/50 text-green-400"
                : difficulty === "Medium"
                  ? "border-yellow-500/50 text-yellow-400 bg-yellow-950/20"
                  : "border-red-500/50 text-red-400 bg-red-950/20"
            }
          >
            {difficulty}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {techstack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-zinc-800 border-zinc-700 text-zinc-400"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-center justify-between text-sm text-zinc-400">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>{questions} questions</span>
          </div>
          <div className="flex items-center gap-1">
            {mode === "Voice" ? (
              <Mic className="h-4 w-4" />
            ) : (
              <MessageSquare className="h-4 w-4" />
            )}
            <span>{mode}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={`/interviews/${id}`} className="w-full">
          <Button className="w-full bg-transparent border border-purple-500/50 hover:bg-purple-950/30 text-purple-400">
            Start Interview
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
