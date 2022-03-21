import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header className="absolute top-0 left-0    right-0 z-1 mx-auto  bg-transparent ">
    <div className="h-[90px] mx-auto content-container  flex-center  w-full">
      <Link href={"/"}>
        <Image
          width={115}
          className={"cursor-pointer"}
          height={35}
          src={"/Antller_logotype.svg"}
        />
      </Link>

      <nav>
        <ul className="flex text-xl font-semibold text-gray">
          <li className="mr-8 leading-loose">
            <Link href={"/work"}>WORK</Link>
          </li>
          <li className="mr-8 leading-loose">
            <Link href={"/about"}>ABOUT</Link>
          </li>
          <li className="mr-8 leading-loose">
            <Link href={"/news"}>NEWS</Link>
          </li>
          <li className="last:mr-0 mr-8 leading-loose">
            <Link href={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
