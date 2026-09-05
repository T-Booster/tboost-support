import type { Metadata } from "next";
import PlanClient from "./PlanClient";

const SITE = "https://maxi-ai-support.vercel.app";
const APP_ID = "6754610107";

/** Tokens are 12 url-safe base64 chars; refuse anything else rather than
 *  round-tripping arbitrary input into the page or the smart banner. */
function sanitize(raw: string): string | null {
  const t = decodeURIComponent(raw ?? "");
  return /^[A-Za-z0-9_-]{1,32}$/.test(t) ? t : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}): Promise<Metadata> {
  const { token } = await params;
  const safe = sanitize(token);

  return {
    title: "Shared plan · FunFit AI",
    description:
      "A training plan shared with you on FunFit AI. Open it in the app to start training.",
    referrer: "no-referrer",
    openGraph: {
      title: "A training plan on FunFit AI",
      description: "Someone shared their plan with you. Tap to add it to your app.",
      type: "website",
      siteName: "FunFit AI",
    },
    twitter: { card: "summary_large_image" },
    other: {
      // app-argument carries the token through the App Store smart banner's
      // OPEN button, so an existing install lands straight on the plan.
      "apple-itunes-app": safe
        ? `app-id=${APP_ID}, app-argument=${SITE}/p/${safe}`
        : `app-id=${APP_ID}`,
      "theme-color": "#F05A1A",
    },
  };
}

export default async function SharedPlanPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  return <PlanClient token={sanitize(token)} />;
}
