'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './Header.module.css'
import sublogo from '../../../../public/img/icons/sub-logo.svg'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()
    const isSearchPage = pathname.startsWith('/search')
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
                    <Link href="/public" className={style.logo} onClick={closeMenu}>
                        <span className={style.logoIcon}>
                            <Image
                                src={sublogo}
                                alt=""
                                width={24}
                                height={23}
                                className={style.logoSvg}
                            />
                        </span>
                        <h1 className={style.logoText}>TEST TASK</h1>
                    </Link>

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
                        <Link href="/public" onClick={closeMenu}>
                            Home
                        </Link>
                        <Link href="/public" onClick={closeMenu}>
                            How It Works
                        </Link>
                        <Link href="/public" onClick={closeMenu}>
                            Latest Contracts Post
                        </Link>
                        {isSearchPage && (
                            <Link href="/public" onClick={closeMenu}>
                                People Loved us!
                            </Link>
                        )}
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
