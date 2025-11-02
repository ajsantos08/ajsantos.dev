import * as React from 'react';
import { StyledNav, SiteName, Links, StyledLink } from '../styled-components/styledNav';

const links = [
	{
		text: 'me',
		url: '#me'
	},
	{
		text: 'work',
		url: '#work'
	},
	{
		text: 'contact',
		url: '#contact'
	}
];


const Nav: React.FC = () => {
	React.useEffect (() => {
		const handleClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			//smooth scroll to section
			if (target.closest('a')) {
				event.preventDefault();
				const href = target.closest('a')!.getAttribute('href');
				if (href) {
					const section = document.querySelector(href);
					section?.scrollIntoView({ behavior: 'smooth' });
				}
			}
		};
		const navLinks = document.querySelectorAll('.nav-link');
		navLinks?.forEach(link => {
			link?.addEventListener('click', handleClick);
		});

		return () => {
			navLinks?.forEach(link => {
				link?.removeEventListener('click', handleClick);
			});
		};
	}, []);

	return (
		<StyledNav className="nav">
			<SiteName>
				<a href="/homepage">ajsantos.dev</a>
			</SiteName>
			<Links>
				{links.map((link) => (
					<StyledLink key={link.url}>
						<span>
							<a className="nav-link" href={link.url} title={link.text}>
								{link.text}
							</a>
						</span>
					</StyledLink>
				))}
			</Links>
		</StyledNav>
	);
};

export default Nav;
