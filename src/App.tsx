
import './App.css';
import { useFetchRepositories } from './hooks/useRepos';
import Card from './components/card';
import { useFavoriteReposStore } from './store/favoriteRepos';

function App() {

  const { isLoading, data, isError, error } = useFetchRepositories('anmedina-arg')


  const { favoriteReposId } = useFavoriteReposStore()

  if (isLoading) return <div>Loading...</div>
  return (
    <div>
      {
        data?.map((repo) => {
          return (
            <Card key={repo.id} repo={repo} favoriteRepos={favoriteReposId.includes(repo.id)} />
          )
        })
      }
    </div>
  )
}

export default App
