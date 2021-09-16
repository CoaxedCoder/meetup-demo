import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

export default function MeetupItem(props) {
  const favsContext = useContext(FavoritesContext);
  const isFavorite = favsContext.itemIsFavorite(props.id);

  function toggleFavStateHandler() {
    if (isFavorite) {
      favsContext.removeFavorite(props.id);
    } else {
      favsContext.addFavorite({
        id: props.id,
        title: props.title,
        address: props.address,
        desciption: props.desciption,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.desciption}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStateHandler}>
            {isFavorite ? "removeFacorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
