import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen } from '@testing-library/react'
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../utils/test-utils'
import Post from '../components/post/Post'
import { MemoryRouter } from 'react-router-dom'
import store from '../store'

export const handlers = [
    rest.get(`${process.env.REACT_APP_API_URL}/api/db/getUniquePost`, (req, res, ctx) => {
        const response = {
            "_id": "62d88b487686e00d2b9c8081",
            "title": "Renouveau de mon baba !",
            "content": "Bonjour à tous et bienvenue sur mon tout nouveau site !\n\n![image](/static/media/blog_default.6ce6565ea1b750eef324.png)\n\nCe site fait suite à mon précédent site web (disponible sur [Projet GitHub mohamed.chamrouk.fr](https://github.com/mohamed-chamrouk/mohamed.chamrouk.fr)) et vient ajouter la nouveauté d'une stack complète JavaScript.\nL'architecture se présente comme suit :\n\n- FrontEnd : JavaScript (ReactJS)\n- Backend : JavaScript (ExpressJS)\n- Database : MongoDB\n\nComme vous pouvez sûrement le constater, le site est encore en construction (entre autre les onglets en haut  &uarr;). Comme pour la première version de mon blog, je décrierai ici mes différents projets centrés essentiellement sur le développement web avec sûrement certains posts sur d'autres passions (notamment l'édition photo/le design)\n\nPour ne pas changer ce qui était déjà une bonne chose sur le premier projet, ce projet est open-source et disponible dans son entièreté sur [GitHub](https://github.com/mohamed-chamrouk/blog_mohamed-chamrouk).\n\nPlusieurs projets sont prévus pour la suite de mon aventure dans le développement web, sans ordre particulier :\n\n- Finir le site web\n- Traduire les projets précédemment présents sur l'ancien blog\n- ...", "hidden": true, "pinned": true, "tags": ["DEVELOPPEMENT"], "postTime": "19/07/2022", "author": "Mohamed Chamrouk", "description": "Mon tout nouveau site.\nDescription technologique avec quelques détails et projets futurs."
        }
        return res(ctx.json([{ 'id': response._id, ...response }]), ctx.delay(150))
    })
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())


test('Displaying one post', async () => {
    renderWithProviders(<MemoryRouter><Post id="62d88b487686e00d2b9c8081"/></MemoryRouter>, {store:store})
    
    expect(await screen.findByText('Renouveau de mon baba !')).toBeInTheDocument()
})