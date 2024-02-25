import classes from "./MainNavigation.module.css"
import { Link } from "react-router-dom"
function MainNavigation() {
  return (
    <header className={classes.nav}>
      <div className={classes.title}>React Meetups</div>
      <section className={classes.menu}>
        <Link to="/">All Meetups</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/newMeetup">New Meetup</Link>
      </section>
    </header>
  )
}

export default MainNavigation
