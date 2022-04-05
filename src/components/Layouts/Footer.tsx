import { FC } from "react";
import "twin.macro";
const Footer: FC = ({ children }) => {
  return (
    <>
      <footer tw="text-gray max-w-content text-lg mx-auto px-content flex flex-col pt-4 pb-6 mt-24">
        <div tw="flex justify-between">
          <div tw="  "> © Antller </div>
          <ul tw="flex">
            <li tw="ml-4 hover:text-antller-black cursor-pointer">Instagram</li>
            <li tw="ml-4 hover:text-antller-black cursor-pointer">Twitter</li>
            <li tw="ml-4 hover:text-antller-black cursor-pointer">Facebook</li>
          </ul>
        </div>
        <div tw="mt-2 hover:text-antller-black cursor-pointer">
          Subscribe to our Newsletter
        </div>
      </footer>
    </>
  );
};
export default Footer;
