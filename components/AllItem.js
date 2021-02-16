import ItemCard from "./ItemCard";

export default function AllItem(props) {
  const allItems = props.allItems;
  const list = [];
  for (const item of allItems) {
    list.push(
      <ItemCard 
        title = {item.title}
        description = {item.description}
        url = {item.url}
        key = {item.id}
        id = {item.id}
      />
    )
  }
  return (
    <div 
      className = "w-full flex flex-col justify-center items-center mt-3"
    >
      {list}
    </div>
  );
}