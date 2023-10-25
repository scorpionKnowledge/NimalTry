import { getImageUrl } from "../../utilities/util";
import { people } from "./data";

function Item({ person }) {
  return (
    <li className="item" key={person.id}>
      <img src={getImageUrl(person.imageId)} />
      <h4>{person.name}</h4>
      <p>{`${person.profession} known for ${person.accomplishment}`}</p>
    </li>
  );
}

export default function RenderList() {
  const chemist = people.filter((person) => person.profession == "chemist");
  let listItems = people.map((person) => <Item person={person} />);
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>{listItems}</ul>
    </section>
  );
}
