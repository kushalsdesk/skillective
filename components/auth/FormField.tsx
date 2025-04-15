import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
  error?: string;
  register: any;
  link?: {
    text: string;
    href: string;
  };
}

export default function FormField({
  id,
  label,
  type = "text",
  placeholder,
  icon,
  error,
  register,
  link,
}: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-zinc-300 text-sm font-medium">
          {label}
        </Label>
        {link && (
          <a
            href={link.href}
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
          >
            {link.text}
          </a>
        )}
      </div>
      <div className="relative">
        {icon && (
          <div className="absolute left-1 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-purple-400">
            {icon}
          </div>
        )}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className={cn(
            "group border-0 border-b-2 rounded-none px-0 py-2 h-auto bg-transparent text-zinc-100",
            "border-zinc-800 focus-visible:border-purple-500 focus-visible:ring-0 focus-visible:ring-offset-0",
            "placeholder:text-zinc-600 placeholder:text-xs ",
            icon && "pl-7",
            error && "border-red-500/50 focus-visible:border-red-500",
          )}
          {...register}
        />
      </div>
      {error && (
        <p className="text-red-400  font-bold text-xs flex items-center gap-1 mt-1">
          <AlertCircle className="h-4 w-4" />
          {error}
        </p>
      )}
    </div>
  );
}
