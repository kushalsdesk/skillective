"use client";

import { Award, MessageSquare, Mic, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getLoggedInUser } from "@/lib/server/appwrite";
import Image from "next/image";

const IslandNav = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const hasAuthToken = await getLoggedInUser();
      setIsLoggedIn(!!hasAuthToken);
    };

    checkAuthStatus();
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const profileLinkDestination = isLoggedIn ? "/profile" : "/auth";
  const createLinkDestination = isLoggedIn ? "/create" : "/auth";

  const isAuthPage = pathname === "/auth";

  return (
    <div className="fixed bottom-1 md:bottom-4 left-1/2 -translate-x-1/2 z-50 min-w-[85%] md:min-w-[25%]">
      <div className="flex justify-around items-center gap-1 md:gap-2 bg-zinc-900/40 backdrop-blur-md border border-purple-900 rounded-md p-1.5 shadow-lg">
        <Link
          href="/"
          className={`flex items-center justify-center h-8 w-8 rounded-full transition-all duration-1000 ${
            isActive("/")
              ? "bg-purple-500/20 text-purple-400 animate-bounce"
              : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
          }`}
          aria-label="Home"
        >
          <Image
            src="/home.png"
            height={60}
            width={60}
            alt="home"
            className={`object-contain border border-white/30 rounded-full
              ${isActive("/") ? "bg-white border-purple-400 " : "bg-white/70 hover:bg-white"}`}
          />
        </Link>

        {/* Interviews Icon */}
        <Link
          href="/interviews"
          className={`flex items-center justify-center h-8 w-8 rounded-full transition-all duration-1000 ${
            isActive("/interviews")
              ? "bg-purple-500/20 text-purple-400 animate-bounce"
              : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
          }`}
          aria-label="Interviews"
        >
          <Image
            src="/interviews.png"
            height={60}
            width={60}
            alt="interviews"
            className={`object-contain border border-white/30 rounded-full
              ${isActive("/interviews") ? "bg-white border-purple-400 " : "bg-white/70 hover:bg-white"}`}
          />
        </Link>

        {/* Create Icon */}
        <Link
          href={createLinkDestination}
          className={`flex items-center justify-center h-8 w-8 rounded-full transition-all duration-1000 ${
            isActive("/create")
              ? "bg-purple-500/20 text-purple-400 animate-bounce "
              : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
          }`}
          aria-label="Create Interview"
        >
          <Image
            src="/create.png"
            height={60}
            width={60}
            alt="create"
            className={`object-contain border border-white/30 rounded-full
              ${isActive("/create") ? "bg-white border-purple-400 " : "bg-white/70 hover:bg-white"}`}
          />
        </Link>
        <Link
          href={profileLinkDestination}
          className={`flex items-center justify-center h-10 w-10 rounded-full transition-all duration-1000 ${
            isActive("/profile") || isAuthPage
              ? "bg-purple-500/20 text-purple-400 animate-bounce"
              : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
          }`}
        >
          <div className="h-10 w-10  rounded-full flex justify-center items-center ">
            <User className={`h-6 w-6 `} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IslandNav;
