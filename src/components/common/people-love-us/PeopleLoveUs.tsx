import Image from 'next/image'
import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/ui/section-header/SectionHeader";
import Marks from "@/components/icons/Marks";
import styles from './PeopleLoveUs.module.css'
import {cards} from "@/data/people-love-us/PeopleLoveUs.data";
import {getInitials} from "@/utils";

export default function PeopleLoveUs() {
    return (
        <Container>
            <SectionHeader
                title='People Loved us!'
                subtitle='With over 10,000 users served. Here’s what they say.'
            />
            <div className={styles.grid}>
                {cards.map((card) => {
                    const sizeClass = card.size === 'large' ? styles.cardLarge : styles.cardSmall
                    if (card.type === 'stats') {
                        const backgroundClass =
                            card.background === 'left'
                                ? styles.statsLeft
                                : styles.statsRight;
                        return (
                            <article
                                key={`${card.value}-${card.label}`}
                                className={`${styles.card} ${styles.statsCard} ${backgroundClass} ${sizeClass}`}
                            >
                                <div className={styles.statsContent}>
                                    <span className={styles.statsValue}>{card.value}</span>
                                    <span className={styles.statsLabel}>{card.label}</span>
                                </div>
                            </article>
                        )
                    }

                    return (
                        <article
                            key={`${card.name}-${card.company}`}
                            className={`${styles.card} ${styles.testimonialCard} ${sizeClass}`}
                        >
                            <Marks className={styles.quoteIcon}/>
                            <p className={styles.testimonialText}>{card.text}</p>
                            <div className={styles.person}>
                                <div className={styles.avatar}>
                                    {card.avatar ? (
                                        <Image
                                            src={card.avatar}
                                            alt={card.name}
                                            className={styles.avatarImage}
                                        />
                                    ) : (
                                        <span className={styles.avatarFallback}>
                                            {getInitials(card.name)}
                                        </span>
                                    )}
                                </div>
                                <div className={styles.personMeta}>
                                    <span className={styles.personName}>{card.name}</span>
                                    <span className={styles.personCompany}>{card.company}</span>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </Container>
    )
}
