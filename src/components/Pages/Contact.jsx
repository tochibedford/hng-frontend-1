import { useState } from 'react'
import styles from '../../styles/Contact.module.scss'

export default function Contact() {
    const formDefaults = {
        first_name: '',
        last_name: '',
        email: '',
        message: '',
        privacy_agreement: false
    }

    const [formInputs, setFormInputs] = useState({
        ...formDefaults
    })

    const handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        setFormInputs(prevState => {
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

    const handleSubmit = (e)=>{ // till a decision is made on what to on with form submission, this manually resets the form state
        e.preventDefault()
        document.querySelector("#first_name").classList.remove(styles.visited)
        document.querySelector("#last_name").classList.remove(styles.visited)
        document.querySelector("#email").classList.remove(styles.visited)
        document.querySelector("#message").classList.remove(styles.visited)
        setFormInputs(prevState=>{
            return formDefaults
        })
    }

    return (
        <>
            <header role="heading" className={styles.page__title__container}>
                <h1 className={styles.page__title}>Contact Me</h1>
                <h2 className={styles.page__subtitle}>Hi there, contact me to ask me about anything you have in mind.</h2>
            </header>
            <main role="main" className={styles.contact__form__container}>
                <form className={styles.contact__form} action="/" onSubmit={handleSubmit} >
                    <div className={styles.form__name}>
                        <label htmlFor="first_name" className={styles.input__tip}>
                            First name
                            <input id="first_name" value={formInputs.first_name} onChange={handleInputChange} type="text" placeholder='Enter your first name' name="first_name" required onBlur={handleBlur} />
                            <span className={styles.error__tip}>Please enter your first name</span>
                        </label>
                        <label htmlFor="last_name" className={styles.input__tip}>
                            Last name
                            <input id="last_name" value={formInputs.last_name} onChange={handleInputChange} type="text" placeholder='Enter your last name' name="last_name" required onBlur={handleBlur} />
                            <span className={styles.error__tip}>Please enter your last name</span>
                        </label>
                    </div>
                    <label htmlFor="email" className={styles.input__tip}>
                        Email
                        <input id="email" value={formInputs.email} onChange={handleInputChange} type="email" placeholder='yourname@email.com' name="email" required onBlur={handleBlur} />
                        <span className={styles.error__tip}>Please enter a valid email</span>
                    </label>
                    <label htmlFor="message" className={styles.input__tip}>
                        Message
                        <textarea id="message" value={formInputs.message} onChange={handleInputChange} name="message" rows={4} placeholder="Send me a message and I'll reply you as soon as possible..." required onBlur={handleBlur}></textarea>
                        <span className={styles.error__tip}>The message cannot be empty</span>
                    </label>
                    <label htmlFor='privacy_agreement'>
                        <input value={formInputs.privacy_agreement} onChange={handleInputChange} type="checkbox" name="privacy_agreement" required />
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