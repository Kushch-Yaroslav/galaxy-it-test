'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { Contract } from '@/types'
import ContractCard from '@/components/molecules/contract-card/ContractCard'
import styles from './ContractsCarousel.module.css'

interface ContractsCarouselProps {
    contracts: Contract[]
}

export default function ContractsCarousel({ contracts }: ContractsCarouselProps) {
    const trackRef = useRef<HTMLDivElement | null>(null)
    const dragStateRef = useRef({ startX: 0, scrollLeft: 0, pointerId: -1 })
    const velocityRef = useRef(0)
    const lastPointerXRef = useRef(0)
    const lastFrameTimeRef = useRef(0)
    const rafRef = useRef<number | null>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [isMomentum, setIsMomentum] = useState(false)

    const normalizedContracts = useMemo(
        () =>
            contracts.flatMap((contract) =>
                Array.isArray(contract) ? contract : [contract]
            ) as Contract[],
        [contracts]
    )

    const stopMomentum = () => {
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current)
            rafRef.current = null
        }

        setIsMomentum(false)
    }

    const runMomentum = () => {
        if (!trackRef.current) {
            return
        }

        stopMomentum()
        setIsMomentum(true)

        const step = () => {
            if (!trackRef.current || Math.abs(velocityRef.current) < 0.15) {
                stopMomentum()
                return
            }

            trackRef.current.scrollLeft -= velocityRef.current
            velocityRef.current *= 0.95
            rafRef.current = requestAnimationFrame(step)
        }

        rafRef.current = requestAnimationFrame(step)
    }

    useEffect(() => () => stopMomentum(), [])

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        if (!trackRef.current) {
            return
        }

        stopMomentum()
        setIsDragging(true)

        trackRef.current.setPointerCapture(event.pointerId)
        dragStateRef.current = {
            startX: event.clientX,
            scrollLeft: trackRef.current.scrollLeft,
            pointerId: event.pointerId,
        }
        velocityRef.current = 0
        lastPointerXRef.current = event.clientX
        lastFrameTimeRef.current = performance.now()
    }

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging || !trackRef.current) {
            return
        }

        event.preventDefault()
        const deltaX = event.clientX - dragStateRef.current.startX
        trackRef.current.scrollLeft = dragStateRef.current.scrollLeft - deltaX

        const now = performance.now()
        const moveX = event.clientX - lastPointerXRef.current
        const deltaTime = Math.max(now - lastFrameTimeRef.current, 1)
        const nextVelocity = moveX / deltaTime

        velocityRef.current = (velocityRef.current * 0.7) + (nextVelocity * 16 * 0.3)
        lastPointerXRef.current = event.clientX
        lastFrameTimeRef.current = now
    }

    const stopDragging = (pointerId?: number) => {
        if (!isDragging) {
            return
        }

        if (
            trackRef.current &&
            typeof pointerId === 'number' &&
            trackRef.current.hasPointerCapture(pointerId)
        ) {
            trackRef.current.releasePointerCapture(pointerId)
        }

        setIsDragging(false)
        runMomentum()
    }

    return (
        <div
            ref={trackRef}
            className={`${styles.carousel} ${isDragging ? styles.isDragging : ''} ${isMomentum ? styles.isMomentum : ''}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={(event) => stopDragging(event.pointerId)}
            onPointerCancel={(event) => stopDragging(event.pointerId)}
        >
            {normalizedContracts.map((contract) => (
                <div key={contract.id} className={styles.slide}>
                    <ContractCard contract={contract} />
                </div>
            ))}
        </div>
    )
}
