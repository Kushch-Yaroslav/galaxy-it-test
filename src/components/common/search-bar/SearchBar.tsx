import { SearchIcon } from '@/components/icons'
import style from './SearchBar.module.css'

export default function SearchBar() {
    return (
        <div className={style.searchBar} role="search">
            <label className={style.inputWrap}>
                <span className={style.icon} aria-hidden="true">
                    <SearchIcon />
                </span>
                <input
                    type="text"
                    name="search"
                    className={style.input}
                />
            </label>

            <button type="button" className={style.button}>
                Search
            </button>
        </div>
    )
}
