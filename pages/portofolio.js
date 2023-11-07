import Head from "next/head";
import Navbar from "./component/Navbar";
import Image from "next/image";

const portofolio = ({ albums }) => {
    return (
        <>
        <Head>
        <title>Portofolio | Belajar Next Js</title>
        <meta name="description" content="Belajar Next JS" />
    </Head>
    <Navbar/>
    <Image src="/vercel.svg" alt="Logo Next js" width={300} height={300} />
    <h1>Ini halaman portofolio</h1>
    {albums.map((album) => (
        <div key={album.id}>
            <h2>{album.title}</h2>
        </div>
    ))}
        </>
    );
};

export default portofolio;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await res.json();

    return {
        props: {
            albums,
        },
    };
};