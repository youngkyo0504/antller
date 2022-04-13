import { Children, FC } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import tw from "twin.macro";
import StickyHeader from "./Header/StickyHeader";
interface LayoutProps {
  stickyHeaderThreshold?: number;
}
const Layout: FC<LayoutProps> = ({ children, stickyHeaderThreshold }) => {
  return (
    <div tw="flex flex-col min-h-screen">
      <Header />
      <StickyHeader stickyHeaderThreshold={stickyHeaderThreshold} />
      <main tw="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
