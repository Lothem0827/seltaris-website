import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div
      id={id}
      className={cn(
        "mx-auto w-full max-w-container px-container-padding",
        className,
      )}
    >
      {children}
    </div>
  );
}
