import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  className,
  children,
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn(className, "w-full max-w-[375px] mx-auto px-4")}>
      {children}
    </div>
  );
};

export default Container;
