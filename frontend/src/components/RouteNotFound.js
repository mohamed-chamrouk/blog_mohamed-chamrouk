import React from 'react'
import { Link } from "react-router-dom"


function RouteNotFound() {
    return (
        <>
            <div className="text-center dark:text-white">
                <div className="text-8xl text-center pt-8 text-cyan-500 font-bold">
                    404
                </div>
                <div className="font-medium pb-8">
                    Page non trouvée
                </div>
                <Link to="/" className="transition-colors hover:text-cyan-500"><span className="font-medium mr-2">&#8249;</span>Retourner à l'accueil</Link>
            </div>
        </>
    )
}

export default RouteNotFound