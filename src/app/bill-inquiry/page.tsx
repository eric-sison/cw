"use client";

import { useRouter } from "next/navigation";
import { SVGProps } from "react";

export default function BillInquiry() {
  const router = useRouter();

  const handleFormSubmit = () => {
    router.push("/bill-inquiry/details");
  };

  return (
    <>
      <div className="h-full w-full bg-zinc-900 select-none">
        <div className="absolute left-7 top-7">
          <button
            onClick={() => router.back()}
            className="bg-zinc-700 text-zinc-200 px-5 py-2 uppercase font-semibold active:scale-90 transition-transform rounded-md shadow-md shadow-zinc-900"
          >
            Back
          </button>
        </div>
        <main className="pt-36">
          <header className="w-full flex flex-col items-center space-y-5">
            <section className="flex flex-col items-center gap-3">
              <GgDropOpacity className="text-indigo-400" />
              <h3 className="text-3xl font-bold text-zinc-200">Billing Inquiry</h3>
            </section>
            <p className="text-center max-w-[26rem] text-zinc-400">
              Enter your details below to check your recurring charges and review your billing details.
            </p>
          </header>

          <section className="mt-20 flex justify-center">
            <div className="w-[30rem] space-y-10">
              <section className="space-y-7">
                <div className="space-y-1">
                  <label htmlFor="account_name" className="text-indigo-500 text-sm font-semibold pl-1">
                    Account name
                  </label>

                  <section className="space-y-1">
                    <input
                      id="account_name"
                      className="w-full py-[0.8rem] px-5 rounded-lg bg-zinc-800 text-white"
                      placeholder="e.g. John Doe"
                    />
                    <span className="text-zinc-400 text-xs pl-1">
                      The account name doesn&apos;t have to be a full name.
                    </span>
                  </section>
                </div>

                <div className="space-y-1">
                  <label htmlFor="account_number" className="text-indigo-500 text-sm font-semibold pl-1">
                    Account number
                  </label>

                  <section className="space-y-1">
                    <input
                      id="account_number"
                      type="number"
                      className="w-full py-[0.8rem] px-5 rounded-lg bg-zinc-800 text-white"
                      placeholder="x x x x x x"
                    />
                    <span className="text-zinc-400 text-xs pl-1">Enter your six-digit account number.</span>
                  </section>
                </div>
              </section>

              <button
                onClick={handleFormSubmit}
                className="bg-indigo-600 w-full py-[0.95rem] rounded-lg text-indigo-100 font-semibold active:scale-90 transition-transform"
              >
                View Billing Details
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

function GgDropOpacity(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.945 21.956A9 9 0 0 1 5.635 7.5L12 1.136L18.364 7.5a8.97 8.97 0 0 1 1.991 3.012a9.002 9.002 0 0 1-1.991 9.716a8.987 8.987 0 0 1-2.419 1.728ZM7.05 8.914L12 3.964l4.95 4.95a6.977 6.977 0 0 1 2.048 4.783H5.002A6.976 6.976 0 0 1 7.05 8.914Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
