import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, dislike, isLiked, like } from "./store";

function getIDFromUrl(url: string) {
  const withoutPrefix = url.replace("https://swapi.dev/api/people/", "");
  return withoutPrefix.replace("/", "");
}

type PeopleFilterProps = {
  value: string;
  onFilter: (value: string) => void;
};
export const PeopleFilter = ({ onFilter, value }: PeopleFilterProps) => {
  return (
    <div className="field">
      <div className="control">
        <input value={value} className="input is-info" type="text" onChange={(e) => onFilter(e.target.value)} />
      </div>
    </div>
  );
};

export const PeopleItem = ({ p }: { p: any }) => {
  const dispatch = useDispatch();
  const isAlreadyLiked: boolean = useSelector((state: RootState) => isLiked(state, p));

  return (
    <tr>
      <td>
        <Link to={"/person/" + getIDFromUrl(p.url)}>{p.name}</Link>
      </td>
      <td>{p.gender}</td>
      <td>{p.birth_year}</td>
      <td>
        {!isAlreadyLiked && (
          <button type="button" className="button is-warning" onClick={() => dispatch(like(p))}>
            I Like
          </button>
        )}
        {isAlreadyLiked && (
          <button type="button" className="button is-warning" onClick={() => dispatch(dislike(p))}>
            I Dislike
          </button>
        )}
      </td>
    </tr>
  );
};
export const PeopleTable = ({ people }: { people: any[] }) => {
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Genre</th>
          <th>Année de naissance</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {people.map((p: any) => (
          <PeopleItem p={p} />
        ))}
      </tbody>
    </table>
  );
};
