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
		canonical: `https://yune.vercel.app/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'yune',
			url: `https://yune.vercel.app/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://yune.vercel.app/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
