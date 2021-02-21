import { useRouter } from "next/router";

export default function ListCard(props) {
  const router = useRouter();
  const click = () => {
    router.push({
      pathname: "/item",
      query: {
        id: props.id,
        title: props.title
      }
    })
  }
  const clickEdit = () => {
    router.push({
      pathname: "/list/edit",
      query: {
        id: props.id,
        title: props.title,
        description: props.description
      }
    })
  }
  return (
    <div className="w-4/6 mb-4">
      <div className="overflow-hidden shadow-md">
        <div className="px-6 py-4 bg-white font-bold font-serif uppercase">
          {props.title}
        </div>
        <div className="px-6 pb-6 bg-white border-b border-gray-200">
          {props.description}
        </div>
        <div className="p-3 bg-white border-gray-200 text-right">
          <button 
            className="bg-blue-600 shadow-md mr-3 text-xs text-white font-serif py-2 px-4 hover:bg-blue-800 rounded uppercase" 
            onClick={clickEdit}
          >
            Edit
          </button>
          <button 
            className="bg-blue-600 shadow-md text-xs text-white font-serif py-2 px-4 hover:bg-blue-800 rounded uppercase" 
            onClick={click}
          >
            See Detail
          </button>
        </div>
      </div>
    </div>
  );
}