import React from "react";
import TopBar from "../(components)/TopBar";
import SideBar from "../(components)/SideBar";

function page() {
  return (
    <main className="sm:flex">
      <TopBar />
      <SideBar />
      <div className="w-full flex flex-col sm:ml-20 md:ml-48 lg:ml-80 p-4 sm:p-12">
        <h1 className="font-semibold text-2xl">Rules and Guedlines 📜</h1>
        <p className="font-medium text-base m-6 text-slate-500">
          This confessions page is an independent platform run by anonymous
          students from the GHRIEBM collage community. We are not affiliated
          with the college administration, and we take no responsibility for the
          content posted here.
        </p>
        <h2 className="font-semibold text-lg m-4 text-slate-600">
          To ensure this remains a safe and respectful environment, please
          follow these rules:
        </h2>
        <h2 className="font-semibold text-lg m-4 text-slate-700">Content:</h2>
        <p className="font-medium text-base m-6 text-slate-500">
          <span className="font-semibold text-lg m-4 text-slate-700">
            Be respectful:
          </span>
          Treat everyone with kindness, even if you disagree. Avoid insults,
          threats, harassment, or hate speech.
        </p>
        <p className="font-medium text-base m-6 text-slate-500">
          <span className="font-semibold text-lg m-4 text-slate-700">
            Be truthful:
          </span>
          While confessions are anonymous, aim for honesty. Dont spread rumors,
          lies, or misinformation.
        </p>
        <p className="font-medium text-base m-6 text-slate-500">
          <span className="font-semibold text-lg m-4 text-slate-700">
            Keep it relevant:
          </span>
          Focus on topics relevant to the college or surrounding community
          experience.
        </p>
        <p className="font-medium text-base m-6 text-slate-500">
          <span className="font-semibold text-lg m-4 text-slate-700">
            No illegal activity:
          </span>
          Dont confess to crimes or encourage illegal behavior.
        </p>
        <p className="font-medium text-base m-6 text-slate-500">
          <span className="font-semibold text-lg m-4 text-slate-700">
            Spread the laughter:
          </span>
          Jokes about relatable college experiences are comedy gold!
        </p>
        <p className="font-medium text-base m-6 text-slate-500">
          <span className="font-semibold text-lg m-4 text-slate-700">
            Love and Crush Confessions:
          </span>
          Feel free to share your experiences of love, infatuation, or crushes.
          Whether its a heartfelt confession or a cute story about your crush,
          your words are welcome here.
        </p>
        <p className="mb-16 font-medium text-base m-6 text-slate-500">
          <span className="font-semibold text-lg m-4 text-slate-700">
            Positive Vibes:
          </span>
          While confessions can be honest, aim for a generally positive and
          supportive environment.
        </p>
        <hr />
        <h2 className="font-semibold text-xl m-4 text-slate-700">
          Aditional Notes:
        </h2>

        <p className="font-medium text-base m-6 text-slate-500">
          <span className="font-semibold text-lg m-4 text-slate-700">
            Confidentiality:
          </span>
          We cannot guarantee the complete anonymity of Chat.
        </p>
        <p className="font-medium text-base m-6 text-slate-500">
          <span className="font-semibold text-lg m-4 text-slate-700">
            Reporting:
          </span>
          If you see a Post that concerns you or violates these guidelines,
          please report it to the moderation team (details on how to report will
          be provided).
        </p>
        <p className="font-medium text-base m-6 text-slate-500">
          <span className="font-semibold text-lg m-4 text-slate-700">
            Disclaimer:
          </span>
          The views expressed in Posts do not necessarily reflect the views of
          the college administration or this platform.
        </p>
        <h1 className="font-semibold text-2xl">
          By using this platform, you agree to these rules and guidelines.
        </h1>
      </div>
    </main>
  );
}

export default page;
