import SearchBar from '@/components/common/search-bar/SearchBar'
import style from './Hero.module.css'

export default function Hero() {
    return (
        <section className={style.hero}>
            <div className={style.overlay} />
            <div className={style.content}>
                <h2 className={style.title}>Run Your Business</h2>
                <p className={style.subtitle}>
                    Find better suppliers. Secure real contracts. Build lasting partnerships.
                </p>
                <SearchBar />
                <p className={style.caption}>480.000+ Available Contracts Listed</p>
            </div>
        </section>
    )
}
