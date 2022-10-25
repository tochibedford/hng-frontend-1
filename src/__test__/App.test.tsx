import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from '../App'

describe('The Profile Section', ()=>{
    test("Has a profile picture with an id #profile__img", ()=>{
        render(<App />)
        
        expect(screen.queryByRole("heading")?.querySelector("#profile__img")).not.toBeNull()
        
    })
    
    test("Has a twitter username with an id #twitter", ()=>{
        render(<App />)
        expect(screen.queryByRole("heading")?.querySelector("#twitter")).not.toBeNull()
        expect(screen.queryByRole("heading")?.querySelector("#twitter")?.textContent === 'Tochibedford').toBeTruthy()
    })

    test('Your slack name with an id #slack - but this should be hidden (available in code, but cannot be seen)', ()=>{
        render(<App />)

        const slack = screen.queryByRole("heading")?.querySelector("#slack") as HTMLDivElement | null
        expect(slack).not.toBeNull()
        expect( slack?.hidden ).toBeTruthy()
    })
})

describe('The Links Section', ()=>{
    test("Has A Link styled as a Button with an id #btn__zuri that redirects to https://training.zuri.team/", ()=>{
        render(<App />)

        const zuriLink = screen.getByRole("main").querySelector("#btn__zuri") as HTMLLinkElement
        expect(screen.getByRole("main")).not.toBeNull()
        expect(zuriLink).not.toBeNull()
        expect(zuriLink.href).toBe("https://training.zuri.team/")
    })
    
    test("A Link styled as a Button with an id ‘books’ that redirects to http://books.zuri.team", ()=>{
        render(<App />)

        const zuriLink = screen.getByRole("main").querySelector("#books") as HTMLLinkElement
        expect(screen.getByRole("main")).not.toBeNull()
        expect(zuriLink).not.toBeNull()
        console.log(zuriLink.href)
        expect(zuriLink.href).toBe("https://books.zuri.team/")
    })

    test("A Link styled as a Button with an id #book__python that redirects to to https://books.zuri.team/python-for-beginners?ref_id=tochibedford", ()=>{
        render(<App />)

        const zuriLink = screen.getByRole("main").querySelector("#book__python") as HTMLLinkElement
        expect(screen.getByRole("main")).not.toBeNull()
        expect(zuriLink).not.toBeNull()
        console.log(zuriLink.href)
        expect(zuriLink.href).toBe("https://books.zuri.team/python-for-beginners?ref_id=tochibedford")
    })
    
    test("A Link styled as a Button with an id #pitch that redirects to to https://background.zuri.team", ()=>{
        render(<App />)

        const zuriLink = screen.getByRole("main").querySelector("#pitch") as HTMLLinkElement
        expect(screen.getByRole("main")).not.toBeNull()
        expect(zuriLink).not.toBeNull()
        console.log(zuriLink.href)
        expect(zuriLink.href).toBe("https://background.zuri.team/")
    })

    test("A Link styles as a Button with an id #book__design that redirects to to https://books.zuri.team/design-rules", ()=>{
        render(<App />)

        const zuriLink = screen.getByRole("main").querySelector("#book__design") as HTMLLinkElement
        expect(screen.getByRole("main")).not.toBeNull()
        expect(zuriLink).not.toBeNull()
        console.log(zuriLink.href)
        expect(zuriLink.href).toBe("https://books.zuri.team/design-rules")
    })
})