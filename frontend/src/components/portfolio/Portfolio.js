import React from "react";

function modal() {
    return (
        <div id="myModal" className="modal">
            <span className="close">&times;</span>
            <img className="modal-content" id="img01"/>
                <div id="caption"></div>
        </div>
    )
}

function Portfolio() {
    return (
        <div id="grid" className="row">
            <div className="column">
                <img id="myImg" className="img_retract" alt="Auto-portrait numérique" src="/static/media/portfolio/babushka_boi.png" />
                <img id="myImg" className="img_retract" alt="Affiche pour un évènement étudiant" src="/static/media/portfolio/minetbbq.png" />
            </div>
            <div className="column">
                <img id="myImg" className="img_retract" alt="Logo pour un projet étudiant : FarmIA" src="/static/media/portfolio/E2vm8b3.png" />
                <img id="myImg" className="img_retract" alt="Logo pour une équipe étudiante" src="/static/media/portfolio/Kraken.png" />
                <img id="myImg" className="img_retract" alt="Logo pour un évènement étudiant" src="/static/media/portfolio/open_locaux.png" />
            </div>
        </div>
    )
}

export default Portfolio