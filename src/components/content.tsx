import React, { ReactNode } from 'react';
import { StyledContent } from '../styled-components/styledContent';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Content: React.FC<{
	className: string;
	flip: boolean;
	hash: string;
	header: string;
	body: string;
	content: ReactNode;
}> = ({ className, hash, header, body, content, flip }) => {
	return (
		<StyledContent flip={flip} className={className + ' ' + className + '--' + hash + ' ' + (flip ? 'flip' : '')}>
			<div id={hash} className="text">
				<h2>{header}</h2>
				<p>{body}</p>
			</div>
			<div className="content">{content}</div>
		</StyledContent>
	);
};

export default Content;
