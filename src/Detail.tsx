import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Person = {
    name: string
}
const Detail = () => {
  const [person, setPerson] = useState<Person>({} as Person);

  const { id } = useParams();
  useEffect(() => {
    fetch('https://swapi.dev/api/people/' + id)
    .then(response => response.json())
    .then(body => setPerson(body))
  }, [id])

  return <h1>Detail {person.name}</h1>;
};
export default Detail;