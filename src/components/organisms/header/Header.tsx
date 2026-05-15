'use client'

import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import style from './Header.module.css'
import Logo from '@/components/ui/logo/Logo'

const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#latest-contracts-post', label: 'Latest Contracts Post' },
    { href: '/#people-loved-us', label: 'People Loved us!' },
] as const

const PENDING_SCROLL_KEY = 'pending-home-scroll-target'

export default function Header() {
    const pathname = usePathname()
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => setIsMenuOpen(false)

    useEffect(() => {
        if (pathname !== '/') {
            return
        }

        const targetId = window.sessionStorage.getItem(PENDING_SCROLL_KEY)

        if (!targetId) {
            return
        }

        window.sessionStorage.removeItem(PENDING_SCROLL_KEY)
        window.history.replaceState(null, '', targetId === 'home' ? '/' : `/#${targetId}`)
        window.scrollTo({ top: 0, behavior: 'auto' })

        if (targetId === 'home') {
            return
        }

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const element = document.getElementById(targetId)

                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            })
        })
    }, [pathname])

    const navigateToSection = (targetId: string) => {
        closeMenu()

        if (pathname === '/') {
            window.history.replaceState(null, '', targetId === 'home' ? '/' : `/#${targetId}`)

            if (targetId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                return
            }

            const element = document.getElementById(targetId)

            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }

            return
        }

        window.sessionStorage.setItem(PENDING_SCROLL_KEY, targetId)
        router.push('/')
    }

    const handleNavClick = (
        event: MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        const [, hash = 'home'] = href.split('#')

        event.preventDefault()
        navigateToSection(hash)
    }

    return (
        <>
            {isMenuOpen && (
                <button
                    type="button"
                    className={style.overlay}
                    aria-label="Close menu"
                    onClick={closeMenu}
                />
            )}

            <header className={style.header}>
                <div className={style.topRow}>
                    <Logo
                        href="/#home"
                        onClick={(event) => {
                            event.preventDefault()
                            navigateToSection('home')
                        }}
                    />

                    <button
                        type="button"
                        className={style.menuToggle}
                        aria-expanded={isMenuOpen}
                        aria-controls="header-menu"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        onClick={() => setIsMenuOpen((value) => !value)}
                    >
                        <span className={style.menuLine} />
                        <span className={style.menuLine} />
                        <span className={style.menuLine} />
                    </button>
                </div>

                <div
                    id="header-menu"
                    className={`${style.menuPanel} ${isMenuOpen ? style.menuPanelOpen : ''}`}
                >
                    <nav className={style.nav}>
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={(event) => handleNavClick(event, href)}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className={style.actions}>
                        <Link href="/login" className={style.login} onClick={closeMenu}>
                            Login
                        </Link>
                        <Link href="/signup" className={style.signUp} onClick={closeMenu}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}
