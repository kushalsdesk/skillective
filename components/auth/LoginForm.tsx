"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { AtSign, Lock } from "lucide-react";
import FormField from "@/components/auth/FormField";
import SocialButtons from "@/components/auth/SocialButtons";

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

  function onSubmit(data: LoginFormValues) {
    console.log("Login data:", data);
    // Add your login logic here
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        id="email"
        label="Email"
        type="email"
        placeholder="m@example.com"
        icon={<AtSign />}
        error={errors.email?.message}
        register={register("email")}
      />

      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        icon={<Lock />}
        error={errors.password?.message}
        register={register("password")}
        link={{
          text: "Forgot password?",
          href: "#",
        }}
      />

      <Button
        type="submit"
        className="w-full border border-purple-500 bg-transparent hover:bg-purple-950/30 text-purple-400"
      >
        Sign In
      </Button>

      <SocialButtons />
    </form>
  );
}
