
import { useGlobalState } from '../context/GlobalState'

export const Balance = () => {

  const data = useGlobalState()

  return (
    <div>
      <h1>
        Balance
      </h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
