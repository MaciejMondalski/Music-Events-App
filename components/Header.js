import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <StyledHeader>
      <div className='wrapper'>
        <div className='logo'>
          <Link href='.'>
            <a>LOGO</a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/events'>
                <a>Events</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
	width: 100vw;
	height:10vh;
	align-items:center;
	border-bottom: 3px solid #bbbbbe;
  box-shadow: 0px 1px 5px #bbbbbe;

  .wrapper {
    display: flex;
    justify-content: space-between;
		width: 90vw;

    a {
      color: inherit;
      text-decoration: none;
    }

    li {
      list-style: none;
    }
  }
`;

export default Header;
