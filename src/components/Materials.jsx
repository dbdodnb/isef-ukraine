import React from "react";

function Materials() {

    return(
        <div className="padding">
            <div className="materials">
                <p className="materials__heading heading">Матеріали</p>
                <a href="" className="materials__element">
                    <p className="materials__text text">Гайди</p>
                </a>
                <a href="https://drive.google.com/drive/folders/12uehQAIkbl0ArEpWfw1qT76MXAclWUgX?usp=sharing" className="materials__element">
                    <p className="materials__text text">Документація</p>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.societyforscience.org/isef/" className="text materials__element">
                    <p className="materials__text text">Regeneron ISEF</p>
                </a>
            </div>
        </div>
    )
}

export default Materials;