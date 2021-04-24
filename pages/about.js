import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
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
