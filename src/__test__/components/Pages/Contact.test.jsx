import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../../../App'
import Contact from '../../../components/Pages/Contact'
import { MemoryRouter } from 'react-router-dom'

describe('New Button to go to contact page', ()=>{
    test("Add another anchor tag styled as a Button with an id of 'contact' that redirects to “/contact” page in your app.", ()=>{
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        
        const contactLink = screen.getByRole("main").querySelector("#contact")
        expect(screen.getByRole("main")).not.toBeNull()
        expect(contactLink).not.toBeNull()
        expect(contactLink.href.slice(-8)).toBe("/contact") //check if link ends with /contact
    })
})

describe('On contact page check that it has the correct elements and ids rendered', ()=>{
    test("A First and last name input fields with ids 'first_name' and 'last_name' respectively", ()=>{
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        )

        const first_name = screen.getByRole("main").querySelector("#first_name")
        const last_name = screen.getByRole("main").querySelector("#last_name")
        expect(first_name).toBeInTheDocument()
        expect(last_name).toBeInTheDocument()
    })

    test("An Email address input field with an id of 'email'", ()=>{
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        )

        const email = screen.getByRole("main").querySelector("label[for='email']").querySelector("#email")
        expect(email).toBeInTheDocument()
        expect(email.getAttribute("id")).toBe("email")
    })

    test("A Textarea with an id of 'message' to contain the message of the person", ()=>{
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        )

        const message = screen.getByRole("main").querySelector("label[for='message']").querySelector("#message")
        expect(message).toBeInTheDocument()
        expect(message.getAttribute("id")).toBe("message")
    })

    test("A button with an id of 'btn__submit' that will submit the form", ()=>{
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        )

        const submit = screen.getByRole("main").querySelector("button")
        expect(submit).toBeInTheDocument()
        expect(submit.getAttribute("id")).toBe("btn__submit")
    })
})