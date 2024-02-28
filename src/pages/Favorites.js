import { useContext } from "react"
import FavoritesContext from "../store/favorites-context"
import MeetupsList from "../components/meetups/MeetupsList"

export default function Favorites() {
  const favoritesCtx = useContext(FavoritesContext)

  return (
    <>
      <h1>Favorites</h1>
      {favoritesCtx.totalFavorites === 0 ? (
        <p>You got no favorites yet. Start adding some?</p>
      ) : (
        <MeetupsList meetups={favoritesCtx.favorites}></MeetupsList>
      )}
    </>
  )
}
