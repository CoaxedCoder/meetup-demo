import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router";

function NewMeetupPage(props) {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-9860b-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
