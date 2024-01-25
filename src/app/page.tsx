"use client"; // This is a client component 👈🏽

import Link from "next/link";
import { useName } from "~/components/name-context";
import Navbar from "../components/navbar";

export default function HomePage() {
  const { name } = useName();

  return (
    <div className="bg-gradient-to-br min-h-screen from-red-400 via-yel low-400 to-purple-600">
      <main className="max-w-6xl mx-auto h-full w-full">
        <Navbar></Navbar>
        <div className="flex  flex-col items-center justify-center ">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-10 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Hello <span className="text-[hsl(280,100%,70%)]">{name}</span>!
            </h1>
            <button className="text-2xl font-bold bg-white p-3 shadow rounded-xl"> START </button>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://create.t3.gg/en/usage/first-steps"
                target="_blank"
              >
                <h3 className="text-2xl font-bold">First Steps →</h3>
                <div className="text-lg">
                  Just the basics - Everything you need to know to set up your
                  database and authentication.  
                </div>
              </Link>
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://create.t3.gg/en/introduction"
                target="_blank"
              >
                <h3 className="text-2xl font-bold">Documentation →</h3>
                <div className="text-lg">
                  Learn more about Create T3 App, the libraries it uses, and how to
                  deploy it.
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
