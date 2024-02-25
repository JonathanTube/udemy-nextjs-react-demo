import { useNavigate } from "react-router-dom"
import NewMeetupForm from "../components/meetups/NewMeetupForm"
export default function NewMeetup() {
  const navigate = useNavigate()

  const addMeetupHandler = async (meetupData) => {
    const db = "meetups.json"
    const url = `https://react-getting-started-43908-default-rtdb.asia-southeast1.firebasedatabase.app/${db}`
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "aplication/json",
      },
    })
    // console.log(response)
    navigate("/", { replace: true })
  }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  )
}
