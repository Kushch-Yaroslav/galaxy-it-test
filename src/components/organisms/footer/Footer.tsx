import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/container/Container'
import Logo from '@/components/ui/logo/Logo'
import twitterIcon from '../../../../public/img/icons/twiter.png'
import linkedinIcon from '../../../../public/img/icons/linkedin.png'
import instagramIcon from '../../../../public/img/icons/insta.png'
import style from './Footer.module.css'

const socialLinks = [
    { href: '#', label: 'X', icon: twitterIcon },
    { href: '#', label: 'LinkedIn', icon: linkedinIcon },
    { href: '#', label: 'Instagram', icon: instagramIcon },
] as const

function Footer() {
    return (
        <footer className={style.footer}>
            <Container>
                <div className={style.inner}>
                    <div className={style.brand}>
                        <Logo href="/#home" />
                    </div>


                    <div className={style.socials} aria-label="Social links">
                        {socialLinks.map(({ href, label, icon }) => (
                            <Link key={label} href={href} className={style.socialLink} aria-label={label}>
                                <Image src={icon} alt="" className={style.socialIcon} />
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
            <p className={style.copy}>© 2025— Copyright</p>
        </footer>
    )
}

export default Footer
