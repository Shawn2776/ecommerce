import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
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

  return (
    <div className="flex min-h-screen bg-blue-900">
      <Navbar />
      <div className="flex-grow p-4 mt-2 mb-2 mr-2 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
}
