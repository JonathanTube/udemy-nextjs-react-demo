import { useRef } from "react"
import Card from "../ui/Card"
import classes from "./NewMeetupForm.module.css"

const defaultData = {
  image:
    "https://img2.baidu.com/it/u=3999937652,1081321308&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  address: "Sunday 25 February 2024 08:57, UK",
  description:
    "When families escaping domestic violence are rehoused by their local council, properties are often stripped of all white goods, furniture, and flooring for health and safety reasons, says Emily Wheeler, founder of the charity Furnishing Futures.",
  title:
    "Meet the woman furnishing homes for domestic abuse survivors given empty flats with no beds",
}
export default function NewMeetupForm({ onAddMeetup }) {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const descriptionInputRef = useRef()
  const addressInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    }

    onAddMeetup(meetupData)
  }
  return (
    <section>
      <h1>Add Meetup</h1>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input
              id="title"
              type="text"
              required
              ref={titleInputRef}
              value={defaultData.title}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input
              id="image"
              type="text"
              required
              ref={imageInputRef}
              value={defaultData.image}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              required
              ref={addressInputRef}
              value={defaultData.address}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="5"
              required
              ref={descriptionInputRef}
              value={defaultData.description}
            />
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    </section>
  )
}
