import styled from 'styled-components';

export const StyledNav = styled.nav`
	padding: 20px 20px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	position: fixed;
	max-width: 1920px;

	&.scrolled {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		max-width: 1920px;
		margin: 0 auto;
		z-index: 1000;
	}

	a {
		text-decoration: none;
	}
`;
export const SiteName = styled.div`
	a {
		font-weight: 800;
		font-size: 1.5em;
		cursor: pointer;
		text-decoration: none;
		color: #777;
	}
`;
export const Links = styled.ul`list-style-type: none;`;
export const StyledLink = styled.li`
	text-align: right;

	a {
		text-decoration: none;
		color: #777;
	}
`;
