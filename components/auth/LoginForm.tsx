"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { AtSign, Lock } from "lucide-react";
import FormField from "@/components/auth/FormField";
import SocialButtons from "@/components/auth/SocialButtons";
import { useRouter } from "next/navigation";

// Login form schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const onSubmit = async (data: LoginFormValues) => {
    const { email, password } = data;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();

      if (result.success) {
        router.push("/");
      } else {
        console.log(result.error);
      }
    } catch (err) {
      console.error("Login Failed:", err);
    }
  };

  function handleSocialLogin(provider: string) {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <FormField
        id="email"
        label="Email"
        type="email"
        placeholder="m@example.com"
        icon={<AtSign className="h-4 w-4" />}
        error={errors.email?.message}
        register={register("email")}
      />

      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        icon={<Lock className="h-4 w-4" />}
        error={errors.password?.message}
        register={register("password")}
        link={{
          text: "Forgot password?",
          href: "#",
        }}
      />

      <Button
        type="submit"
        className="w-full mt-2 bg-gradient-to-r from-purple-500/80 to-purple-700/80 hover:from-purple-600 hover:to-purple-800 text-white border-0 transition-all duration-200"
      >
        Log In
      </Button>

      <SocialButtons onSocialLogin={handleSocialLogin} />
    </form>
  );
}
