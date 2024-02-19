import { type DropdownDirection } from './types'
import styles from '../styles/Popups.module.scss'

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': styles.itemsBottomLeft,
    'bottom right': styles.itemsBottomRight,
    'top right': styles.itemsTopRight,
    'top left': styles.itemsTopLeft
}
