import Head from "next/head"
import Navbar from "./component/Navbar"
import Image from "next/image"

export default function Home({ data }) {
  return (
    <>
    <Head>
      <title>Home | Belajar Next Js</title>
      <meta name="description" content="Belajar Next JS" />
    </Head>
    <Navbar/>
    <Image src="/next.svg" alt="Logo Next js" width={300} height={300} />
    <h1>Ini halaman home</h1>
    {data.map((item) => (
        <div key={item.id}>
            <h2>{item.name}</h2>
        </div>
    ))}
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
      props: {
          data,
      },
  };
};
