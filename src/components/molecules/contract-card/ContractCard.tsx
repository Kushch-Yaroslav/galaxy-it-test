'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Contract } from '@/types'
import ArrowButton from '@/components/icons/ArrowButton'
import ClockIcon from '@/components/icons/ClockIcon'
import styles from './ContractCard.module.css'

interface ContractCardProps {
    contract: Contract
}

function isVerifiedTag(tag: string) {
    return tag.toLowerCase() === 'verified'
}

export default function ContractCard({ contract }: ContractCardProps) {
    const [hasLogoError, setHasLogoError] = useState(false)

    return (
        <article className={styles.card}>
            <div className={styles.logoWrap}>
                {!hasLogoError ? (
                    <Image
                        src={contract.image}
                        alt={contract.company}
                        width={100}
                        height={36}
                        className={styles.logo}
                        unoptimized
                        onError={() => setHasLogoError(true)}
                    />
                ) : (
                    <span className={styles.logoFallback}>{contract.company}</span>
                )}
            </div>

            <h3 className={styles.title}>{contract.title}</h3>
            <p className={styles.budget}>{contract.budget}</p>

            <div className={styles.duration}>
                <ClockIcon className={styles.clock} />
                <span>{contract.duration}</span>
            </div>

            <div className={styles.tags}>
                {contract.tags.map((tag) => (
                    <span
                        key={tag}
                        className={`${styles.tag} ${isVerifiedTag(tag) ? styles.tagVerified : styles.tagDefault}`}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <p className={styles.description}>{contract.description}</p>

            <div className={styles.arrow}>
                <ArrowButton width={92} height={92} />
            </div>
        </article>
    )
}
