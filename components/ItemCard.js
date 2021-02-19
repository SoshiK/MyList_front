const axios = require("axios");
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ItemCard(props) {
  const clickDelete = () => {
    axios.delete(`${BACKEND_URL}/api/item/${props.id}`)
      .then((res) => {
        if(res.data.status === "ok") {
          props.setIsRefresh(props.id);
        } else {
          alert("Woops! Something was wrong!");
        }
      })
  };
  return (
    <div className="w-4/6 mb-4">
      <div className="overflow-hidden shadow-md">
        <div className="px-6 py-4 bg-white font-bold font-serif uppercase">
          {props.title}
        </div>
        <div className="px-6 pb-6 bg-white ">
          {props.description}
        </div>
        <div className="px-6 pb-6 bg-white border-b border-gray-200">
          <a 
            className="text-blue-600 font-serif text-xs"
            href={props.url}>{props.url}</a>
        </div>
        <div className="p-3 bg-white border-gray-200 text-right">
          <button 
            className="bg-blue-600 shadow-md text-xs text-white font-serif py-2 px-4 hover:bg-red-700 rounded uppercase" 
            onClick={clickDelete}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}