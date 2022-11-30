import { FC, HTMLProps, PropsWithChildren } from 'react'
import styles from './PixelButton.module.scss'

type ButtonProps = FC<PropsWithChildren & HTMLProps<HTMLButtonElement>>

const PixelButton: ButtonProps = ({ children, ...props }) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={styles.pixelButton}
      aria-label={props['aria-label']}
    >
      {children}
    </button>
  )
}

export default PixelButton
