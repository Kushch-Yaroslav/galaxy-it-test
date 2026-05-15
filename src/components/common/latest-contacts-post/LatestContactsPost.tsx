import SectionHeader from "@/components/ui/section-header/SectionHeader";
import style from './LatestContactsPost.module.css'
import LatestIcons from '@/components/organisms/latest-icons/LatestIcons'
import ContractsCarousel from '@/components/organisms/contracts-carousel/ContractsCarousel'
import ContractsService from '@/services/contracts.service'

export default async function LatestContactsPost() {
    const contracts = await ContractsService.getContracts()

    return (
        <section className={style.section}>
            <SectionHeader
                title='Latest Contracts Post'
                subtitle='Search and connect with the right companies faster'
            />
            <LatestIcons />
            <div className={style.carouselWrapper}>
                <ContractsCarousel contracts={contracts} />
            </div>
        </section>
    )
}
