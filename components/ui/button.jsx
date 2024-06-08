import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-fle items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-red-500 text-white  hover:bg-red-500-hover",
        primary: "bg-white text-black",
        outline:
          "border border-red-500 bg-transparent text-red-500 hover:bg-red-500-hover hover:text-white",
      },
      size: {
        default: "h-[44px] px-6",
        sm: "h-[48px] px-3",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
