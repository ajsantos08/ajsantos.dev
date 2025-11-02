import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { GlobalStyle } from "../styled-components/global"
import { ThemeProvider } from "styled-components"
import { colors } from "../styled-components/colors"
import Nav from "../components/nav"
import Content from "../components/content"
import Landing from "../components/landing"
import Footer from "../components/footer"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import DevIcons from "../components/devIcons"
import WorkCarousel from "../components/workCarousel"
import { useGSAP } from "@gsap/react"
import { useEffect } from "react"

const content = [
  {   
    flip: false,
    hash: "me",
    header: "me.",
    content: <DevIcons/>,
    body: "I craft dynamic, high-performance web experiences that captivate users and elevate brands. As a front-end developer skilled in React, jQuery, SASS, Node.js, and Adobe Experience Manager, I blend creativity, technical expertise, and attention to detail to deliver exceptional digital experiences. Ready to build something extraordinary?"
  },
  {
    flip: true,
    hash: "work",
    header: "work.",
    content: <WorkCarousel/>,
    body: ""
  },
  {
    flip: false,
    hash: "contact",
    header: "contact.",
    content: <Footer/>,
    body: "I'm always excited to connect with fellow developers, designers, and potential collaborators. Whether you have a project in mind, want to discuss the latest trends in web development, or just want to say hello, feel free to reach out! You can contact me via email or LinkedIn down below. 👇"
  }
]

const Homepage: React.FC<PageProps> = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {

        let panels: gsap.DOMTarget[] = gsap.utils.toArray(".panel");
        // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
        let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));
        
        panels.forEach((panel: any, i) => {
          if (i < panels.length-2) {
            let tl = gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                start: 'top top',
                scrub: true,
                //markers: true
              } 
            });
  
            tl.to(panel.querySelectorAll('div:not(.arrow)'), { opacity: 0.1 });
          }
          
          ScrollTrigger.create({
            trigger: panel,
            start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
            pin: true, 
            pinSpacing: false,
            });
        });
        
        ScrollTrigger.create({
          snap: {
            snapTo: (progress, self: any) => {
              let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
                  snapScroll = gsap.utils.snap(panelStarts, self.scroll(), ); // find the closest one
              return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
            },
            duration: 0.5
          }

        });

    })

    useEffect(() => {
        const handleScroll = () => {
          const nav = document.querySelector('.nav') as HTMLElement;
          if (window.scrollY > 50) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <ThemeProvider theme={colors}>
        <main>
            <GlobalStyle/>
            <Nav/>
            <Landing/>
            {content.map(content => (
                <Content key={content.header} flip={content.flip} hash={content.hash} header={content.header} body={content.body} content={content.content} className="panel"/>
            ))}
        </main>
        </ThemeProvider>
    )
}
export default Homepage

export const Head: HeadFC = () => <title>ajsantos | Front-end Developer</title>