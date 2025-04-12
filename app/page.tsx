import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Music App</h1>
      <div className="space-x-4">
        <Link href="/login" className="text-blue-500 hover:text-blue-700 underline">
          Login
        </Link>
        <Link href="/dashboard" className="text-blue-500 hover:text-blue-700 underline">
          Dashboard
        </Link>
      </div>
    </div>
  );
}