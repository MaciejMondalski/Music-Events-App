import Link from "next/link";
import Meta from "../components/Meta";

const AboutPage = () => {
  return (
    <div>
      <Meta title='About' />

      <h1>About Page</h1>
      <p>
        This app helps you find the best music events in your city
      </p>
      <Link href='/'>
        <h2>Home</h2>
      </Link>
    </div>
  );
};

export default AboutPage;
