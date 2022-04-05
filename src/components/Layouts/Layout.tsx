import { Children, FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import tw from "twin.macro";
const Layout: FC = ({ children }) => {
  return (
    <div tw="flex flex-col min-h-screen">
      <Header />
      <main tw="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
