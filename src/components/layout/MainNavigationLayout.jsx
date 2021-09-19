import { Link } from "react-router-dom";
import classes from "./MainNavigationLayout.module.css";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

export default function MainNavigationLayout() {
  const favContext = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul className>
          <li>
            <Link to="/">All Mettups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Mettup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>{favContext.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
