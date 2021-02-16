import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AllList from "../../components/AllList";
const axios = require("axios");
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function List() {
  const [lists, setLists] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/list`)
      .then((res) => {
        setLists(res.data.result);
      })
  },[])
  const createList = () => {
    router.push("list/create");
  }
  return(
    <div className="flex py-0 px-0 flex-col justify-center items-center">
      <Head>
        <title>MyList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-blue-600 w-full h-16 flex items-center justify-center">
        <p className="text-center text-white font-serif">Koike Memo</p>
      </div>
      <div className="mt-3">
        <button
          className="px-6 py-2 text-xs font-serif leading-6 text-center text-white uppercase transition bg-blue-600 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          onClick={createList}
        >+</button>
      </div>
      <AllList allList = {lists}/>
    </div>
  )
}