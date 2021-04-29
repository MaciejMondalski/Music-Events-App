import styled from "styled-components";

const Showcase = () => {
  return (
    <StyledShowcase>
      <h1>Welcome to the Party!</h1>
      <h2>Find the best music events</h2>
    </StyledShowcase>
  );
};

const StyledShowcase = styled.div`
  background: url("/images/hero-dj.jpg") no-repeat center 60%;
  width: 100%;
  height: 13rem;
  background-size: cover;
  color: white;
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0rem;
  }
`;

export default Showcase;
