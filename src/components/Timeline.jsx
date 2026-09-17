import React from 'react';

function Timeline() {
    // Дані для таймлайну (можете змінити під свої потреби)
    const items = [
        {
            id: "1",
            title: "Серія вебінарів про підготовку до участі в ISEF Ukraine",
            date: "28 вересня - 2 жовтня 2026 року",
            description: "Триває реєстрація учасників вебінарів. Дистанційно на платформі Zoom та Instagram @isef.ukraine. Деталі згодом в соціальних мережах конкурсу.",
            status: "active" // pending - майбутній етап (сірий)
        },
        {
            id: "2",
            title: "Реєстрація проєктів для участі в I етапі ISEF Ukraine 2027",
            date: "12 жовтня - 13 листопада 2026 року",
            description: "Заповнення учасниками форми реєстрації. Покликання на форму будуть розміщені на сайті конкурсу та в соціальних мережах в перший день реєстрації проєктів.",
            status: "pending"
        },
        {
            id: "3",
            title: "I етап ISEF Ukraine 2027 – попереднє оцінювання проєктів",
            date: "Грудень 2026 року - Січень 2027 року",
            description: "Заочне оцінювання проєктів учасників, допущених до участі в I етапі ISEF Ukraine.",
            status: "pending" // active - поточний етап (з жовтою обводкою)
        },
        {
            id: "4",
            title: "Оголошення фіналістів ISEF Ukraine 2027",
            date: "Січень 2027 року",
            description: "Учасників буде повідомленно про результати попереднього оцінювання проєктів електронною поштою. Список учасників, які пройшли на II етап ISEF Ukraine 2027, буде опубліковано на сайті конкурсу.",
            status: "pending" // pending - майбутній етап (сірий)
        },
        {
            id: "5",
            title: "Реєстрація учасників II етапу ISEF Ukraine 2027 та тестування на знання англійської мови",
            date: "Січень 2027 року",
            description: "Учасники, які пройшли на II етап ISEF Ukraine 2027, отримають покликання на форму реєстрації на II етап ISEF Ukraine 2027 та інструкцію до проходження тесування з англійської мови.",
            status: "pending" // pending - майбутній етап (сірий)
        },
        {
            id: "6",
            title: "II етап ISEF Ukraine 2027 – національний фінал",
            date: "Лютий - березень 2027 року",
            description: "Захисти проєктів учасниками перед членами журі. Формат проведення II етапу ISEF Ukraine 2027 буде визначено організаторами конкурсу та повідомлено учасникам.",
            status: "pending" // pending - майбутній етап (сірий)
        },
        {
            id: "7",
            title: "Оголошення результатів ISEF Ukraine 2027",
            date: "Лютий - березень 2027 року",
            description: "Учасників буде повідомленно про результати II етапу ISEF Ukraine 2027 електронною поштою. Список переможців ISEF Ukraine 2027 буде опубліковано на сайті конкурсу.",
            status: "pending" // pending - майбутній етап (сірий)
        },
        {
            id: "8",
            title: "Відбір до Regeneron ISEF",
            date: "Лютий - березень 2027 року",
            description: 'Учасників, які виконали умови відбору до участі в Regeneron ISEF, буде запрошено до участі в онлайн-захистах проєктів англійською мовою перед експертною групою. Детальніше на сторінці "Учасникам".',
            status: "pending" // pending - майбутній етап (сірий)
        },
        {
            id: "9",
            title: "Оголошення учасників, які представлятимуть Україну на Regeneron ISEF 2027",
            date: "Березень 2027 року",
            description: "Учасників буде повідомленно про результати відбору до участі в Regeneron ISEF електронною поштою. Список учасників, які представлятимуть Україну на Regeneron ISEF 2027, буде опубліковано на сайті конкурсу.",
            status: "pending" // pending - майбутній етап (сірий)
        },
        {
            id: "10",
            title: "Підготовка до участі в Regeneron ISEF 2027",
            date: "Березень - квітень 2027 року",
            description: "Реєстрація до участі в Regeneron ISEF 2027 та підгтовка до відрядження до США.",
            status: "pending" // pending - майбутній етап (сірий)
        },
        {
            id: "11",
            title: "Участь в Regeneron ISEF 2027",
            date: "Травень 2027 року",
            description: "Лос-Анджелес, США",
            status: "pending",
        },
        {
            id: "12",
            title: "Отримання диплому ISEF Ukraine 2027",
            date: "Протягом травня 2027 року",
            description: "Учасники, допущені до участі в I етапі ISEF Ukraine 2027, отримають електронний диплом з зазначенням результату їх участі в ISEF Ukraine 2027"
        }
    ];

    return (
        <div className="padding">
            <div className="timeline-container">
                <h2 className="heading timeline-heading">Етапи конкурсу</h2>
                
                <div className="timeline-wrapper">
                    {items.map((item, index) => (
                        <div className={`timeline-item ${item.status}`} key={item.id}>
                            
                            {/* Лінія, що з'єднує точки (не показуємо для останнього елемента) */}
                            {index !== items.length - 1 && (
                                <div className="timeline-connector"></div>
                            )}
                            
                            {/* Кружечок (іконка) */}
                            <div className="timeline-icon"></div>
                            
                            {/* Контент */}
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <span className="timeline-date">{item.date}</span>
                                </div>
                                <p className="text timeline-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Timeline;