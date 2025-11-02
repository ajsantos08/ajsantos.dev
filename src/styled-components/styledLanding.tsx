import styled from 'styled-components';

export const StyledLanding = styled.div`
	position: relative;
	height: 90svh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 1200px;
	margin: auto;

	@media screen and (min-width: 780px) {
		justify-content: space-around;
		flex-direction: row-reverse;
	}

	@media screen and (min-width: 780px) {
		h2 {
			font-size: 1.75em;
		}

		h3 {
			font-size: 1.25em;
		}
	}

	@media screen and (min-width: 1200px) {
		h2 {
			font-size: 2em;
		}

		h3 {
			font-size: 1.5em;
		}
	}

	.body {
		position: relative;
	}

	.placeholder {
		visibility: hidden;
		text-align: center;

		@media screen and (min-width: 780px) {
			text-align: left;
		}
	}

	.anim-typewrite-wrapper {
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translate(0, -50%);
		text-align: center;

		@media screen and (min-width: 780px) {
			text-align: left;
		}
	}

	.arrow {
		width: 19px;
		height: 19px;
		position: absolute;
		bottom: 20px;
	}
`;

export const StyledImage = styled.div`
	padding-bottom: 50px;

	@media screen and (min-width: 780px) {
		padding-bottom: 0;
		flex: 0 1 300px;
	}

	@media screen and (min-width: 1200px) {
		flex: 0 1 350px;
	}

	img {
		clip-path: circle(0);
		height: 200px;
		border-radius: 50%;

		@media screen and (min-width: 780px) {
			height: auto;
			width: 100%;
		}
	}
`;
