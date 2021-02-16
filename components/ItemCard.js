export default function ItemCard(props) {
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
      </div>
    </div>
  );
}