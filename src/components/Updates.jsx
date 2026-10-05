import React, {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Pagination, Navigation} from "swiper/modules";

function Updates() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className="padding">
            <div className="updates">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 15000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }}>
                        <p className="heading">Реєстрація проєктів до участі в ISEF Ukraine 2027 наближається!</p>
                        <p className="text">Вже 12 жовтня 2026 року форма реєстрації проєктів до участі в I етапі ISEF Ukraine 2027 буде доступна до заповнення. Радимо передивитися всі <a className="text" href="https://drive.google.com/drive/folders/16Q53ZxVAuvDEzmo2fhu_OgA0yk6E3Wkz?usp=sharing" target="_blank" rel="noopener noreferrer">гайди ISEF Ukraine</a> аби підготуватися до реєстрації</p>
                    </SwiperSlide>
                    <SwiperSlide style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }}>
                        <p style={{
                            marginTop: '0'
                        }} className="heading">Серію ознайомчих вебінарів ISEF Ukraine 2027 завершено</p>
                        <p style={{
                            marginTop: '0'
                        }} className="text">28 вересня - 2 жовтня 2026 року відбулась серія вебінарів про підготовку до участі в конкурсі, його етапи, здійснення реєстрації, а також досвід учасників Regeneron ISEF та науковців в Україні</p>
                    </SwiperSlide>
                    <SwiperSlide style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }}>
                        <p className="heading">Розпочато сезон Всеукраїнського конкурсу ISEF Ukraine – 2027!</p>
                        <p className="text">Слідкуйте за оновленнями на сайті конкурсу, а також на сторінках в Instagram @isef.ukraine та @jas.ukraine</p>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                         </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default Updates;