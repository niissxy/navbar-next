import Head from "next/head";
import Navbar from "./component/Navbar";
import Image from "next/image";

const contact = ({ comments }) => {
    return (
        <>
        <Head>
        <title>Contact | Belajar Next Js</title>
        <meta name="description" content="Belajar Next JS" />
        </Head>
    <Navbar/>
    <Image src="/next.svg" alt="Logo Next js" width={300} height={300} />
    <h1>Ini halaman contact</h1>
    {comments.map((comment) => (
        <div key={comment.id}>
            <h2>{comment.name}</h2>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
        </div>
    ))}
        </>
    );
};

export default contact;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await res.json();

    return {
        props: {
            comments,
        },
    };
};