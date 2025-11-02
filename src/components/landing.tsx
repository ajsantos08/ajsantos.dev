import React, { useEffect } from 'react';
import { StyledLanding, StyledImage } from '../styled-components/styledLanding';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

const content = {
	image:
		'https://media.licdn.com/dms/image/v2/C5603AQEq_EbyPi_ahQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1600671855250?e=1763596800&v=beta&t=hMUFd7nqKKIwdVK1XMD3gnv96fKQ3EvC9l_EsyJa6fs',
	header: "Hi, I'm Arthur",
	header2: 'front-end web developer.'
};

const arrow = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
	</svg>
);

const Landing: React.FC = () => {
	gsap.registerPlugin(TextPlugin, ScrollTrigger);

	useGSAP(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.panel--landing',
				start: 'top center',
				scrub: false
			}
		});

		tl.to('.anim-typewrite', {
			text: {
				value: `${content.header}`
			},
			duration: 1,
			delay: 1,
			ease: 'none'
		});

		tl.to('.anim-typewrite-2', {
			text: {
				value: `${content.header2}`
			},
			duration: 1,
			delay: 0,
			ease: 'none'
		});

		tl.to('.photo img', {
			clipPath: 'circle(50%)',
			duration: 0.5
		});

		tl.from('.arrow', {
			opacity: 0
		});

		let arrowtl = gsap.timeline({ repeat: -1 });

		arrowtl.to('.arrow', {
			y: 10
		});
		arrowtl.to('.arrow', {
			y: 0
		});
	}, {});

	useEffect(() => {
		let arrow = document.querySelector('.arrow');
		let section = document.querySelector('.panel--me');
		arrow?.addEventListener('click', () => {
			section?.scrollIntoView({ behavior: 'smooth' });
		});
	}, []);

	return (
		<StyledLanding className="panel panel--landing">
			<StyledImage className="photo">
				<img alt="me" src={content.image} />
			</StyledImage>
			<div className="body">
				<div className="placeholder">
					<h2>{content.header}</h2>
					<h3>{content.header2}</h3>
				</div>
				<div className="anim-typewrite-wrapper">
					<h2 className="anim-typewrite" />
					<h3 className="anim-typewrite-2" />
				</div>
			</div>
			<div className="arrow">{arrow}</div>
		</StyledLanding>
	);
};

export default Landing;
