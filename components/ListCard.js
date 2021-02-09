export default function ListCard(props) {
  return (
    <div class="w-4/6">
      <div class="overflow-hidden shadow-md">
        <div class="px-6 py-4 bg-white font-bold font-serif uppercase">
          {props.title}
        </div>
        <div class="px-6 pb-6 bg-white border-b border-gray-200">
          {props.description}
        </div>
        <div class="p-3 bg-white border-gray-200 text-right">
        <a class="bg-blue-600 shadow-md text-xs text-white font-serif py-2 px-4 hover:bg-blue-800 rounded uppercase" 
                href="#">
                See Detail
        </a>
        </div>
      </div>
    </div>
  );
}