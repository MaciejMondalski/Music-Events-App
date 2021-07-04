import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function EventItem({ evt }) {
  return (
    <StyledEventItem>
      <div className='event'>
        <div className='img'>
          <Image
            src={evt.image ? evt.image : "/images/hero-dj.jpg"}
            width={600}
            height={400}
            objectFit='contain'
          />
        </div>
        <div className='info'>
          <span>
            {evt.date} at {evt.time}
          </span>
          <h3>{evt.name}</h3>
        </div>
        <div className='event-link'>
          <Link href={`/events/${evt.slug}`}>
            <a className='event-btn'>Details</a>
          </Link>
        </div>
      </div>
    </StyledEventItem>
  );
}

const StyledEventItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0.6rem 0;
  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;

  .event {
    display: flex;
    align-items: center;
    background: #fff;
    width: 60vw;
    border-radius: 0.4rem;
		

    .img {
      display: flex;
      flex: 2;
      margin: 1rem 2rem 1rem 1rem;
      align-items: center;
    }

    .info {
      flex: 3;
    }

    .event-btn {
      text-align: center;
      text-decoration: none;
      color: white;
      background: #613fb7;
      padding: 1rem 2rem;
      border-radius: 0.4rem;
      margin: 2rem;
			flex:2;
    }

    @media (max-width: 600px) {
      .event {
        flex-direction: column;
        text-align: center;
      }
    }
  }
`;
