"use client";

import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { cn } from "@/utils/cn";

interface LinkWrapperProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  linkIcon?: boolean;
  className?: string;
}

export const LinkWrapper: React.FC<LinkWrapperProps> = ({
  href,
  children,
  linkIcon,
  className,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center group",
        className,
        linkIcon
          ? "gap-1"
          : "underline underline-offset-4 hover:decoration-dotted"
      )}
      role="link"
    >
      <div>{children}</div>
      {linkIcon && (
        <div className="group-hover:animate-shake">
          {" "}
          {/* Use `group-hover` here */}
          <Image
            src="/assets/svg/link.svg"
            alt="link"
            width={14}
            height={14}
            className="inline-block h-full"
          />
        </div>
      )}
    </Link>
  );
};
