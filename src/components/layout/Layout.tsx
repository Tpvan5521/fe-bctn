import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
