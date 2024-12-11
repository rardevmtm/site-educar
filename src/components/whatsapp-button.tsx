import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

interface WhatsAppButtonProps {
  text: string;
  message: string;
  variant?: "primary" | "outline";
}

export function WhatsAppButton({ text, message, variant = "primary" }: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/5531999985651?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button
        variant={variant}
        size="lg"
        className={variant === "outline" ? "border-white text-white hover:bg-white/10" : ""}
      >
        {text}
        <ChevronRight className="ml-2 h-5 w-5" />
      </Button>
    </a>
  );
}