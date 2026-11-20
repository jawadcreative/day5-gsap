import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

const Image = () => {
    const imgSec = useRef(null)
    const imgCon = useRef(null)
    useGSAP(() => {
        gsap.to(imgCon.current, {
            height: '100vh',
            width: '100%',
            ease: 'linear',
            scrollTrigger: {
                trigger: imgSec.current,
                start: 'top 0%',
                end: '+=50%',
                scrub: 2,
                pin: true
            }
        })
    })
    return (
        <section ref={imgSec} className='h-screen w-full flex items-center justify-center'>
            <div ref={imgCon} className="h-[50vh] w-[50%] overflow-hidden flex items-center justify-center">
                <div className="h-screen w-full bg-[url('/img/porsche.jpg')] bg-cover bg-center">

                </div>
            </div>
        </section>
    )
}

export default Image