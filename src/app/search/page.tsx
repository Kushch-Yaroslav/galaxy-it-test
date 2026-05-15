import Hero from '@/components/common/hero/Hero'
import LatestContactsPost from '@/components/common/latest-contacts-post/LatestContactsPost'
import ContractsService from '@/services/contracts.service'
import styles from './SearchPage.module.css'
import Container from "@/components/ui/container/Container";

interface SearchPageProps {
    searchParams?: {
        query?: string
    }
}

export default async function SearchPage({searchParams}: SearchPageProps) {
    const query = searchParams?.query?.trim() || ''
    const contracts = query ? await ContractsService.searchContracts(query) : []

    return (
        <section className={styles.wrapper}>
            <Hero initialSearchValue={query}/>
            <Container>
                <LatestContactsPost
                    variant="search"
                    searchQuery={query}
                    contracts={contracts}
                />
            </Container>
        </section>
    )
}
