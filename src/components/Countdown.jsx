import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    // Встановлюємо цільову дату: 13 листопада 2026 року
    const targetDate = new Date("2026-11-13T00:00:00");
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Очищення таймера при розмонтуванні компонента
    return () => clearInterval(timer);
  }, []);

  // Додаємо нуль попереду для чисел менших за 10 (наприклад, 09)
  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="padding">
        <div className="countdown-container">
      <h3 className="countdown-heading heading">До завершення реєстрації проєктів залишилось:</h3>
      <div className="countdown-wrapper">
        <div className="countdown-item">
          <span className="countdown-value">{formatNumber(timeLeft.days)}</span>
          <span className="countdown-label">Днів</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-value">{formatNumber(timeLeft.hours)}</span>
          <span className="countdown-label">Годин</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-value">{formatNumber(timeLeft.minutes)}</span>
          <span className="countdown-label">Хвилин</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-value">{formatNumber(timeLeft.seconds)}</span>
          <span className="countdown-label">Секунд</span>
        </div>
      </div>
      <p style={{ marginTop: '20px' }} className="text">Встигніть заявити світу про всі свої наукові та інженерні ідеї!</p>
    </div>
    </div>
  );
};

export default Countdown;