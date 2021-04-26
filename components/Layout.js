import GlobalStyle from "../styles/GlobalStyle";
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <>
        <Meta />
        <GlobalStyle />
      </>

      <div className='layout'>
        <Header />
        <div className='content'>{children}</div>
				<Footer/>
      </div>
    </>
  );
};

export default Layout;
