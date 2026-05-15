import SectionHeader from "@/components/ui/section-header/SectionHeader";
import style from './LatestContactsPost.module.css'
import LatestIcons from '@/components/molecules/latest-icons/LatestIcons'
import ContractsCarousel from '@/components/organisms/contracts-carousel/ContractsCarousel'
import ContractsGrid from '@/components/organisms/contracts-grid/ContractsGrid'
import ContractsService from '@/services/contracts.service'
import type { Contract } from '@/types'

type LatestContactsPostProps = {
    contracts?: Contract[]
    variant?: 'default' | 'search'
    searchQuery?: string
}

export default async function LatestContactsPost({
    contracts,
    variant = 'default',
    searchQuery = '',
}: LatestContactsPostProps) {
    const resolvedContracts = contracts ?? await ContractsService.getContracts()
    const trimmedQuery = searchQuery.trim()
    const subtitle =
        variant === 'search'
            ? (trimmedQuery ? `Results for "${trimmedQuery}"` : undefined)
            : 'Search and connect with the right companies faster'
    const title = variant === 'search' ? 'Search Result' : 'Latest Contracts Post'
    const isSearchVariant = variant === 'search'

    return (
        <section id="latest-contracts-post" className={style.section}>
            <SectionHeader
                title={title}
                subtitle={subtitle}
            />
            {!isSearchVariant ? <LatestIcons /> : null}

            {isSearchVariant ? (
                resolvedContracts.length > 0 ? (
                    <div className={style.gridWrapper}>
                        <ContractsGrid contracts={resolvedContracts} />
                    </div>
                ) : (
                    <div className={style.emptyState}>No contracts found</div>
                )
            ) : (
                <div className={style.carouselWrapper}>
                    <ContractsCarousel contracts={resolvedContracts} />
                </div>
            )}
        </section>
    )
}
