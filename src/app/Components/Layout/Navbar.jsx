import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/Images/logo.png";
import SearchIcon from "../../../../public/Icons/search-icon.png";
import CartIcon from "../../../../public/Icons/cart-icon.png";
export default function Navbar() {
  return (
    <section id="navbar">
      <div className="max-w-5xl mx-auto p-9 flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className="md:flex hidden space-x-5">
          <a
            href=""
            className="text-darkGray border-b-[1px] border-b-transparent hover:border-b-darkGray"
          >
            Watches
          </a>
          <a
            href=""
            className="text-darkGray border-b-[1px] border-b-transparent hover:border-b-darkGray"
          >
            Eyewears
          </a>
          <a
            href=""
            className="text-darkGray border-b-[1px] border-b-transparent hover:border-b-darkGray"
          >
            Accessories
          </a>
          <a
            href=""
            className="text-darkGray border-b-[1px] border-b-transparent hover:border-b-darkGray"
          >
            News
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-5">
          <Image src={SearchIcon} className="hover:cursor-pointer" />
          <a
            href=""
            className="text-darkGray border-b-[1px] border-b-transparent hover:border-b-darkGray"
          >
            Login
          </a>
          <a href="" className="bg-orrangeLight rounded-full p-2">
            <Image src={CartIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}
