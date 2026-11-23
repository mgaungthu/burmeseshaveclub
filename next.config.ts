import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  poweredByHeader: false,
};

export default function config(phase: string): NextConfig {
  if (phase !== PHASE_DEVELOPMENT_SERVER) return nextConfig;

  return {
    ...nextConfig,
    output: undefined,
    async redirects() {
      return [
        { source: "/privacy", destination: "/privacy.html", permanent: false },
        { source: "/terms", destination: "/terms.html", permanent: false },
      ];
    },
    async rewrites() {
      return [
        { source: "/privacy.html", destination: "/privacy" },
        { source: "/terms.html", destination: "/terms" },
      ];
    },
  };
}
