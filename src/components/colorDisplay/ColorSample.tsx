import classnames from 'classnames'
import * as React from 'react'
import { solution } from '../../lib/words'

export interface IColorSampleProps {
  color: string
}

const classes = classnames(
  'items-center justify-center rounded-md mx-0.5 text-xs font-bold select-none dark:text-white'
)

const styles = {
  width: `${400}px`,
  height: '58px',
  backgroundColor: `#${solution}`,
  borderWidth: '0.15rem',
  borderColor: 'gray',
}

export function ColorSample({ color }: IColorSampleProps) {
  return (
    <div className="flex justify-center mb-4" style={{}}>
      <div className={classes} style={styles}></div>
    </div>
  )
}
