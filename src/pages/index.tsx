import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="bg-teal-300 px-[75px] py-[50px] flex flex-col gap-2">
        <h1 className="p-1 font-bold">LogIn</h1>
        <div className="p-1">
          <label>Enter username : </label>
          <input type="text" />
        </div>
        <div className="p-1">
          <label>Enter password :  </label>
          <input type="text" />
        </div>
        <div>
          <Link href="/forgot-password" className="text-xs	text-red-600 ml-64	">
            Forgot password?
          </Link>
        </div>
        <button type="submit" className="px-4 py-2 bg-teal-800 text-white font-extrabold justify-self-center">
          Submit
        </button>
      </div>
    </main>
  );
}
