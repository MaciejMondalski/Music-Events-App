import GlobalStyle from "@/styles/GlobalStyle";
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <>
        <Meta />
        <GlobalStyle />
      </>

      <div className='layout'>
        <Header />
        {router.pathname === "/" && <Showcase />}

        <div className='content'>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
