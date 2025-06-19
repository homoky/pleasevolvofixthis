import { twMerge } from "tailwind-merge";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag = ({ children, className }: TagProps) => {
  return (
    <span
      className={twMerge(
        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  );
};