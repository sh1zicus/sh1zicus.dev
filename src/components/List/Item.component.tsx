import clsx from 'clsx';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import { Action } from './Action.component';
import { ListActionType } from '~/types';

import type { ReactNode } from 'react';

import type { ListAction, WithChildren } from '~/types';

interface ItemProps extends WithChildren {
	actions?: Array<ListAction>;
	description?: string | ReactNode;
	icon?: string | ReactNode;
	iconColor?: string;
	title: string;
}

export function Item({
	actions,
	children,
	description,
	icon,
	iconColor,
	title,
}: ItemProps): JSX.Element {
	return (
		<li className="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 dark:border-gray-500 rounded-lg transition ease-in-out duration-300">
			<div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6">
				<div className="flex flex-1 items-center justify-start w-full">
					{icon &&
						(typeof icon === 'string' ? (
							<div
								className={clsx(
									'flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full',
									iconColor === undefined && 'bg-primary-500',
								)}
								style={{
									backgroundColor:
										iconColor !== undefined ? iconColor : undefined,
								}}>
								<Icon className="w-6 h-6 text-white" icon={icon} />
							</div>
						) : (
							<>{icon}</>
						))}
					<div className="min-w-0 flex-1 px-4">
						<h1 className="text-gray-700 dark:text-white text-lg font-bold">{title}</h1>
						{description && (
							<p className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-xs">
								{description}
							</p>
						)}
					</div>
				</div>

				{actions && (
					<div className="inline-flex items-center justify-end space-x-2 w-full sm:w-auto mt-4 sm:mt-1">
						{actions.map((action, index) => {
							switch (action.type) {
								case ListActionType.BUTTON:
									return (
										<Action
											aria-label={action.label}
											key={index}
											onClick={action.onClick}>
											<Icon icon={action.icon} className="w-5 h-5" />
											<span className="sr-only">{action.label}</span>
										</Action>
									);
								case ListActionType.LINK:
									if (action.external ?? true)
										return (
											<Action
												as="a"
												aria-label={action.label}
												href={action.href}
												key={index}
												onClick={action.onClick}
												rel="noopener noreferrer"
												target="_blank"
												className="flex items-center space-x-2"
											>
												<Icon icon={action.icon} className="w-5 h-5" />
												<span className="sr-only">{action.label}</span>
												{action.showCounts && (
													<div className="flex items-center ml-1 space-x-2 text-xs text-gray-500 dark:text-gray-400">
														{action.stars !== undefined && (
															<div className="flex items-center">
																<Icon icon="mdi:star" className="text-yellow-500 mr-0.5" />
																<span>{action.stars}</span>
															</div>
														)}
														{action.forks !== undefined && (
															<div className="flex items-center">
																<Icon icon="mdi:source-branch" className="text-gray-500 mr-0.5" />
																<span>{action.forks}</span>
															</div>
														)}
													</div>
												)}
											</Action>
										);

									return (
										<Link href={action.href} passHref>
											<Action
												as="a"
												aria-label={action.label}
												key={index}
												onClick={action.onClick}>
												<Icon icon={action.icon} className="w-5 h-5" />
												<span className="sr-only">{action.label}</span>
											</Action>
										</Link>
									);
							}
						})}
					</div>
				)}
			</div>
			{children}
		</li>
	);
}
