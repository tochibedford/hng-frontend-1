import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from '../App.jsx'
import { MemoryRouter } from 'react-router-dom'

describe('The Profile Section', ()=>{
    test("Has a profile picture with an id #profile__img", ()=>{
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        
        expect(screen.queryByRole("heading")?.querySelector("#profile__img")).not.toBeNull()
        
    })
    
    test("Has a twitter username with an id #twitter", ()=>{
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        expect(screen.queryByRole("heading")?.querySelector("#twitter")).not.toBeNull()
        expect(screen.queryByRole("heading")?.querySelector("#twitter")?.textContent === 'Tochibedford').toBeTruthy()
    })

    test('Your slack name with an id #slack - but this should be hidden (available in code, but cannot be seen)', ()=>{
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )

        const slack = screen.queryByRole("heading")?.querySelector("#slack")
        expect(slack).not.toBeNull()
        expect( slack?.hidden ).toBeTruthy()
    })
})

describe('The Links Section', ()=>{
    test("Has A Link styled as a Button with an id #btn__zuri that redirects to https://training.zuri.team/", ()=>{
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )

        const zuriLink = screen.getByRole("main").querySelector("#btn__zuri")
        expect(screen.getByRole("main")).not.toBeNull()
        expect(zuriLink).not.toBeNull()
        expect(zuriLink.href).toBe("https://training.zuri.team/")
    })
    
    test("A Link styled as a Button with an id `books` that redirects to http://books.zuri.team", ()=>{
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )

        const zuriLink = screen.getByRole("main").querySelector("#books")
        expect(screen.getByRole("main")).not.toBeNull()
        expect(zuriLink).not.toBeNull()
        console.log(zuriLink.href)
        expect(zuriLink.href).toBe("https://books.zuri.team/")
    })

    test("A Link styled as a Button with an id #book__python that redirects to to https://books.zuri.team/python-for-beginners?ref_id=tochibedford", ()=>{
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )

        const zuriLink = screen.getByRole("main").querySelector("#book__python")
        expect(screen.getByRole("main")).not.toBeNull()
        expect(zuriLink).not.toBeNull()
        console.log(zuriLink.href)
        expect(zuriLink.href).toBe("https://books.zuri.team/python-for-beginners?ref_id=tochibedford")
    })
    
    test("A Link styled as a Button with an id #pitch that redirects to to https://background.zuri.team", ()=>{
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )

        const zuriLink = screen.getByRole("main").querySelector("#pitch")
        expect(screen.getByRole("main")).not.toBeNull()
        expect(zuriLink).not.toBeNull()
        console.log(zuriLink.href)
        expect(zuriLink.href).toBe("https://background.zuri.team/")
    })

    test("A Link styles as a Button with an id #book__design that redirects to to https://books.zuri.team/design-rules", ()=>{
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )

        const zuriLink = screen.getByRole("main").querySelector("#book__design")
        expect(screen.getByRole("main")).not.toBeNull()
        expect(zuriLink).not.toBeNull()
        console.log(zuriLink.href)
        expect(zuriLink.href).toBe("https://books.zuri.team/design-rules")
    })
})