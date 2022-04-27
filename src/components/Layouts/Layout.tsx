import { Children, createContext, FC } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import tw from "twin.macro";
import StickyHeader from "./Header/StickyHeader";
interface LayoutProps {
  stickyHeaderOption?: {
    stickyHeaderThreshold?: number;
    stickyHeaderEnable?: boolean;
  };
  isWhiteLogo?: boolean;
}
const Layout: FC<LayoutProps> = ({ children, stickyHeaderOption }) => {
  return (
    <div tw="flex flex-col min-h-screen">
      <Header />
      <StickyHeader {...stickyHeaderOption} />
      <main tw="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
