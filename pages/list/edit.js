import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
const axios = require("axios");
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function EditList(props) {
  const router = useRouter();
  const { id, title, description } = router.query;
  const [titleChange, setTitleChange] = useState(title);
  const [descriptionChange, setDescriptionChange] = useState(description);
  const change = () => {
    axios.patch(`${BACKEND_URL}/api/list`,{
      id: id,
      title: titleChange,
      description: descriptionChange
    })
      .then((res) => {
        if(res.data.status === "ok") {
          router.back();
        }else {
          alert("Something is wrong!");
        }
      });
  }
  return (
    <div className="flex py-0 px-0 flex-col justify-center items-center">
      <Head>
      <title>MyList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-blue-600 w-full h-16 flex items-center justify-center">
        <p className="text-center text-white font-serif">Edit List</p>
      </div>
      <div className="w-4/5 mt-3">
        <label className="text-black">Title</label>
        <input 
          type="text" 
          autoFocus 
          id="title" 
          className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
          defaultValue={title}
          onChange={(e) => setTitleChange(e.target.value)}
        />
      </div>
      <div className="w-4/5 mt-3">
        <label className="text-black">Description</label>
        <input 
          type="text" 
          id="description" 
          className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
          defaultValue={description}
          onChange={(e) => setDescriptionChange(e.target.value)}
        />
      </div>
      <button
        className="inline-block px-6 py-2 mt-3 text-xs font-serif leading-6 text-center text-white uppercase transition bg-blue-600 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        onClick={change}
      >CHANGE</button>
    </div>
  );
}