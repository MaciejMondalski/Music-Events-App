import GlobalStyle from "../styles/GlobalStyle";
import Meta from "./Meta";
import Header from "./Header";

const Layout = ({ children }) => {
  console.log({});
  return (
    <>
      <>
        <Meta />
        <GlobalStyle />
      </>
			
      <div className='layout'>
			<Header />

        <div className='content'>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
