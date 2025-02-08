import Link from "next/link";
import React from "react";
import { FaLinkedin, FaYoutube, FaGithub, FaWhatsapp } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
type SocialPlatform = "youtube" | "linkedin" | "github" | "whatsapp";

interface SocialLinkProps {
  platform: SocialPlatform;

  identifier: string;

  label?: string;

  href?: string;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Returns the appropriate URL based on the platform and identifier.
 */
const getHref = (platform: SocialPlatform, identifier: string): string => {
  switch (platform) {
    case "linkedin":
      return `https://www.linkedin.com/in/${identifier}`;
    case "youtube":
      return `https://www.youtube.com/${identifier}`;
    case "github":
      return `https://github.com/${identifier}`;
    case "whatsapp":
      return `https://wa.me/${identifier}`;
    default:
      return "#";
  }
};

/**
 * Define the gradient classes and default icons for each platform.
 */
const platformStyles: Record<
  SocialPlatform,
  {
    gradient: string;
    hoverGradient: string;
    Icon: React.ComponentType<{ className?: string }>;
  }
> = {
  linkedin: {
    gradient: "bg-gradient-to-r from-blue-600 to-blue-800",
    hoverGradient:
      "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700",
    Icon: FaLinkedin,
  },
  youtube: {
    gradient: "bg-gradient-to-r from-red-500 to-red-700",
    hoverGradient: "hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600",
    Icon: FaYoutube,
  },
  github: {
    gradient: "bg-gradient-to-r from-gray-700 to-gray-900",
    hoverGradient:
      "hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800",
    Icon: FaGithub,
  },
  whatsapp: {
    gradient: "bg-gradient-to-r from-green-400 to-green-600",
    hoverGradient:
      "hover:bg-gradient-to-r hover:from-green-300 hover:to-green-500",
    Icon: FaWhatsapp,
  },
};

const SocialLink: React.FC<SocialLinkProps> = ({
  platform,
  identifier,
  label,
  icon,
  href,
  className,
}) => {
  // Use the provided href or build one using the identifier and platform.
  const finalHref = href ? href : getHref(platform, identifier);
  // Use the provided label or fall back to the identifier.
  const displayLabel = label ? label : identifier;
  // Get platform-specific gradient classes and default icon.
  const style = platformStyles[platform];
  const mergedClasses = twMerge(
    `group w-12 hover:w-44 h-12 relative rounded-xl text-neutral-50 duration-700
     ${style.gradient} ${style.hoverGradient} font-bold flex justify-start gap-2 items-center p-2 pr-6
     before:duration-700 before:transition-all before:absolute before:-z-10 before:left-8 before:w-6 before:h-6 
     ${style.gradient} before:rotate-45 hover:before:left-40`,
    className
  );
  return (
    <Link href={finalHref} className={mergedClasses}>
      {icon ? icon : <style.Icon className="w-8 h-8 shrink-0" />}
      <span
        className="
          origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 
          opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 
          transition-all
        "
      >
        {displayLabel}
      </span>
    </Link>
  );
};

export default SocialLink;
