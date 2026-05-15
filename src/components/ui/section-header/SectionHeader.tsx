import style from './SectionHeader.module.css'

type SectionHeaderProps = {
    title: string
    subtitle?: string
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <>
            <h2 className={style.title}>{title}</h2>
            {subtitle ? <span className={style.subtitle}>{subtitle}</span> : null}
        </>
    )
}

export default SectionHeader
