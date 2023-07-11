import { useState, useEffect } from "react";
import { PeopleFilter, PeopleTable } from "./People";



export const Home = () => {
  const [filter, setFilter] = useState("");
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const loader = loading ? <progress className="progress is-small is-primary" max="100"></progress> : null;

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/people/?search=" + filter)
      .then((response) => response.json())
      .then((body: any) => {
        setPeople(body.results);
      })
      .finally(() => setLoading(false));
  }, [filter]);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Hello World</h1>
        <p className="subtitle">
          My first website with <strong>Bulma</strong>!
        </p>
      </div>
      <h2>Vous aimez X personnages</h2>

      <PeopleFilter value={filter} onFilter={setFilter}></PeopleFilter>
      {loader}
      {!loading && (
        <>
          <PeopleTable people={people}></PeopleTable>
        </>
      )}
    </section>
  );
};
