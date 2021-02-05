import Head from "next/head";
import { useRouter } from "next/router";
const axios = require("axios");
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Home() {
  const router = useRouter();
  const login = () => {
    const text = document.getElementById("text");
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
    <div className="flex py-0 px-0 flex-col justify-center items-center">
      <Head>
        <title>MyList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-blue-600 w-full h-16 flex items-center justify-center">
        <p className="text-center text-white font-serif">Koike Memo</p>
      </div>
      <div className="flex flex-col mt-10">
        <div className="w-full mb-4">
          <input 
            type="password" 
            id="text"
            className="font-serif text-center appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
            >
          </input>
        </div>
        <div className="mx-auto">
          <button 
            className="inline-block px-6 py-2 text-xs font-serif leading-6 text-center text-white uppercase transition bg-blue-600 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
            onClick={login}
            >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
