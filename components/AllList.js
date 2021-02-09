import ListCard from "./ListCard";

export default function AllList(props){
  const allList = props.allList;
  const lists = [];
  for (const list of allList) {
    lists.push(
      <ListCard 
        key = {list.id}
        id = {list.id}
        title = {list.title}
        description = {list.description}
      />
    )
  }
  return (
    <div 
    className = "w-full flex flex-col justify-center items-center mt-3"
    >
      {lists}
    </div>
  );
}