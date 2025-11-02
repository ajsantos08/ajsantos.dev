import React, { useEffect } from 'react';
import { StyledWorkCarousel, StyledLeftArrow, StyledRightArrow } from '../styled-components/styledWorkCarousel';
const content = [
	{
		header: '🚗 Client Website (Automotive Industry)',
		body:
			'Collaborated on the development and maintenance of a high-traffic site for a client in the automotive industry using JavaScript, SASS, and AEM. Implemented modular components to enhance content scalability and maintainability while optimizing performance,SEO and accessibility.',
		image: '/assets/work-hero.jpg'
	},
	{
		header: '💍 Personal Wedding Website (WIP)',
		body:
			'Designed and developed a fully responsive personal wedding website using Gatsby and SASS. Focused on elegant design, smooth navigation, and thoughtful user experience to share event details, RSVP forms, and photo galleries.',
		image: '/assets/work-wedding.jpg'
	},
    {
        header: '🛠️ Personal Portfolio Website',
        body:
            'Developed a personal portfolio website to showcase my projects and skills using React, TypeScript, styled-components and GSAP. Focused on creating a visually appealing layout and smooth user experience.',
        image: '/assets/work-portfolio.jpg'
    }
];

const WorkCarousel: React.FC = () => {

    useEffect(() => {
        // Carousel functionality can be added here
        const handlePrevClick = () => {
            const active = document.querySelector('.active');
            const prev = active?.previousElementSibling ? active?.previousElementSibling : active?.parentElement?.lastElementChild;
            if (active && prev) {
                active.classList.remove('active');
                active.classList.add('inactive');
                prev?.classList.remove('inactive');
                prev?.classList.add('active');
            }
        };

        const handleNextClick = () => {
            const active = document.querySelector('.active');
            const next = active?.nextElementSibling ? active?.nextElementSibling : active?.parentElement?.firstElementChild;
            if (active && next) {
                active.classList.remove('active');
                active.classList.add('inactive');
                next.classList.remove('inactive');
                next.classList.add('active');
            }
        };

        const handleScreenResize = () => {
            // Handle any responsive adjustments here if needed
            const carouselItems = document.querySelectorAll('.carousel-item');
            carouselItems.forEach(item => {
                //Find the tallest item and set all items to that height
                let maxHeight = 0;
                carouselItems.forEach(i => {
                    if (i.clientHeight > maxHeight) {
                        maxHeight = i.clientHeight;
                    }
                });
                item.setAttribute('style', `height: ${maxHeight}px`);
            });
        };
        handleScreenResize();

        window.addEventListener('resize', handleScreenResize);

        const prevButton = document.querySelector('.carousel-control-prev');
        const nextButton = document.querySelector('.carousel-control-next');

        prevButton?.addEventListener('click', handlePrevClick);
        nextButton?.addEventListener('click', handleNextClick);

        return () => {
            window.removeEventListener('resize', handleScreenResize);
            prevButton?.removeEventListener('click', handlePrevClick);
            nextButton?.removeEventListener('click', handleNextClick);
        }
    }, []);

	return (
		<StyledWorkCarousel>
            <div className="carousel-inner">
            {content.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : 'inactive'}`}>
                    <h2>{item.header}</h2>
                    <p>{item.body}</p>
                    {/* <img src={item.image} alt={item.header} /> */}
                </div>
            ))}
            </div>
            <button className="carousel-control-prev" aria-label="Previous Slide">
                <StyledLeftArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                </StyledLeftArrow>
            </button>
            <button className="carousel-control-next" aria-label="Next Slide">
                <StyledRightArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
				<path
					fillRule="evenodd"
					d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
				/>
			</StyledRightArrow>
            </button>
		</StyledWorkCarousel>
	);
};

export default WorkCarousel;
