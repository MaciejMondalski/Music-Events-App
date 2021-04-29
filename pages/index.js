import Link from "next/link";
import styled from "styled-components";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
  console.log(events);
  return (
    <StyledHome>
      <div className='wrapper'>
        <h1>Upcoming Events</h1>
      </div>
    </StyledHome>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events, revalidate: 1 },
  };
};

const StyledHome = styled.div`
  width: 100vw;
  min-height: 40vh;
  display: flex;

  justify-content: center;

  .wrapper {
    display: flex;
    justify-content: center;
    width: 90vw;
    align-items: center;
  }
`;
