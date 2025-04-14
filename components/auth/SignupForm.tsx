"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { AtSign, Lock, User } from "lucide-react";
import FormField from "@/components/auth/FormField";
import SocialButtons from "@/components/auth/SocialButtons";

const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: SignupFormValues) {
    console.log("Signup data:", data);
    // Add your signup logic here
  }

  function handleSocialLogin(provider: string) {
    console.log(`Signup with ${provider}`);
    // Implement social signup logic here
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <FormField
          id="firstName"
          label="First name"
          placeholder="John"
          icon={<User className="h-4 w-4" />}
          error={errors.firstName?.message}
          register={register("firstName")}
        />

        <FormField
          id="lastName"
          label="Last name"
          placeholder="Doe"
          icon={<User className="h-4 w-4" />}
          error={errors.lastName?.message}
          register={register("lastName")}
        />
      </div>

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
      />

      <FormField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="••••••••"
        icon={<Lock className="h-4 w-4" />}
        error={errors.confirmPassword?.message}
        register={register("confirmPassword")}
      />

      <Button
        type="submit"
        className="w-full mt-2 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white border-0 transition-all duration-200"
      >
        Create Account
      </Button>

      <SocialButtons onSocialLogin={handleSocialLogin} />
    </form>
  );
}
