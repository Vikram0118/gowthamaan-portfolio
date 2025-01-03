"use client";

import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { cn } from "@/utils/cn";

type TargetType = "_blank" | "_self" | "_parent" | "_top";

interface LinkWrapperProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  linkIcon?: boolean;
  className?: string;
  target?: TargetType;
}

export const LinkWrapper: React.FC<LinkWrapperProps> = ({
  href,
  children,
  linkIcon,
  className,
  target = "_blank",
}) => {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
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
