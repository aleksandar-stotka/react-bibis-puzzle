import { useGlobalContext } from '../context/globalContext'
function PuzzleBoard() {
  const {aleksandar} = useGlobalContext()
  console.log(aleksandar)
  return (
    <div>PuzzleBoard</div>
  )
}

export default PuzzleBoard