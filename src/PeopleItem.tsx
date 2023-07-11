import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, dislike, isLiked, like } from "./store";
import { useTranslation } from 'react-i18next';

function getIDFromUrl(url: string) {
    const withoutPrefix = url.replace("https://swapi.dev/api/people/", "");
    return withoutPrefix.replace("/", "");
  }
  
export const PeopleItem = ({ p }: { p: any }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
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
              {t('LIKE')}
            </button>
          )}
          {isAlreadyLiked && (
            <button type="button" className="button is-warning" onClick={() => dispatch(dislike(p))}>
              {t('DISLIKE')}
            </button>
          )}
        </td>
      </tr>
    );
  };