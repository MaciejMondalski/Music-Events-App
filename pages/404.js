import styled from "styled-components";
import Link from "next/link";
import { FaExclamationTriangle} from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <StyledError>
      <div className='wrapper'>

        <h1><FaExclamationTriangle/> 404</h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href='/'><a>Go Back Home</a></Link>
      </div>
    </StyledError>
  );
};

const StyledError = styled.div`
  margin: 3rem 0rem;
	text-align: center;

	a{
		text-decoration: none;
		color: #613fb7;

	}

`;

export default NotFoundPage;
