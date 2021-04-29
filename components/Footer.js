import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <StyledFooter>
      <div className='footer'>
        <p>Copyright &copy; Music Events 2021</p>

        <Link href='/about'>
          <p className="about-p">About this project</p>
        </Link>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
	justify-content: center;
	position: fixed;
  bottom: 0;

  .footer {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    p {
      padding: 0.2rem;
      color: inherit;
      text-decoration: none;
		}
		
		.about-p{
			color: #613fb7;
		}
  }
`;

export default Footer;
