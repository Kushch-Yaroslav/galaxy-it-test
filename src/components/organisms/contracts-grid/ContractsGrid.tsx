import type { Contract } from '@/types'
import ContractCard from '@/components/molecules/contract-card/ContractCard'
import styles from './ContractsGrid.module.css'

interface ContractsGridProps {
    contracts: Contract[]
}

export default function ContractsGrid({ contracts }: ContractsGridProps) {
    return (
        <div className={styles.grid}>
            {contracts.map((contract) => (
                <div key={contract.id} className={styles.item}>
                    <ContractCard contract={contract} />
                </div>
            ))}
        </div>
    )
}
