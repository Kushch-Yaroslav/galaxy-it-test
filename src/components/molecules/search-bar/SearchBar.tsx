'use client'

import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SearchIcon } from '@/components/icons'
import style from './SearchBar.module.css'

interface SearchBarProps {
    initialSearchValue?: string
}

export default function SearchBar({ initialSearchValue = '' }: SearchBarProps) {
    const router = useRouter()
    const [value, setValue] = useState(initialSearchValue)

    useEffect(() => {
        setValue(initialSearchValue)
    }, [initialSearchValue])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const trimmedQuery = value.trim()

        if (!trimmedQuery) {
            return
        }

        router.push(`/search?query=${encodeURIComponent(trimmedQuery)}`)
    }

    return (
        <form className={style.searchBar} role="search" onSubmit={handleSubmit}>
            <label className={style.inputWrap}>
                <span className={style.icon} aria-hidden="true">
                    <SearchIcon />
                </span>
                <input
                    type="text"
                    name="search"
                    className={style.input}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder="Search contracts, companies or categories"
                />
            </label>

            <button type="submit" className={style.button}>
                Search
            </button>
        </form>
    )
}
