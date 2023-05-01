import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'yune ─ разработчик';
	const description = "Привет 👋 я Иван, веб-разработчик";

	return {
		title,
		description,
		canonical: `https://yune.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'yune',
			url: `https://yune.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://yune.dev/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
