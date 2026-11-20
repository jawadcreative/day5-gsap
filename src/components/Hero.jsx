import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
gsap.registerPlugin(SplitText)
import { useRef } from "react"

const Hero = () => {
  const para1 = useRef(null)
  const para2 = useRef(null)
  const heading = useRef(null)
  const con = useRef(null)
  useGSAP(() => {
    let head = heading.current
    let para = para2.current
    let headSplt = SplitText.create(head, { type: 'chars, lines', linesClass: 'overflow-hidden' })
    let para2Split = SplitText.create(para, { type: 'lines', linesClass: 'overflow-hidden' })
    let tl = gsap.timeline()

    tl.from(para1.current, {
      yPercent: 100,
    })
    tl.from(headSplt.chars, {
      yPercent: 100,
      stagger: 0.02
    })
    tl.from(para2Split.lines, {
      yPercent: 100,
      stagger: 0.2,
      opacity: 0
    })
    tl.to(con.current, {
      height: '100vh',
      width: '100%',
      borderRadius: 0
    })
  }, [])
  return (
    <section className="h-screen w-full flex items-center justify-center bg-black">
      <div ref={con} className="h-[80vh] w-[90%] bg-olive-100 rounded-4xl flex flex-col gap-6 items-center justify-center p-6">
        <div className="h-24 w-24">
          <img src="/img/main.avif" alt="cartoon" className="h-full w-full object-cover object-center" />
        </div>
        <div className="overflow-hidden">
          <p ref={para1} className="text-xl text-gray-500">Tasks, Notes & Calendar. One beautiful Mac app.</p>
        </div>
        <h1 ref={heading} className="leading-[80px] text-8xl font-bold text-center">Your day, beautifully <br /> connected.</h1>
        <p ref={para2} className="text-xl leading-none text-center text-gray-500 overflow-hidden">Meet Woday, your all-in-one planner for Mac. Bring your calendar, tasks, reminders, <br /> and notes together in one beautifully simple workspace.</p>
        <button className="bg-black cursor-pointer text-white h-fit rounded-full flex gap-3 items-center px-6 py-3"><span><img className="h-4 w-4 invert-100" src="/img/apple-fill.svg" alt="apple" /></span>Get Woday for Mac</button>
      </div>
    </section>
  )
}

export default Hero