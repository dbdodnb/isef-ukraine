import React from "react";

function Materials() {

    return(
        <div className="padding">
            <div className="materials">
                <p className="materials__heading heading">Матеріали</p>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1z0I0qNmA6T8wGvC4_x7kkHGOrABI4fu4/view?usp=sharing" className="materials__element">
                    <p className="materials__text text">Гайди</p>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/12uehQAIkbl0ArEpWfw1qT76MXAclWUgX?usp=sharing" className="text materials__element">
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