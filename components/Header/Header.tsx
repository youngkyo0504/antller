import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import "twin.macro";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header tw="absolute top-0 left-0  right-0 z-[3] mx-auto  bg-transparent ">
    <div tw="h-[90px] mx-auto  flex justify-between items-center max-w-content md:px-content w-full">
      <Link href={"/"}>
        <Image
          width={115}
          tw={"cursor-pointer"}
          height={35}
          src={"/Antller_logotype.svg"}
        />
      </Link>

      <nav>
        <ul tw="flex text-xl font-semibold text-white">
          <li tw="mr-8 leading-loose">
            <Link href={"/work"}>WORK</Link>
          </li>
          <li tw="mr-8 leading-loose">
            <Link href={"/about"}>ABOUT</Link>
          </li>
          <li tw="mr-8 leading-loose">
            <Link href={"/news"}>NEWS</Link>
          </li>
          <li tw="last:mr-0 mr-8 leading-loose">
            <Link href={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
