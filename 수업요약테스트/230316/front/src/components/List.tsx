import { useCallback, useEffect, useState } from "react";
import axios from "axios";

interface nftData {
  name: string;
  description: string;
  image: string;
}

export const List = () => {
  const [list, setList] = useState<Array<nftData>>([]);

  const getList = useCallback(async () => {
    const data = await axios.get("http://localhost:8080/api/list");
    console.log(data);
    setList(data.data);
  }, []);
  useEffect(() => {
    getList();
  }, []);

  return (
    <ul>
      {list.map((item, idx) => (
        <Item item={item} key={`item-${idx}`} />
      ))}
    </ul>
  );
};
const Item = ({ item: { name, description, image } }: { item: nftData }) => {
  return (
    <li>
      <div>{name}</div>
      <div>{description}</div>
      <div>{<img src={image} />}</div>
    </li>
  );
};
