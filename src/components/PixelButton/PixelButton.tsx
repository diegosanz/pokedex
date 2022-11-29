import { FC, HTMLProps, PropsWithChildren } from 'react'
import styles from './PixelButton.module.scss'

type ButtonProps = FC<PropsWithChildren & HTMLProps<HTMLButtonElement>>

const PixelButton: ButtonProps = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.pixelButton}
    >
      {children}
    </button>
  )
}

export default PixelButton
