import styled from 'styled-components';
export const StyledWorkCarousel = styled.div`
	max-width: 800px;
	margin: auto;
	position: relative;
	padding-bottom: 40px;

	button {
		cursor: pointer;
	}

	.carousel-inner {
		position: relative;
		overflow: hidden;
	}

	.carousel-item {
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
		position: absolute;
	}

	.carousel-item.active {
		opacity: 1;
		position: relative;
	}

	h2 {
		font-size: 1.5em;
		margin: auto;
		margin-bottom: 10px;
		padding: 0 30px;

		@media screen and (min-width: 780px) {
			padding: 0;
			margin: auto;
		}
	}

	p {
		max-width: 100%;
	}
`;

export const StyledLeftArrow = styled.svg`
	width: 24px;
	height: 24px;
	stroke: #000;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
	position: absolute;
	right: 36px;
	bottom: 0px;
	transition: stroke 0.3s ease;

	&:hover {
		stroke: #555;
	}
`;

export const StyledRightArrow = styled.svg`
	width: 24px;
	height: 24px;
	stroke: #000;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
	position: absolute;
	right: 10px;
	bottom: 0px;
	transition: stroke 0.3s ease;

	&:hover {
		stroke: #555;
	}
`;
