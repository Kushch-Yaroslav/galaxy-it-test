import style from './Hero.module.css'
import SearchBar from "@/components/molecules/search-bar/SearchBar";

export default function Hero() {
    return (
        <section id="home" className={style.hero}>
            <div className={style.overlay} />
            <div className={style.content}>
                <h1 className={style.title}>Run Your Business</h1>
                <p className={style.subtitle}>
                    Find better suppliers. Secure real contracts. Build lasting partnerships.
                </p>
                <SearchBar />
                <p className={style.caption}>480.000+ Available Contracts Listed</p>
            </div>
        </section>
    )
}
