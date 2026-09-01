import React, {useState} from "react";

const tabsData = [
  {
    id: 'step1',
    label: 'Учасники I етапу',
    content: (
      <>
        <p className="text">I етап ISEF Ukraine 2027 ще не розпочався</p>
      </>
    )
  },
  {
    id: 'step2',
    label: 'Рейтинг учасників I етапу',
    content: (
        <>
            <p className="text">I етап ISEF Ukraine 2027 ще не розпочався</p>
        </>
    )
  },
  {
    id: 'competitionResults',
    label: 'Результати II етапу',
    content: (
        <>
            <p className="text">II етап ISEF Ukraine 2027 ще не відбувся</p>
        </>
    )
  },
  {
    id: 'selectionParticipants',
    label: 'Учасники захистів англійською мовою',
    content: (
        <>
            <p className="text">Список учасників захистів проєктів англійською мовою буде опубліковано після завершення II етапу ISEF Ukraine 2027</p>
        </>
    )
  },
  {
    id: 'selectionResults',
    label: 'Результати відбору до Regeneron ISEF',
    content: (
        <>
            <p className="text">Відбір до Regeneron ISEF 2027 ще не проводився</p>
        </>
    )
  },
  {
    id: 'archive',
    label: 'Архів минулих сезонів',
    content: (
        <>
            <div className="results__archive-links">
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1ZYaHP6PH26JrE3XcgZKshSN1KOu2mOpU?usp=sharing" className="text results__archive-link">
                    <p style={{
                        marginBottom: '0'
                    }} className="text archive_text">ISEF Ukraine 2026</p>
                </a>
            </div>
        </>
    )
  }
];

function Results_content() {

    const [activeTab, setActiveTab] = useState(tabsData[0].id);
    
      // Знаходимо об'єкт активної вкладки, щоб відмалювати її контент
    const activeContent = tabsData.find(tab => tab.id === activeTab)?.content;

    return(
        <div className="padding">
                <div className="participants__content">
      <div className="tabs__header">
        {/* Генеруємо кнопки на основі масиву */}
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`tab__button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabs__body">
        {/* Виводимо контент обраної вкладки */}
        {activeContent}
      </div>
    </div>
            </div>
    );
}

export default Results_content