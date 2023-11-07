import Head from "next/head";
import Navbar from "./component/Navbar";
import Image from "next/image";

const about = ({ todos }) => {
    return (
        <>
        <Head>
        <title>About | Belajar Next Js</title>
        <meta name="description" content="Belajar Next JS" />
        </Head>
    <Navbar/>
    <Image src="/next.svg" alt="Logo Next js" width={300} height={300} />
    <h1>Ini halaman about</h1>
    {todos.map((todo) => (
        <div key={todo.id}>
            <h2>{todo.title}</h2>
        </div>
    ))}
        </>
    );
};

export default about;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();

    return {
        props: {
            todos,
        },
    };
};