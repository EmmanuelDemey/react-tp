
import { PeopleItem } from "./PeopleItem";

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
