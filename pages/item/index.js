import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Allitem  from "../../components/AllItem";
const axios = require("axios");
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Item() {
  const router = useRouter();
  const { id, title } = router.query;
  const [items, setItems] = useState([]);
  const [isRefresh, setIsRefresh] = useState("");
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/item/${id}`)
      .then((res) => {
        setItems(res.data.result);
      }) 
  },[isRefresh])
  const createItem = () => {
    router.push({
      pathname: "/item/create",
      query: {
        listid: id
      }
    })
  }
  const backHome = () => {
    router.push("/list");
  }
  return (
    <div className="flex py-0 px-0 flex-col justify-center items-center">
      <Head>
        <title>MyList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-blue-600 w-full h-16 flex items-center justify-center">
        <p className="text-center text-white font-serif">{title}</p>
      </div>
      <div className="mt-3">
      <button
          className="px-6 py-2 mx-3 text-xs font-serif leading-6 text-center text-white uppercase transition bg-blue-600 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          onClick={backHome}
        >Back</button>
        <button
          className="px-6 py-2 mx-3 text-xs font-serif leading-6 text-center text-white uppercase transition bg-blue-600 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          onClick={createItem}
        >+</button>
      </div>
      <Allitem allItems={items} setIsRefresh={setIsRefresh}/>
    </div>
  );
}