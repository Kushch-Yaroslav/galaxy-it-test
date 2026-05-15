import type { ComponentType } from 'react'
import styles from './LatestIcons.module.css'
import {
    Accountancy,
    Banking,
    ContentWriter,
    Digital,
    ItContractor,
    Marketing,
} from 'src/components/icons'

type IconComponentProps = {
    width?: number
    height?: number
    className?: string
    color?: string
}

type ContractCategory = {
    label: string
    icon: ComponentType<IconComponentProps>
    isActive?: boolean
}

const categories: ContractCategory[] = [
    { label: 'I.T Contractor', icon: ItContractor, isActive: true },
    { label: 'Content Writer', icon: ContentWriter },
    { label: 'Accountancy', icon: Accountancy },
    { label: 'Banking', icon: Banking },
    { label: 'Digital & Creative', icon: Digital },
    { label: 'Marketing & Pr', icon: Marketing },
]

export default function LatestIcons() {
    return (
        <ul className={styles.list} aria-label="Contract categories">
            {categories.map(({ label, icon: Icon, isActive }) => (
                <li key={label} className={styles.listItem}>
                    <button
                        type="button"
                        className={`${styles.categoryButton} ${isActive ? styles.categoryButtonActive : ''}`}
                        aria-pressed={isActive ? 'true' : 'false'}
                    >
                        <span className={styles.iconWrap}>
                            <Icon
                                width={42}
                                height={42}
                                className={styles.categoryIcon}
                            />
                        </span>
                        <span className={styles.label}>{label}</span>
                    </button>
                </li>
            ))}
        </ul>
    )
}
