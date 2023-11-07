import Head from "next/head";
import Navbar from "./component/Navbar";
import Image from "next/image";
import Link from "next/link";

const about = ({ data }) => {
    return (
        <>
        <Head>
        <title>About | Belajar Next Js</title>
        <meta name="description" content="Belajar Next JS" />
        </Head>
    <Navbar/>
    <Image src="/next.svg" alt="Logo Next js" width={300} height={300} />
    <h1>Ini halaman about</h1>
    {data.map((item) => (
        <div key={item.id}>
            <Link href={`/about/${item.id}`}>
            <h2>{item.name}</h2>
            </Link>
        </div>
    ))}
        </>
    );
};

export default about;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};