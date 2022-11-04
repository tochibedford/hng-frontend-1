import { useState } from 'react'
import styles from '../../styles/Contact.module.scss'

export default function Contact() {
    const [formInputs, setFormInputs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
        privacy_agreement: false
    })

    const handleInputChange = (event)=>{
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        setFormInputs(prevState=>{
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleBlur = (event) => {
        const target = event.target
        target.classList.add(styles.visited)
    }
    return (
        <>
            <header role="heading" className={styles.page__title__container}>
                <h1 className={styles.page__title}>Contact Me</h1>
                <h2 className={styles.page__subtitle}>Hi there, contact me to ask me about anything you have in mind.</h2>
            </header>
            <main role="main" className={styles.contact__form__container}>
                <form action="" className={styles.contact__form}>
                    <div className={styles.form__name}>
                        <label htmlFor="first_name" className={styles.input__tip}>
                            First name
                            <input id="first_name" value={formInputs.first_name} onChange={handleInputChange} type="text" placeholder='Enter your first name' name="first_name" required onBlur={handleBlur}/>
                        </label>
                        <label htmlFor="last_name" className={styles.input__tip}>
                            Last name
                            <input id="last_name" value={formInputs.last_name} onChange={handleInputChange} type="text" placeholder='Enter your last name' name="last_name" required onBlur={handleBlur}/>
                        </label>
                    </div>
                    <label htmlFor="email" className={styles.input__tip}>
                        Email
                        <input id="email" value={formInputs.email} onChange={handleInputChange} type="email" placeholder='yourname@email.com' name="email" required onBlur={handleBlur}/>
                    </label>
                    <label htmlFor="message" className={styles.input__tip}>
                        Message
                        <textarea id="message"   value={formInputs.message} onChange={handleInputChange} name="message" rows={4} placeholder="Send me a message and I'll reply you as soon as possible..." required onBlur={handleBlur}></textarea>
                    </label>
                    <label htmlFor='privacy_agreement'>
                        <input value={formInputs.privacy_agreement} onChange={handleInputChange} type="checkbox" name="privacy_agreement" />
                        <span className={styles.checkmark}></span>
                        You agree to providing your data to Tochukwu Bedford who may contact you.
                    </label>
                    {formInputs.privacy_agreement ?
                        <button id="btn__submit" className={styles.btn__submit} type='submit'>
                            Send message
                        </button> :
                        <button id="btn__submit" className={styles.btn__submit} type='submit' disabled>
                            Send message
                        </button>
                    }

                </form>
            </main>
        </>
    )
}