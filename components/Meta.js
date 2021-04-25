import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
        rel='stylesheet'
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Music Events | Find the hottest parties and streams",
  description:
    "Find the latest music events from all around the globe",
  keywords: "music, dj, stream, party, event",
};

export default Meta;
