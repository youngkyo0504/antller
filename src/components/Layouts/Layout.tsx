import { Children, createContext, FC } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import tw from "twin.macro";
import StickyHeader from "./Header/StickyHeader";
import Headers from "@components/Headers";
import InOutTransitionContainer from "./TransitionContainer";
interface LayoutProps {
  stickyHeaderOption?: {
    stickyHeaderThreshold?: number;
    stickyHeaderEnable?: boolean;
  };
}
const Layout: FC<LayoutProps> = ({ children, stickyHeaderOption }) => {
  return (
    <div tw="flex flex-col min-h-screen">
      <Headers {...{ stickyHeaderOption }} />
      <main tw="flex-1">{children}</main>
      <InOutTransitionContainer>
        <Footer />
      </InOutTransitionContainer>
    </div>
  );
};
export default Layout;
