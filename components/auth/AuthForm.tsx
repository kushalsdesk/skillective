"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-900/80 backdrop-blur-sm border border-zinc-800">
        <CardHeader className="space-y-6">
          <div className="flex flex-row gap-2 justify-center items-center">
            <Image
              src="/logo.png"
              height={100}
              width={100}
              alt="logo"
              className="object-contain"
            />
            <CardTitle className="text-2xl font-bold text-center">
              Welcome to Skillective
            </CardTitle>
          </div>
          <div className="flex flex-row justify-evenly items-center gap-4">
            <Link
              href={"/"}
              className="flex flex-row gap-2 justify-center items-center text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]"
            >
              <ChevronLeft className="h-6 w-6" />
              <p className="inline text-sm">Back to Home</p>
            </Link>
            <CardDescription className="text-center text-zinc-400">
              {activeTab === "login"
                ? "Sign in to your account"
                : "Create a new account"}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs
            defaultValue="login"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "login" | "signup")}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 mb-6 bg-zinc-800/50">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-purple-950/30 data-[state=active]:text-purple-400 data-[state=active]:shadow-none"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="data-[state=active]:bg-purple-950/30 data-[state=active]:text-purple-400 data-[state=active]:shadow-none"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="px-6">
              <LoginForm />
            </TabsContent>

            <TabsContent value="signup" className="px-6">
              <SignupForm />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-zinc-800 p-4 mt-4 text-sm text-zinc-400">
          {activeTab === "login" ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setActiveTab("signup")}
                className="text-purple-400 hover:text-purple-300 hover:underline"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setActiveTab("login")}
                className="text-purple-400 hover:text-purple-300 hover:underline"
              >
                Sign in
              </button>
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
