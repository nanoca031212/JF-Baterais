"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { WHATSAPP_LINK } from "@/app/lib/constants";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function WhatsAppLink({
  href = WHATSAPP_LINK,
  target = "_blank",
  rel = "noopener noreferrer",
  onClick,
  ...props
}: WhatsAppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    window.gtag_report_conversion?.(href);
  };

  return (
    <a href={href} target={target} rel={rel} onClick={handleClick} {...props} />
  );
}
