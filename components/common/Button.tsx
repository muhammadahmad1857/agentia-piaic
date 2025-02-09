import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "hover:bg-gray-700  duration-500 backdrop-blur-xl hover:scale-110 hover:shadow-xl hover:shadow-white/30 transition-all duration-500 border border-white rounded-full text-xs tracking-widest uppercase font-bold h-10 px-6",
  secondary:
    "group/button relative inline-flex  text-xs tracking-widest uppercase font-bold  items-center justify-center overflow-hidden rounded-full bg-[#F5F4F8] h-10 px-6 backdrop-blur-lg  text-base text-black transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-white/30 border border-black/20",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button className={clsx(buttonVariants[variant], className)} {...props}>
      {variant === "secondary" && (
         <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
         <div className="relative h-full w-10 bg-black/20"></div>
       </div>
      )}
      <span>
        {children}
      </span>
    </button>
  );
};

export default Button;
