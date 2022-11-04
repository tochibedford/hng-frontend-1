import styles from '../../styles/Contact.module.scss'

export default function Contact() {
    return (
        <>
            <header role="heading" className={styles.page__title__container}>
                <h1 className={styles.page__title}>Contact Me</h1>
                <h2 className={styles.page__subtitle}>Hi there, contact me to ask me about anything you have in mind.</h2>
            </header>
            <main role="main">
                <form action="">
                    <label htmlFor="first_name">
                        First name
                        <input id="first_name" type="text" name="first_name"/>
                    </label>
                    <label htmlFor="last_name">
                        Last name
                        <input id="last_name" type="text" name="last_name"/>
                    </label>
                    <label htmlFor="email">
                        Email
                        <input id="email" type="email" name="email"/>
                    </label>
                    <label htmlFor="message">
                        Message
                        <textarea id="message" name="message"></textarea>
                    </label>
                    <label htmlFor='privacy_agreement'>
                        <input type="checkbox" name="privacy_agreement"/>
                        You agree to providing your data to {name} who may contact you.
                    </label>
                    <button id="btn__submit" type='submit'>
                        Send message
                    </button>
                </form>
            </main>
        </>
    )
}