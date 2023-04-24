import Link from "next/link";
import { BiStore, BiBox } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { VscListUnordered } from "react-icons/vsc";
import { useRouter } from "next/router";

export default function Navbar() {
  const inactiveLink = "flex items-center gap-1 p-1";
  const activeLink = inactiveLink + " text-blue-900 bg-white rounded-l-lg";

  const router = useRouter();
  const { pathname } = router;

  return (
    <aside className="p-4 pr-0 text-white">
      <Link href="/" className="flex items-center gap-1 mb-4 mr-4">
        <BiStore />
        <span>eCommerce Admin</span>
      </Link>
      <nav className="flex flex-col gap-2">
        <Link href="/" className={pathname === "/" ? activeLink : inactiveLink}>
          <AiOutlineDashboard /> Dashboard
        </Link>
        <Link
          href="/products"
          className={pathname === "/products" ? activeLink : inactiveLink}
        >
          <BiBox /> Products
        </Link>
        <Link
          href="/orders"
          className={pathname === "/orders" ? activeLink : inactiveLink}
        >
          <VscListUnordered /> Orders
        </Link>
        <Link
          href="/settings"
          className={pathname === "/settings" ? activeLink : inactiveLink}
        >
          <FiSettings /> Settings
        </Link>
      </nav>
    </aside>
  );
}
