import React from "react"

import ReactMarkdown from "react-markdown"

import {MailIcon} from '@heroicons/react/outline'
import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'

function About() {
    const education = [
        {
            name: "Télécom SudParis",
            field: "Sciences du Numérique",
            spec: "Spécialité Réseaux Informatiques",
            year: "2019 - Présent",
            image: "logo_tsp.png"
        },
        {
            name: "Lycée Dhuoda",
            field: "Classe Préparatoire aux Grandes Ecoles",
            spec: "Physique et Technologie",
            year: "2017 - 2019",
            image: "logo_dhuoda.png"
        }
    ]

    const projets = [
        {
            name: "mohamed.chamrouk.fr",
            description: "Première version de mon blog personnel",
            tech: "Backend: Flask (Python) Frontend: HTML & CSS Database: PostgreSQL",
            image: "logo.svg"
        },
        {
            name: "stotify",
            description: "Application de tracking des statistiques d'écoute personnelles Spotify",
            tech: "Backend: ExpressJS (JavaScript) Frontend: ReactJS (JavaScript) atabase: MongoDB",
            image: "stotify.svg"
        },
        {
            name: "mohamed.chamrouk.fr",
            description: "Deuxième version de mon blog personnel",
            tech: "Backend: ExpressJS (JavaScript) Frontend: ReactJS (JavaScript) Database: MongoDB",
            image: "logo.svg"
        }
    ]

    const jobs = [
        {
            name: "Responsable Communication",
            company: "Minet (Association étudiante)",
            description: "Membre du bureau de l’association MiNET en tant que responsable communication et chargé de maintenir le réseaux de plus de 600 adhérents.",
            year: "2019-2020",
            image: "minet.png"
        },
        {
            name: "Stagiaire",
            company: "Maisel SudParis (association de logements étudiants)",
            description: "Remplacement et reconfiguration de la totalité des équipements WiFi d'un bâtiment de la Maisel SudParis.",
            year: "2020",
            image: "maisel.png"
        },
        {
            name: "Stagiaire",
            company: "Télécom SudParis",
            description: "Réalisation d’un cluster de Jetson Nano pour une utilisation en machine learning (TensorFlow & PyTorch)",
            year: "2021",
            image: "logo_tsp.png"
        },
        {
            name: "Alternance Architecte Avant-Vente Infrastructures IP",
            company: "SPIE ICS",
            description: "Architecte avant-vente au sein de l'équipe d'infrastructure IP (LAN & WLAN) de SPIE ICS",
            year: "2021-Présent",
            image: "logo_spie.png"
        },
    ]

    const contact = [
        {
            name:"Email",
            desc:"mohamed-ch30@hotmail.com",
            href:"mailto:mohamed-ch30@hotmail.com",
            image:<MailIcon className="h-10"/>
        },
        {
            name:"Linkedin",
            desc:"mohamed-chamrouk",
            href:"https://linkedin.com/in/mohamed-chamrouk",
            image:<AiOutlineLinkedin className="h-full w-10"/>
        },
        {
            name:"GitHub",
            desc:"mohamed-chamrouk",
            href:"https://github.com/mohamed-chamrouk/",
            image:<AiOutlineGithub className="w-10 h-full"/>
        },
    ]
    return (
        <>
            <div className="max-w-4xl m-auto flex flex-col justify-center pt-9 pb-9">
                <div className="sm:text-lg text-base dark:text-white">
                    Moi c'est Mohamed Chamrouk.<br /><br />

                    Je suis un jeune étudiant en réseau du numérique et plus globalement en technologies du numérique.

                    <br />J'ai suivi le parcours scolaire suivant :<br /><br />

                    {education.map((item) => (
                        <div key={item.name} className="dark:text-white boder border-2 border-gray-100 dark:border-gray-700 dark:bg-gray-800 p-5 my-2 rounded-lg  flex flex-row items-center justify-start gap-5">
                            <img className="w-10" src={`/images/about/${item.image}`} />
                            <p className="w-20 text-base sm:text-xl">{item.name}</p>
                            <div>
                                <p className="text-base sm:text-lg font-bold">{item.field}</p>
                                <p className="text-sm sm:text-base font-medium">{item.spec}</p>
                                <p className="text-sm font-light">{item.year}</p>
                            </div>
                        </div>
                    ))}

                    <br />
                    Bien que ma formation soit plus accès sur les réseaux informatiques,
                    je porte un grand intérêt au développement web
                    tout en nourissant ma culture des technologies émergentes.<br />
                    J'ai commencé mon aventure dans le développent web par la création de
                    mon site web <a className="underline hover:text-cyan-500" href="https://mohamed.chamrouk.fr/v1">mohamed.chamrouk.fr </a>
                    qui m'a donné le goût du web que j'ai poursuivi par la suite en créant différents projets :

                    <br /><br />
                    {projets.map((item) => (
                        <div key={item.description} className="dark:text-white boder border-2 border-gray-100 dark:border-gray-700 dark:bg-gray-800 p-5 my-2 rounded-lg  flex flex-row items-center justify-start gap-5">
                            <img className="w-10" src={`/images/about/${item.image}`} />
                            <p className="hidden sm:flex text-base sm:text-xl">{item.name}</p>
                            <div>
                                <p className="sm:hidden text-base sm:text-xl">{item.name}</p>
                                <p className="text-sm sm:text-base font-medium">{item.description}</p>
                                <p className="text-sm font-light">{item.tech}</p>
                            </div>
                        </div>
                    ))}

                    <br />
                    En parallèle de ces projets j'ai eu l'occasion de profiter de plusieurs expériences professionnelles,
                    autant dans le réseau que dans d'autres domaines de l'informatique :

                    <br /><br />
                    {jobs.reverse().map((item) => (
                        <div key={item.description} className="dark:text-white boder border-2 border-gray-100 dark:border-gray-700 dark:bg-gray-800 p-5 my-2 rounded-lg  flex flex-row items-center justify-start gap-5">
                            <img className="w-10" src={`/images/about/${item.image}`} />
                            <div className="w-2/3">
                                <p className="text-base sm:text-lg font-light">{item.name}</p>
                                <p className="text-base sm:text-lg font-bold">{item.company}</p>
                                <p className="text-sm font-medium">{item.description}</p>
                            </div>
                            <div className="flex-1 flex justify-end items-end">
                                <div className="w-fit rounded-lg bg-gray-50 dark:bg-gray-700 py-1 px-2">{item.year}</div>
                            </div>
                        </div>
                    ))}

                    <br />
                    En outre, je possède un niveau d'anglais convenant au monde professionnel (TOIEC 985/990).
                    Finalement, vous pouvez me contacter ou me retrouver via :
                    <br/><br/>
                    <div className="flex flex-col sm:flex-row m-auto gap-7 justify-center items-center">
                        {contact.map((item) => (
                            <div className="flex flex-col justify-center items-center" key={item.name}>
                                {item.image}
                                <p className="dark:text-gray-200 font-medium text-lg">{item.name}</p>
                                <a className="dark:text-gray-500 underline dark:hover:text-cyan-500 hover:text-cyan-500 font-bold text-lg" href={item.href}>{item.desc}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*<div className="col-span-1 bg-cover bg-no-repeat min-h-full rounded-lg" style={{ backgroundImage: "url('/images/about/about_default.png')" }} />*/}
        </>
    )
}

export default About