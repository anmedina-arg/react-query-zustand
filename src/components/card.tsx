import { ReposProps } from "../hooks/types";
import { useFavoriteReposStore } from '../store/favoriteRepos';

type CardProps = {
  repo: ReposProps,
  favoriteRepos: boolean
};

function Card({ repo, favoriteRepos }: CardProps) {

  const { addFavoriteReposId, removeFavoriteReposId } = useFavoriteReposStore()

  const toggleLike = () => {
    if (favoriteRepos) {
      removeFavoriteReposId(repo.id)
    } else {
      addFavoriteReposId(repo.id)
    }
  }

  return (
    <>
      <h3>{repo.name}</h3>
      <button onClick={toggleLike}>
        {
          favoriteRepos ? 'Dislike' : 'Like'
        }
      </button>
    </>
  )
}

export default Card;