'use client'

import { useState } from 'react'
import Link from 'next/link'
import style from './Header.module.css'
import Logo from '@/components/ui/logo/Logo'

const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#latest-contracts-post', label: 'Latest Contracts Post' },
    { href: '/#people-loved-us', label: 'People Loved us!' },
] as const

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => setIsMenuOpen(false)

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
                    <Logo href="/#home" onClick={closeMenu} />

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
                            <Link key={href} href={href} onClick={closeMenu}>
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
