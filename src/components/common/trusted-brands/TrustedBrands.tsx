import style from './TrustedBrands.module.css'
import Image from "next/image";
import brands from '@/public/img/brands/trustedBrands.png'

export default function TrustedBrands() {
    return(
        <section>
            <div className={style.container}>
                <h2 className={style.title}>
                    Trusted by top data-driven teams
                </h2>
            </div>

            <div className={style.brands}>
                <Image
                    quality={85}
                    src={brands}
                    alt="Brands"
                />
            </div>
        </section>
    )
}