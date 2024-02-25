import classes from "./MeetupsList.module.css"
import MeetupsItem from "./MeetupsItem"
function MeetupsList({ meetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupsItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  )
}

export default MeetupsList
