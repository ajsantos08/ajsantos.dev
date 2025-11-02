import styled from 'styled-components';

export const StyledFooter = styled.footer`
	ul {
		max-width: 125px;
		margin: auto;
		list-style-type: none;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	svg {
		width: 25px;
	}

	.copyright {
		text-align: center;
		padding: 1rem 0;
		color: #777;
	}
`;
