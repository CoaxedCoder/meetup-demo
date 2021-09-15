import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const eneteredTitle = titleInputRef.current.value;
    const eneteredImageUrl = imageInputRef.current.value;
    const eneteredAddress = addressInputRef.current.value;
    const eneteredDescription = descriptionInputRef.current.value;

    const meetUpData = {
      title: eneteredTitle,
      imageUrl: eneteredImageUrl,
      address: eneteredAddress,
      description: eneteredDescription,
    };
    console.log(JSON.stringify(meetUpData));
    props.onAddMeetup(meetUpData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.control}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
