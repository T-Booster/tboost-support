import type { Metadata } from "next";
import { page, h1, updated, intro, h2, p, ul, li, callout, contact } from "../legalStyles";

// Google Play requires a web page, reachable without the app, where users can
// request deletion of their account and data. It is linked from the Play
// Console Data safety form, so keep the URL (/delete-account) stable.
export const metadata: Metadata = {
  title: "Delete your account — FunFit AI",
  description:
    "How to delete your FunFit AI account and the data associated with it, from the app or by email.",
};

export default function DeleteAccount() {
  return (
    <div style={page}>
      <h1 style={h1}>Delete your FunFit account</h1>
      <p style={updated}>FunFit AI · INFLUOGEN LLC</p>

      <p style={intro}>
        You can delete your FunFit AI account and the data linked to it at any time, either
        directly in the app or by emailing us. Deleting your account is permanent.
      </p>

      <h2 style={h2}>Option 1: in the app</h2>
      <ul style={ul}>
        <li style={li}>Open FunFit AI and sign in.</li>
        <li style={li}>Go to the <strong>Profile</strong> tab, then <strong>Settings</strong>.</li>
        <li style={li}>Tap <strong>Delete account</strong> and confirm.</li>
      </ul>
      <p style={p}>Your account and data are removed right away, and you are signed out.</p>

      <h2 style={h2}>Option 2: by email</h2>
      <p style={p}>
        If you no longer have the app, email{" "}
        <a href="mailto:support@funfit.ai?subject=Delete%20my%20account" style={contact}>
          support@funfit.ai
        </a>{" "}
        from the email address you signed in with, with the subject &ldquo;Delete my
        account&rdquo;. We will confirm and delete your account within 30 days.
      </p>

      <h2 style={h2}>Delete some data but keep your account</h2>
      <p style={p}>
        You can delete individual items without closing your account: meals and workouts from
        <strong> History</strong>, body scans from the scan results, and posts from your profile.
        To have other specific data deleted, email{" "}
        <a href="mailto:support@funfit.ai?subject=Delete%20my%20data" style={contact}>
          support@funfit.ai
        </a>{" "}
        from your sign-in address and tell us what to remove. We will do it within 30 days.
      </p>

      <h2 style={h2}>What is deleted</h2>
      <ul style={ul}>
        <li style={li}>Your profile, username, photo and bio.</li>
        <li style={li}>Your food, workout, weight, sleep and step logs.</li>
        <li style={li}>Food photos, body scan photos and results, and uploaded lab results.</li>
        <li style={li}>Your plans, streaks, XP and posts.</li>
      </ul>

      <h2 style={h2}>What is kept</h2>
      <ul style={ul}>
        <li style={li}>
          Messages you sent to other people are replaced with a &ldquo;deleted&rdquo;
          placeholder so their conversations stay readable.
        </li>
        <li style={li}>
          Records we must keep by law, such as purchase and tax records, for as long as the law
          requires.
        </li>
      </ul>

      <div style={callout}>
        <strong>Subscriptions are billed by Apple or Google.</strong> Deleting your account does
        not cancel them. Cancel in your App Store or Google Play subscription settings.
      </div>

      <p style={p}>
        Questions? Email{" "}
        <a href="mailto:support@funfit.ai" style={contact}>support@funfit.ai</a>. See also our{" "}
        <a href="/privacy" style={contact}>Privacy Policy</a>.
      </p>
    </div>
  );
}
