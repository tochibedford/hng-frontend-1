import styles from '../../styles/Contact.module.scss'

export default function Contact() {
    return (
        <>
            <header role="heading" className={styles.page__title__container}>
                <h1 className={styles.page__title}>Contact Me</h1>
                <h2 className={styles.page__subtitle}>Hi there, contact me to ask me about anything you have in mind.</h2>
            </header>
            <main role="main" className={styles.contact__form__container}>
                <form action="" className={styles.contact__form}>
                    <div className={styles.form__name}>
                        <label htmlFor="first_name">
                            First name
                            <input id="first_name" type="text" placeholder='Enter your first name' name="first_name" required/>
                        </label>
                        <label htmlFor="last_name">
                            Last name
                            <input id="last_name" type="text" placeholder='Enter your last name' name="last_name" required/>
                        </label>
                    </div>
                    <label htmlFor="email">
                        Email
                        <input id="email" type="email" placeholder='yourname@email.com' name="email" required/>
                    </label>
                    <label htmlFor="message">
                        Message
                        <textarea id="message" name="message" rows={4} placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
                    </label>
                    <label htmlFor='privacy_agreement'>
                        <input type="checkbox" name="privacy_agreement"/>
                        You agree to providing your data to Tochukwu Bedford who may contact you.
                    </label>
                    <button id="btn__submit" className={styles.btn__submit} type='submit'>
                        Send message
                    </button>
                </form>
            </main>
        </>
    )
}