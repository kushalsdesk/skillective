"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const socialProviders = [
  {
    id: "google",
    name: "Google",
    logo: "/google.svg",
    bgColor: "bg-white",
  },
  {
    id: "github",
    name: "GitHub",
    logo: "/github.svg",
    bgColor: "bg-zinc-900",
  },
  {
    id: "apple",
    name: "Apple",
    logo: "/apple.svg",
    bgColor: "bg-white",
  },
];

interface SocialButtonsProps {
  onSocialLogin?: (provider: string) => void;
}

export default function SocialButtons({ onSocialLogin }: SocialButtonsProps) {
  const handleSocialLogin = (providerId: string) => {
    if (onSocialLogin) {
      onSocialLogin(providerId);
    } else {
      console.log(`Login with ${providerId}`);
    }
  };

  return (
    <>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full border-zinc-800" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-zinc-900 px-2 text-xs text-zinc-500">
            OR CONTINUE WITH
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {socialProviders.map((provider) => (
          <Button
            key={provider.id}
            variant="outline"
            className="border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-400 p-0 h-10"
            onClick={() => handleSocialLogin(provider.id)}
          >
            <div className="flex items-center justify-center w-full h-full">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full ${provider.bgColor}`}
              >
                <Image
                  src={provider.logo || "/placeholder.svg"}
                  alt={`${provider.name} logo`}
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
            </div>
          </Button>
        ))}
      </div>
    </>
  );
}
