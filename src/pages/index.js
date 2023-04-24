import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center w-screen h-screen bg-blue-900">
        <div className="w-full text-center">
          <button
            onClick={() => signIn("google")}
            className="p-2 transition duration-300 bg-white border rounded-lg shadow-md shadow-gray-500 hover:scale-110 hover:bg-gray-500 hover:text-white"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return <div>Logged in {session.user.email}</div>;
}
