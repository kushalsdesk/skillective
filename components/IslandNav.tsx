"use client";

import { Award, MessageSquare, Mic, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const IslandNav = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="fixed bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex justify-around items-center gap-1 md:gap-2 bg-zinc-900/90 backdrop-blur-md border border-purple-900 rounded-full p-1.5 shadow-lg">
        <Link
          href="/"
          className={`flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 ${
            isActive("/")
              ? "bg-purple-500/20 text-purple-400"
              : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
          }`}
        >
          <Award className="h-5 w-5" />
        </Link>
        <Link
          href="/interviews"
          className={`flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 ${
            isActive("/interviews")
              ? "bg-purple-500/20 text-purple-400"
              : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
          }`}
        >
          <MessageSquare className="h-5 w-5" />
        </Link>
        <Link
          href="/create"
          className={`flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 ${
            isActive("/create")
              ? "bg-purple-500/20 text-purple-400"
              : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
          }`}
        >
          <Mic className="h-5 w-5" />
        </Link>
        <Link
          href="/profile"
          className={`flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 ${
            isActive("/profile")
              ? "bg-purple-500/20 text-purple-400"
              : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
          }`}
        >
          <div className="h-6 w-6 rounded-full flex justify-center items-center bg-zinc-700">
            <User className="h-5 w-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IslandNav;
