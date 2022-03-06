import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'
import { ColorCell } from './ColorCell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
      <ColorCell guessColor={'808080'} />
    </div>
  )
}
