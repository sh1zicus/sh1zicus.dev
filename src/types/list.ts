import type { MouseEvent } from 'react';

export enum ListActionType {
	BUTTON = 'button',
	LINK = 'link',
}

interface ListActionBaseProps {
	icon: string;
	label: string;
	showCounts?: boolean;
	stars?: number;
	forks?: number;
}

export type ListAction =
	| ({
			type: ListActionType.BUTTON;
			onClick: (event: MouseEvent) => void;
	  } & ListActionBaseProps)
	| ({
			type: ListActionType.LINK;
			external?: boolean;
			href: string;
			onClick?: (event: MouseEvent) => void;
	  } & ListActionBaseProps);
