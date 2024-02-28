import classes from "./MainNavigation.module.css"
import { Link } from "react-router-dom"
import FavoritesContext from "../../store/favorites-context"
import { useContext } from "react"

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext)

  return (
    <>
      <header className={classes.nav}>
        <div className={classes.title}>React Meetups</div>
        <section className={classes.menu}>
          <Link to="/">All Meetups</Link>
          <Link to="/newMeetup">New Meetup</Link>
          <Link to="/favorites">Favorites({favoritesCtx.totalFavorites})</Link>
        </section>
      </header>
      <header className={classes.navPlaceholder}></header>
    </>
  )
}

export default MainNavigation
