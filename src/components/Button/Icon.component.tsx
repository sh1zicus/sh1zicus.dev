import clsx from 'clsx';
import { forwardRef } from 'react';

import type { ButtonHTMLAttributes } from 'react';

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const Icon = forwardRef<HTMLButtonElement, IconProps>(function Icon(
	{ children, className, onClick, ...rest },
	ref,
) {
	return (
		<button
			ref={ref}
			className={clsx(
				'group',
				'relative inline-flex items-center px-3 py-2 bg-gray-100 hover:(bg-gray-200 text-gray-700) dark:(bg-gray-200 hover:bg-gray-300 hover:text-gray-800) text-gray-500 dark:text-gray-600 rounded-lg text-sm font-medium default-transition default-focus',
				className,
			)}
			onClick={(e): void => onClick && onClick(e)}
			{...rest}
		>
			{children}
		</button>
	);
});
