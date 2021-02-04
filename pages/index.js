import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
const axios = require("axios");
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Home() {
  const router = useRouter();
  const login = () => {
    const text = document.getElementById("text");
    console.log(process.env.NEXT_PUBLIC_PASSWORD);
    if (text.value === process.env.NEXT_PUBLIC_PASSWORD) {
      router.push("list");
    }else {
      axios.get(`${BACKEND_URL}/`)
        .then((res) => {
          console.log(res);
        })
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>MyList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <input type="text" id="text"></input>
        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}
