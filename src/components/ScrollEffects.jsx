import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Анімації під час прокрутки — без сторонніх бібліотек:
//  1. Етапи таймлайну плавно з'являються по черзі, коли доходять до екрана.
//  2. Прокрутка передається в CSS-змінні:
//     --scroll — скільки пікселів прокручено (від цього обертаються шестерні);
//     --hero-p — 0…1, наскільки перший блок пішов за верх екрана
//                (паралакс фото, текст піднімається й тьмяніє).
//  3. Меню стає компактнішим, коли сторінку прокрутили (клас is-scrolled на body).
// Якщо в системі ввімкнено «Зменшити рух», нічого з цього не вмикається.

const STAGGER_MS = 90;      // крок затримки між сусідніми етапами
const MAX_DELAY_MS = 450;

function ScrollEffects() {
    const { pathname } = useLocation();

    // ---- Поява етапів таймлайну ----
    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce || !("IntersectionObserver" in window)) return;

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                io.unobserve(el);
                el.classList.add("is-visible");
                const delay = parseInt(el.style.getPropertyValue("--reveal-delay"), 10) || 0;
                window.setTimeout(() => {
                    el.classList.remove("reveal", "is-visible");
                    el.style.removeProperty("--reveal-delay");
                }, delay + 1300);
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

        const raf = requestAnimationFrame(() => {
            document.querySelectorAll(".timeline-item").forEach((el, i) => {
                el.style.setProperty("--reveal-delay", `${Math.min(i * STAGGER_MS, MAX_DELAY_MS)}ms`);
                el.classList.add("reveal");
                io.observe(el);
            });
        });

        return () => {
            cancelAnimationFrame(raf);
            io.disconnect();
        };
    }, [pathname]);

    // ---- Обертання шестерень, паралакс першого блоку, компактне меню ----
    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const rootStyle = document.documentElement.style;
        let ticking = false;

        const update = () => {
            ticking = false;
            document.body.classList.toggle("is-scrolled", window.scrollY > 40);
            if (reduce) return;

            rootStyle.setProperty("--scroll", window.scrollY.toFixed(1));

            const hero = document.querySelector(".header");
            if (hero) {
                const r = hero.getBoundingClientRect();
                const p = Math.min(1, Math.max(0, -r.top / r.height));
                hero.style.setProperty("--hero-p", p.toFixed(3));
            }
        };
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [pathname]);

    return null;
}

export default ScrollEffects;