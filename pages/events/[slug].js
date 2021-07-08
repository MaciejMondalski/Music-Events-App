import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>My Event</h1>
      <h3>{router.query.slug}</h3>
    </div>
  );
};

export const getServerSideProps = async ({ query: { slug } }) => {
  console.log(slug);
  return {
    props: {},
  };
};

export default EventPage;
