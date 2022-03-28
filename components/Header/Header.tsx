import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header className="absolute top-0 left-0  right-0 z-[3] mx-auto  bg-transparent ">
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
        <ul className="flex text-xl font-semibold text-white">
          <li className="mr-8 leading-loose">
            <Link href={"/work"}>
              <a>WORK</a>
            </Link>
          </li>
          <li className="mr-8 leading-loose">
            <Link href={"/about"}>
              <a>ABOUT</a>
            </Link>
          </li>
          <li className="mr-8 leading-loose">
            <Link href={"/news"}>
              <a>NEWS</a>
            </Link>
          </li>
          <li className="last:mr-0 mr-8 leading-loose">
            <Link href={"/contact"}>
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
