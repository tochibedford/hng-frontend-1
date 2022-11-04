import styles from '../../styles/Contact.module.scss'

export default function Contact() {
    return (
        <>
            <header role="heading" className={styles.page__title__container}>
                <h1 className={styles.page__title}>Contact Me</h1>
                <h2 className={styles.page__subtitle}>Hi there, contact me to ask me about anything you have in mind.</h2>
            </header>
        </>
    )
}