import MeetupsList from "../components/meetups/MeetupsList"
import { useEffect, useState } from "react"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

function AllMeetups() {
  const { data } = useSWR(
    "https://react-getting-started-43908-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
    fetcher
  )

  const [isLoading, setIsLoading] = useState(true)
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    let items = []
    for (let key in data) {
      let item = {
        id: key,
        ...data[key],
      }
      items.push(item)
    }
    setMeetups(items)
    setIsLoading(false)
  }, [data])

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
