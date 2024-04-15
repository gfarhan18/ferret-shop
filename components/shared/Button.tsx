import React from "react";
import Link from "next/link";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  href?: string; // Add href prop for linking
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  href,
  onClick,
  className,
}) => {
  const baseStyle =
    "px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150";
  const primaryStyle =
    "text-black bg-yellow-400 hover:bg-black hover:text-white focus:ring-yellow-500";
  const secondaryStyle =
    "text-white bg-black hover:bg-yellow-400 hover:text-black focus:ring-black";
  const variantStyle = variant === "primary" ? primaryStyle : secondaryStyle;

  // Render as a link if href is provided, otherwise as a button

  return href ? (
    <Link
      href={href}
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
