import style from './Container.module.css'

type ContainerProps = {
    children: React.ReactNode
}

function Container({children}: ContainerProps) {
    return (
        <section className={style.container}>
            {children}
        </section>
    )
}

export default Container