import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SocialButtons() {
  return (
    <>
      <div className="relative my-6 ">
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
        <Button
          variant="outline"
          className="border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-400"
        >
          Google
        </Button>
        <Button
          variant="outline"
          className="border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-400"
        >
          GitHub
        </Button>
        <Button
          variant="outline"
          className="border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-400"
        >
          Apple
        </Button>
      </div>
    </>
  );
}
