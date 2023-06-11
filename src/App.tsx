
import './App.css';
import { useFetchRepositories } from './hooks/useRepos';

function App() {

  const { isLoading, data, isError, error } = useFetchRepositories()

  console.log(data)
  return (
    <>
      <div>hello world</div>
    </>
  )
}

export default App
