import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../components/store/favorites-context";

function FavoritesPage(props) {
  const favsContext = useContext(FavoritesContext);
  let content;
  if (favsContext.totalFavorites === 0) {
    content = <p>You got no favorites. Start Adding some?</p>;
  } else {
    content = <MeetupList meetups={favsContext.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
