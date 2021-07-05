import Link from "next/link";
import styled from "styled-components";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

export default function HomePage({ events }) {
  console.log(events);
  return (
    <StyledHome>
      <div className='wrapper'>
        <h1>Upcoming Events</h1>
        {events.length === 0 && <h3>No events to show</h3>}

        {events.map((evt) => (
          <EventItem key={evt.id} evt={evt} />
        ))}
        {events.length > 0 && (
          <Link href='/events'>
            <a className='btn-secondary'>View All Events</a>
          </Link>
        )}
      </div>
    </StyledHome>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(0, 3), revalidate: 1 },
  };
};

const StyledHome = styled.div`
  width: 100vw;
  min-height: 40vh;
  display: flex;
  justify-content: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90vw;
    align-items: center;

    h1 {
      margin: 1rem;
    }

    .btn-secondary {
      margin: 1rem 0;
			text-align: center;
      text-decoration: none;
      color: white;
			font-weight: bold;
      background: #000;
      padding: 1rem 2rem;
      border-radius: 0.4rem;
      margin: 2rem;
    }
  }
`;
