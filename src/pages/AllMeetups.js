import MeetupsList from "../components/meetups/MeetupsList"
import { useEffect, useState } from "react"

function AllMeetups() {
  const [isLoading, setIsLoading] = useState()
  const [meetups, setMeetups] = useState([])

  const loadData = async () => {
    setIsLoading(true)
    const db = "meetups.json"
    const url = `https://react-getting-started-43908-default-rtdb.asia-southeast1.firebasedatabase.app/${db}`
    const response = await fetch(url)
    const json = await response.json()
    // console.log(json)
    let items = []
    for (let key in json) {
      let item = {
        id: key,
        ...json[key],
      }
      items.push(item)
    }
    setMeetups(items)
    setIsLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupsList meetups={meetups} />
    </section>
  )
}

export default AllMeetups
