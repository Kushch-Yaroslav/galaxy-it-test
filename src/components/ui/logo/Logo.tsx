import Image from 'next/image'
import Link from 'next/link'
import sublogo from '../../../../public/img/icons/sub-logo.svg'
import style from './Logo.module.css'

type LogoProps = {
    href: string
    onClick?: () => void
}

function Logo({ href, onClick }: LogoProps) {
    return (
        <Link href={href} className={style.logo} onClick={onClick}>
            <span className={style.logoIcon}>
                <Image
                    src={sublogo}
                    alt=""
                    width={24}
                    height={23}
                    className={style.logoSvg}
                />
            </span>
            <h2 className={style.logoText}>TEST TASK</h2>
        </Link>
    )
}

export default Logo
