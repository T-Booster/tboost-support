import type { Metadata } from "next";
import { page, h1, updated, intro, h2, h3, p, ul, li, table, th, td, callout, contact } from "../legalStyles";

export const metadata: Metadata = {
  title: "Privacy Policy — FunFit AI",
  description:
    "How FunFit AI collects, uses, shares and retains your data, including health and fitness data.",
};

export default function PrivacyPolicy() {
  return (
    <div style={page}>
      <h1 style={h1}>Privacy Policy</h1>
      <p style={updated}>Last updated: 21 August 2026 · Effective: 21 August 2026</p>

      <p style={intro}>
        FunFit AI is a health and fitness app operated by <strong>INFLUOGEN LLC</strong>, a
        limited liability company registered in Florida, United States. This policy explains
        exactly what we collect, where it goes, how long we keep it, and what you can make us
        do about it. It covers the FunFit AI iOS and Android apps and this website.
      </p>

      <div style={callout}>
        <strong>The short version.</strong> We collect health and fitness information you give
        us, including photos of food and of your body, and blood test results if you choose to
        upload them. Some of it is sent to OpenAI so our AI features can analyse it. We store
        it with Supabase. We do not sell your data and we do not use your health data for
        advertising. You can ask us to delete everything and we will.
      </div>

      <h2 style={h2}>1. Who we are</h2>
      <p style={p}>
        INFLUOGEN LLC, Miami, Florida, United States. For anything in this policy, contact{" "}
        <a href="mailto:maxiai@influogen.com" style={contact}>maxiai@influogen.com</a>. We are the
        data controller for the information described here.
      </p>

      <h2 style={h2}>2. What we collect</h2>

      <h3 style={h3}>2.1 Account and profile</h3>
      <ul style={ul}>
        <li style={li}>Your email address, from Sign in with Apple, Google Sign-In, or email sign-in.</li>
        <li style={li}>Username, display name, profile photo or chosen avatar, and bio.</li>
        <li style={li}>Date of birth, which we use to derive your age.</li>
        <li style={li}>Sex, height, weight, body-fat estimate, activity level, goals, dietary restrictions, and your weekly workout target.</li>
      </ul>

      <h3 style={h3}>2.2 Health and fitness data</h3>
      <p style={p}>
        This is the most sensitive category we handle, and it is the reason this section exists
        in detail:
      </p>
      <ul style={ul}>
        <li style={li}><strong>Apple Health / Health Connect.</strong> With your permission we <em>read</em> steps, workouts, sleep, and body measurements. We never write data back to Apple Health, and we never use Health data for advertising or data mining.</li>
        <li style={li}><strong>Food logs.</strong> Photos of meals, text descriptions, barcodes and nutrition-label photos, and the resulting calories, macronutrients, sugar, sodium and fibre.</li>
        <li style={li}><strong>Body scan photos.</strong> If you use Body Scan, the photos you take of yourself from up to four angles, and the body-composition estimates derived from them.</li>
        <li style={li}><strong>Blood test results.</strong> If you upload a lab report, the biomarker values in it and the file itself.</li>
        <li style={li}><strong>Weight and body-composition history</strong> that you log over time.</li>
        <li style={li}><strong>Workouts.</strong> Type, duration, distance, splits, and manually entered steps.</li>
        <li style={li}><strong>Location.</strong> When you record an outdoor workout, GPS is used to trace your route. Route coordinates stay on your device and are not uploaded to our servers, unless you explicitly connect Strava and choose to export a workout there.</li>
        <li style={li}><strong>Voice.</strong> Voice notes you send in chat, and audio you record for voice logging.</li>
      </ul>

      <h3 style={h3}>2.3 Social and messaging</h3>
      <ul style={ul}>
        <li style={li}>Direct messages, group messages, photo albums and voice notes you send.</li>
        <li style={li}>Who you follow and who follows you, and your leaderboard entries.</li>
        <li style={li}>Posts you share to the community feed, including any workout photos attached to them.</li>
        <li style={li}>Messages you exchange with the AI coach and the AI nutrition chat.</li>
      </ul>

      <h3 style={h3}>2.4 Technical and commercial</h3>
      <ul style={ul}>
        <li style={li}>A device push-notification token, so we can send you notifications.</li>
        <li style={li}>Subscription status and purchase events. Payment is handled entirely by Apple or Google — we never see your card number.</li>
        <li style={li}>Basic product analytics: which screens you open and which features you use, together with your age and your stated goal.</li>
      </ul>

      <h2 style={h2}>3. Why we use it</h2>
      <ul style={ul}>
        <li style={li}>To run the features you asked for: logging food, generating plans, scoring your day, tracking workouts, and answering you in chat.</li>
        <li style={li}>To personalise targets — calories, macros, hydration and training volume — from your profile.</li>
        <li style={li}>To operate social features: leaderboards, communities, following and messaging.</li>
        <li style={li}>To keep the service safe and working, including preventing abuse and diagnosing faults.</li>
        <li style={li}>To manage your subscription and comply with our legal and tax obligations.</li>
      </ul>
      <p style={p}>
        If you are in the UK, EU or EEA, our lawful bases are: <strong>contract</strong> for the
        core service, <strong>explicit consent</strong> for health data and for AI processing of
        your photos and lab results, <strong>legitimate interests</strong> for security and
        product improvement, and <strong>legal obligation</strong> for records we must keep.
        You can withdraw consent at any time; see section 8.
      </p>

      <h2 style={h2}>4. AI processing, and what goes to OpenAI</h2>
      <p style={p}>
        Several FunFit AI features are powered by large language models operated by{" "}
        <strong>OpenAI</strong>. When you use them, the relevant content leaves your device and
        is sent to OpenAI for analysis. Specifically:
      </p>
      <div style={{ overflowX: "auto" }}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Feature</th>
              <th style={th}>What is sent to OpenAI</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={td}>Food scan</td><td style={td}>The meal photo or your text description</td></tr>
            <tr><td style={td}>Body Scan</td><td style={td}>Your body photos, plus age, sex and weight</td></tr>
            <tr><td style={td}>Blood panel import</td><td style={td}>The lab report image or text, plus age, sex, height, weight</td></tr>
            <tr><td style={td}>Health report (PDF)</td><td style={td}>Sleep, steps, blood markers and hormone readings</td></tr>
            <tr><td style={td}>AI coach and nutrition chat</td><td style={td}>Your messages, plus a summary of your profile</td></tr>
            <tr><td style={td}>Voice logging and voice notes</td><td style={td}>The audio recording, for transcription</td></tr>
            <tr><td style={td}>Meal and workout plan generation</td><td style={td}>Your profile, goals and training preferences</td></tr>
          </tbody>
        </table>
      </div>
      <p style={p}>
        We send this data to OpenAI as our processor, to return a result to you. Under our
        agreement with OpenAI, your content is not used to train their models. We do not
        control OpenAI&rsquo;s own infrastructure retention; see their policies for detail. If you
        do not want your data processed this way, do not use the AI features — the rest of the
        app works without them.
      </p>
      <div style={callout}>
        <strong>AI output is not medical advice.</strong> FunFit AI is not a medical device and
        does not diagnose, treat or prevent any condition. Nutrition estimates, body-composition
        estimates and any commentary on lab values are informational only and can be wrong.
        Always talk to a qualified healthcare professional before acting on them, and never
        ignore medical advice because of something this app told you.
      </div>

      <h2 style={h2}>5. Who else we share data with</h2>
      <p style={p}>
        We do not sell your personal information, and we have not sold or shared it for
        cross-context behavioural advertising in the past twelve months. We use the following
        service providers, each for a specific purpose:
      </p>
      <div style={{ overflowX: "auto" }}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Provider</th>
              <th style={th}>Purpose</th>
              <th style={th}>Receives health data?</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={td}>Supabase</td><td style={td}>Database, authentication, file storage, server functions</td><td style={td}>Yes</td></tr>
            <tr><td style={td}>OpenAI</td><td style={td}>AI analysis and chat (see section 4)</td><td style={td}>Yes</td></tr>
            <tr><td style={td}>Apple (APNs) / Google (FCM)</td><td style={td}>Push notification delivery</td><td style={td}>Only what a notification preview shows</td></tr>
            <tr><td style={td}>Superwall</td><td style={td}>Subscription paywall and entitlement state</td><td style={td}>No — age band and goal only</td></tr>
            <tr><td style={td}>Mixpanel</td><td style={td}>Product analytics</td><td style={td}>No — usage events, age and goal</td></tr>
            <tr><td style={td}>Nutritionix, USDA FoodData Central, Open Food Facts</td><td style={td}>Nutrition database lookups</td><td style={td}>Food names and quantities only</td></tr>
            <tr><td style={td}>ElevenLabs</td><td style={td}>Text-to-speech playback</td><td style={td}>Only the text being spoken</td></tr>
            <tr><td style={td}>Strava, WHOOP</td><td style={td}>Only if you connect them yourself</td><td style={td}>Yes, for what you choose to sync</td></tr>
            <tr><td style={td}>Vercel</td><td style={td}>Hosting for this website</td><td style={td}>No</td></tr>
          </tbody>
        </table>
      </div>
      <p style={p}>
        We may also disclose data if the law requires it, to protect someone&rsquo;s safety, or as
        part of a merger or acquisition — in which case we will tell you before your data
        becomes subject to a different policy.
      </p>

      <h2 style={h2}>6. What other people can see</h2>
      <p style={p}>
        Some things are public inside the app by design. Your username, display name, avatar,
        level, streak and leaderboard position are visible to other FunFit AI users. Posts you
        share to a community, and any photo attached to them, are visible to that community.
        Messages you send in a group are visible to that group&rsquo;s members. Direct messages are
        visible only to you and the person you are messaging.
      </p>
      <p style={p}>
        Your body scan photos, your food photos, your lab results and your weight history are{" "}
        <strong>private</strong> and are never shown to other users.
      </p>

      <h2 style={h2}>7. How long we keep it</h2>
      <ul style={ul}>
        <li style={li}><strong>While your account exists:</strong> your profile, logs, photos and message history stay available so the app can show you your own history.</li>
        <li style={li}><strong>After you delete your account:</strong> we remove your profile, logs, photos, scans, lab results and message content within 30 days.</li>
        <li style={li}><strong>Messages you sent to other people</strong> are replaced with a &ldquo;deleted&rdquo; placeholder rather than removed outright, so other participants&rsquo; conversations stay readable.</li>
        <li style={li}><strong>Purchase and tax records</strong> are kept for as long as the law requires, typically seven years. These contain no health data.</li>
        <li style={li}><strong>Backups</strong> roll off on their own schedule, within 90 days.</li>
      </ul>

      <h2 style={h2}>8. Your rights</h2>
      <p style={p}>
        Wherever you live, you can ask us to give you a copy of your data, correct it, delete
        it, or stop a particular use of it. Email{" "}
        <a href="mailto:maxiai@influogen.com" style={contact}>maxiai@influogen.com</a> and we
        will respond within 30 days. We will not charge you or degrade your service for asking.
      </p>
      <h3 style={h3}>If you are in the UK, EU or EEA (GDPR)</h3>
      <p style={p}>
        You have the rights of access, rectification, erasure, restriction, portability and
        objection, and the right to withdraw consent at any time without affecting processing
        already carried out. You also have the right to complain to your national data
        protection authority.
      </p>
      <h3 style={h3}>If you are in California (CCPA/CPRA)</h3>
      <p style={p}>
        You have the right to know what we collect and why, to delete it, to correct it, and to
        limit the use of sensitive personal information. Health data and precise location are
        sensitive personal information under California law; we use them only to deliver the
        features you asked for, never to infer characteristics about you for advertising. We do
        not sell or share personal information, so there is nothing to opt out of — but you can
        still exercise every other right by emailing us.
      </p>
      <h3 style={h3}>If you are in Washington or Nevada</h3>
      <p style={p}>
        Consumer health data laws in these states give you the right to withdraw consent to the
        collection and sharing of your health data, and to have it deleted. Email us and we will
        action it within 30 days.
      </p>

      <h2 style={h2}>9. Security</h2>
      <p style={p}>
        Data is encrypted in transit. Your body scan photos, lab results, direct messages and
        voice notes are held in private storage that only your account can read. Access to
        production systems is limited to the people who need it. No system is perfectly secure,
        and we will tell you and the relevant regulator without undue delay if a breach affects
        your data.
      </p>

      <h2 style={h2}>10. Children</h2>
      <p style={p}>
        FunFit AI is not intended for anyone under 13, and we do not knowingly collect data from
        them. In the EU and UK, if you are under the age at which you can consent for yourself
        (13 to 16 depending on the country), a parent or guardian must agree on your behalf. If
        you believe a child has given us data, email us and we will delete it.
      </p>

      <h2 style={h2}>11. Where your data goes</h2>
      <p style={p}>
        We are based in the United States, and our providers process data in the United States
        and elsewhere. Where we move personal data out of the UK, EU or EEA, we rely on the
        European Commission&rsquo;s Standard Contractual Clauses with each provider.
      </p>

      <h2 style={h2}>12. Changes</h2>
      <p style={p}>
        If we change this policy in a way that materially affects you, we will tell you in the
        app before the change takes effect and update the date at the top of this page.
      </p>

      <h2 style={h2}>13. Contact</h2>
      <p style={p}>
        INFLUOGEN LLC, Miami, Florida, United States —{" "}
        <a href="mailto:maxiai@influogen.com" style={contact}>maxiai@influogen.com</a>
      </p>
    </div>
  );
}
