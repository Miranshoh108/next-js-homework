import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Music App</h1>
      <div className="space-x-4">
        <Link href="/login" className="text-white hover:text-blue-700 underline">
          <button className=" p-3 bg-black rounded-3xl">Login</button>
        </Link>
        <Link href="/dashboard" className="text-white hover:text-blue-700 underline">
          <button className=" p-3 rounded-3xl bg-black">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}