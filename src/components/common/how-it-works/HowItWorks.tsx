import Image from 'next/image'
import SectionHeader from '@/components/ui/section-header/SectionHeader'
import Container from '@/components/ui/container/Container'
import style from './HowItWorks.module.css'
import step1Image from '../../../../public/img/card/step1.png'
import step2Image from '../../../../public/img/card/step2.png'
import step3Image from '../../../../public/img/card/step3.png'

const cards = [
    {
        step: 'Step 1',
        title: 'Search Contracts',
        description:
            'Search for other Business owners or individuals looking to create a contract or agreement.',
        image: step1Image,
        textWidth: 220,
    },
    {
        step: 'Step 2',
        title: 'Apply For Agreement',
        description:
            'Establish what you and your party want to get out of this agreement.',
        image: step2Image,
        textWidth: 200,
    },
    {
        step: 'Step 3',
        title: 'Agreement period',
        description:
            'Determine the length of your contract. All contracts can be saved to be reused.',
        image: step3Image,
        textWidth: 205,
    },
] as const

export default function HowItWorks() {
    return (
        <section id="how-it-works">
            <Container>
                <SectionHeader
                    title='How It Works'
                    subtitle='Search and connect with the right companies faster'
                />
                <div className={style.cardWrapper}>
                    {cards.map((card) => (
                        <article className={style.card} key={card.step}>
                            <Image
                                src={card.image}
                                alt={card.title}
                                className={style.cardImage}
                                loading="lazy"
                            />
                            <div className={style.cardOverlay} />
                            <div className={style.cardContent}>
                                <span className={style.step}>{card.step}</span>
                                <h3 className={style.cardTitle}>{card.title}</h3>
                                <p
                                    className={style.cardDescription}
                                    style={{ maxWidth: card.textWidth }}
                                >
                                    {card.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    )
}
