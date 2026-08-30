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
                    // onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }}>
                        <p className="heading">Новий сезон Всеукраїнського конкурсу ISEF Ukraine розпочнеться незабаром!</p>
                        <p className="text">Слідкуйте за оновленнями на сайті конкурсу, а також на сторінках в Instagram @isef.ukraine та @jas.ukraine</p>
                    </SwiperSlide>
                    {/* <SwiperSlide>2</SwiperSlide>
                    <SwiperSlide>3</SwiperSlide> */}
                    {/*<div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                         </svg>
                        <span ref={progressContent}></span>
                    </div>*/}
                </Swiper>
            </div>
        </div>
    );
}

export default Updates;