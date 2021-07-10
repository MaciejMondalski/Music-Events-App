import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { API_URL } from "@/config/index";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const EventPage = ({ evt }) => {
  const deleteEvent = (e) => {};

  return (
    <StyledEventPage>
      <div className='event-head'>
        <span>
          {evt.date} at {evt.time}
        </span>
        <div className='options'>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href='#' className='delete' onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
      </div>
      <h1>{evt.name}</h1>
      {evt.image && (
        <div className='image'>
          <Image src={evt.image} width={960} height={600} />
        </div>
      )}
    </StyledEventPage>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const res = await fetch(`${API_URL}/api/events/${slug}`);

  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
};

const StyledEventPage = styled.div`
  margin: 3rem;

  .event-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    a {
      text-decoration: none;
    }
  }

  .delete {
    margin-left: 20px;
    color: red;
  }
`;

export default EventPage;
