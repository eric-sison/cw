"use client";

import { useRouter } from "next/navigation";
import { SVGProps } from "react";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/bill-inquiry");
  };

  return (
    <div className="h-full w-full bg-zinc-900 select-none">
      <header className="flex justify-center pt-20">
        <div className="flex flex-col items-center">
          <GgBolt className="text-amber-400" />
          <div className="max-w-96 text-center space-y-2">
            <h3 className="text-zinc-200 text-3xl font-semibold">Fast Lane Counter</h3>
            <p className="text-zinc-400 text-sm">
              Check out the various frontline services below and pick one that fits your needs.
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2 py-10 px-7 gap-5 mt-10">
        <div
          role="button"
          className="text-zinc-200 py-4 px-5 rounded-lg bg-amber-700 active:scale-90 transition-transform space-y-2"
        >
          <GgTimelapse />
          <section>
            <h3 className="text-xl font-semibold">Queue</h3>
            <p className="text-sm">Get a priority number</p>
          </section>
        </div>

        <div
          role="button"
          onClick={handleClick}
          className="text-zinc-200 py-4 px-5 rounded-lg bg-indigo-700 active:scale-90 transition-transform space-y-2"
        >
          <GgDropOpacity />
          <section>
            <h3 className="text-xl font-semibold">Billing Inquiry</h3>
            <p className="text-sm">Check your billing details</p>
          </section>
        </div>

        <div
          role="button"
          className="text-zinc-200 py-4 px-5 rounded-lg bg-green-700 active:scale-90 transition-transform space-y-2"
        >
          <GgThermostat />
          <section>
            <h3 className="text-xl font-semibold">Water Quality Test</h3>
            <p className="text-sm">Ensure the quality of water</p>
          </section>
        </div>

        <div
          role="button"
          className="text-zinc-200 py-4 px-5 rounded-lg bg-rose-700 active:scale-90 transition-transform space-y-2"
        >
          <GgFile />
          <section>
            <h3 className="text-xl font-semibold">New Service Application</h3>
            <p className="text-sm">Apply for new service connection</p>
          </section>
        </div>
      </div>
    </div>
  );
}

function GgTimelapse(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path d="M12 19a6.978 6.978 0 0 1-4.95-2.05L12 12V5a7 7 0 1 1 0 14Z"></path>
        <path
          fillRule="evenodd"
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11Zm-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

function GgDropOpacity(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.945 21.956A9 9 0 0 1 5.635 7.5L12 1.136L18.364 7.5a8.97 8.97 0 0 1 1.991 3.012a9.002 9.002 0 0 1-1.991 9.716a8.987 8.987 0 0 1-2.419 1.728ZM7.05 8.914L12 3.964l4.95 4.95a6.977 6.977 0 0 1 2.048 4.783H5.002A6.976 6.976 0 0 1 7.05 8.914Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function GgThermostat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path d="M12 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></path>
        <path
          fillRule="evenodd"
          d="M15 14a5 5 0 1 1-6 0V4a3 3 0 1 1 6 0v10ZM13 4v11.17A3.001 3.001 0 0 1 12 21a3 3 0 0 1-1-5.83V4a1 1 0 1 1 2 0Z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

function GgFile(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 5a3 3 0 0 1 3-3h8a7 7 0 0 1 7 7v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5Zm10-1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-6V4Zm5.584 3A5.009 5.009 0 0 0 15 4.1V7h3.584Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function GgBolt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="m9 21.5l8.5-8.5l-4.5-3l2-7.5L6.5 11l4.5 3l-2 7.5Z"></path>
    </svg>
  );
}
