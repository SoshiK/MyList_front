import Head from "next/head";
import { useEffect, useState } from "react";
const axios = require("axios");
const BACKEND_URL = process.env.BACKEND_URL;

export default function List() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/list`)
      .then((res) => {
        console.log(res);
      })
  },[])
  return(
    <div>
      <Head>
        <title>MyList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      hello
    </div>
  )
}