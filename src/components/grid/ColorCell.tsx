import classnames from 'classnames'
import * as React from 'react'
import { MAX_WORD_LENGTH, REVEAL_TIME_MS } from '../../constants/settings'

export interface ColorCellProps {
  guessColor: string
  isRevealing?: boolean
  isCompleted?: boolean
}

export function ColorCell({
  guessColor,
  isRevealing,
  isCompleted,
}: ColorCellProps) {
  const shouldReveal = isRevealing
  const isFilled = !isCompleted

  const animationDelay = `${MAX_WORD_LENGTH * REVEAL_TIME_MS}ms`

  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded-2xl dark:text-white color',
    {
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  const styles = {
    backgroundColor: `#${guessColor}`,
    animationDelay,
  }

  return <div className={classes} style={styles}></div>
}
