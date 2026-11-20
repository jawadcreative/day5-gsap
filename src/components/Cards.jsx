import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger)

const cars = [
    {
        id: 1,
        brand: "Porsche 911",
        model: "GT3 RS",
        image: "/img/porsche.png",
        specs: ["Top 296 km/h", "3.2s", "Manual"],
        description:
            "Timeless, iconic, and unapologetically analog — the Porsche 911 embodies the soul of Stuttgart's finest era.",
    },
    {
        id: 2,
        brand: "BMW M4",
        model: "Competition",
        image: "img/bmw.jpg",
        specs: ["Top 290 km/h", "3.5s", "Auto"],
        description:
            "Aggressive lines and a twin-turbo inline-six make every straight feel like a starting grid.",
    },
    {
        id: 3,
        brand: "Nissan GT-R",
        model: "Nismo",
        image: "/img/nissan.png",
        specs: ["Top 315 km/h", "2.7s", "Auto"],
        description:
            "Godzilla still roars — a track-bred legend with all-wheel-drive grip and relentless acceleration.",
    },
];

const Cards = () => {
    const con = useRef(null)
    useGSAP(() => {
        gsap.from('.card', {
            yPercent: 100,
            stagger: 0.3,
            opacity: 0,
            ease: 'linear',
            scrollTrigger: {
                trigger: con.current,
                start: 'top 20%',
            }
        })
    }, { scope: con })
    return (
        <section ref={con} className="sm:h-screen h-full w-full flex items-center justify-center gap-12 p-6 bg-amber-50 overflow-hidden max-sm:flex-col">
            {cars.map((item, i) => (
                <div key={i} className="card flex flex-col gap-6 w-full sm:w-[30%]  border-8 border-white bg-gray-200 rounded-2xl p-2">
                    <div className="h-[40vh] w-full rounded-2xl overflow-hidden">
                        <img src={item.image} alt={item.brand} className="h-full w-full object-cover object-left" />
                    </div>
                    <div className="flex gap-3">
                        {item.specs.map((item, i) => (
                            <p key={i} className="px-4 py-1 rounded-full max-sm:text-xs bg-black text-white">{item}</p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl fon-bold">{item.brand}</p>
                        <p className="text-3xl fon-bold">{item.model}</p>
                        <p className="text-sm fon-bold">{item.description}</p>
                    </div>
                </div>
            ))}

        </section>
    );
}

export default Cards