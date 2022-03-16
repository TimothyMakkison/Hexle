import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the hex color in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="2" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="correct"
        />
        <Cell value="3" />
        <Cell value="4" />
        <Cell value="8" />
        <Cell value="F" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The symbol D is in the hex color and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="1" />
        <Cell value="4" />
        <Cell value="A" />
        <Cell value="0" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="present"
        />
        <Cell value="9" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The symbol B is in the hex color but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="7" />
        <Cell value="3" />
        <Cell value="G" />
        <Cell isRevealing={true} isCompleted={true} value="1" status="absent" />
        <Cell value="2" />
        <Cell value="0" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The symbol 1 is not in the hex color in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
