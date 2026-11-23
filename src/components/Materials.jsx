import React, { useState } from "react";
import { Dots, Flask, Gear, Arrow } from "./Icons";

const plural = (n) => {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return "документ";
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "документи";
    return "документів";
};

// Списки документів.
// Щоб додати документ — додайте рядок { title, type, href }:
//   title — назва, яку бачать відвідувачі;
//   type  — підпис формату на значку (PDF, DOCX…);
//   href  — повне посилання на файл на вашому сервері.
// Поки href порожній, документ показується в списку, але не клікається.
const materials = [
    {
        id: "guides",
        title: "Гайди",
        Icon: Dots,
        docs: [
            { title: "Handbook учасника ISEF Ukraine", type: "PDF", href: "https://files.isef-ukraine.com/handbook.pdf" },
            { title: "Питання форми реєстрації до участі в I етапі ISEF Ukraine 2027", type: "PDF", href: "https://files.isef-ukraine.com/application.pdf" },
            { title: "Шаблон анотації", type: "DOCX", href: "https://files.isef-ukraine.com/abstract.docx" },
            { title: "Шаблон плану дослідження", type: "DOCX", href: "https://files.isef-ukraine.com/plan.docx" },
            { title: "Рекомендація наукового керівника", type: "PDF", href: "https://files.isef-ukraine.com/mentor.pdf" },
            { title: "Декларація доброчесності 2027", type: "PDF", href: "https://files.isef-ukraine.com/integrity.pdf" },
            { title: "Згода на участь 2027", type: "PDF", href: "https://files.isef-ukraine.com/participation.pdf" },
            { title: "Згода на обробку персональних даних 2027", type: "PDF", href: "https://files.isef-ukraine.com/data.pdf" },
            { title: "Згода на використання матеріалів", type: "PDF", href: "https://files.isef-ukraine.com/materials.pdf" },
            { title: "Згода на використання фото- та відеоматеріалів", type: "PDF", href: "https://files.isef-ukraine.com/photo.pdf" },
            { title: "Про нерозголошення конфіденційної інформації для членів журі", type: "PDF", href: "https://files.isef-ukraine.com/nda.pdf" },
        ],
    },
    {
        id: "docs",
        title: "Документація",
        Icon: Flask,
        docs: [
            { title: "Положення про ISEF Ukraine", type: "PDF", href: "https://zakon.rada.gov.ua/laws/show/z1083-25#Text" },
            { title: "Правила ISEF Ukraine 2027", type: "PDF", href: "https://files.isef-ukraine.com/docs/rules.pdf" },
            { title: "Категорії та критерії оцінювання ISEF Ukraine 2027", type: "PDF", href: "https://files.isef-ukraine.com/docs/categories.pdf" },
            { title: "Графік ISEF Ukraine 2027", type: "PDF", href: "https://files.isef-ukraine.com/docs/schedule.pdf" },
        ],
    },
    {
        id: "regeneron",
        title: "Regeneron ISEF",
        Icon: Gear,
        href: "https://www.societyforscience.org/isef/",
    },
];

function Materials() {
    const [openId, setOpenId] = useState(null);

    return(
        <div className="padding">
            <div className="materials">
                <p className="materials__heading heading">Матеріали</p>

                {materials.map(({ id, title, Icon, href, docs }) => {
                    const content = (
                        <>
                            <span className="materials__icon"><Icon /></span>
                            <p className="materials__text text">{title}</p>
                            {docs && <span className="materials__count text">{docs.length} {plural(docs.length)}</span>}
                            <Arrow className="materials__arrow" />
                        </>
                    );

                    if (href) {
                        return (
                            <a key={id} target="_blank" rel="noopener noreferrer" href={href} className="text materials__element">
                                {content}
                            </a>
                        );
                    }

                    // Список розкривається одразу після своєї плитки
                    // (на телефоні — під нею, на комп'ютері — на всю ширину рядка)
                    return (
                        <React.Fragment key={id}>
                            <button
                            type="button"
                            className={`text materials__element materials__element--toggle ${openId === id ? "active" : ""}`}
                            aria-expanded={openId === id}
                            aria-controls="materials-list"
                            onClick={() => setOpenId(openId === id ? null : id)}
                        >
                            {content}
                        </button>
                            {openId === id && (
                                <div className="materials__list" id="materials-list">
                                    <div className="materials__list-header">
                                        <p className="materials__list-title heading">{title}</p>
                                        <button type="button" className="materials__close" onClick={() => setOpenId(null)} aria-label="Закрити список">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <ul className="materials__docs">
                                        {docs.map((doc) => (
                                            <li key={doc.title}>
                                                {doc.href ? (
                                                    <a className="materials__doc" href={doc.href} target="_blank" rel="noopener noreferrer">
                                                        <span className={`materials__type materials__type--${doc.type.toLowerCase()}`}>{doc.type}</span>
                                                        <span className="materials__doc-title text">{doc.title}</span>
                                                        <Arrow className="materials__doc-arrow" />
                                                    </a>
                                                ) : (
                                                    <span className="materials__doc materials__doc--disabled" aria-disabled="true">
                                                        <span className={`materials__type materials__type--${doc.type.toLowerCase()}`}>{doc.type}</span>
                                                        <span className="materials__doc-title text">{doc.title}</span>
                                                    </span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}

            </div>
        </div>
    )
}

export default Materials;