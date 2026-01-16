import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const openTelegram = (name: string) => {
  const anchor = document.createElement("a");
  anchor.target = "_blank";
  anchor.href = `https://t.me/${name}`;
  anchor.click();
};
