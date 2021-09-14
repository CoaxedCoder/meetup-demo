import { Route,Switch } from "react-router-dom";
import MainNavigationLayout from "./layout/MainNavigationLayout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigationLayout/>
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupsPage/>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage/>
        </Route>
        <Route path='/favorites'>
          <FavoritesPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
