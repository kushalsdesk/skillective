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
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-zinc-300">
          {label}
        </Label>
        {link && (
          <a
            href={link.href}
            className="text-sm text-purple-400 hover:text-purple-300"
          >
            {link.text}
          </a>
        )}
      </div>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-3 h-4 w-4 text-zinc-500">
            {icon}
          </div>
        )}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className={cn(
            "bg-zinc-800/50 border-zinc-700 focus:border-purple-500/50 focus:ring-purple-500/20",
            icon && "pl-10",
            error &&
              "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20",
          )}
          {...register}
        />
      </div>
      {error && (
        <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}
