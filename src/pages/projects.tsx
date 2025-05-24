import { fetchProjects } from '~/lib/projects';

import { Layout } from '~/layouts';
import { Animate, List } from '~/components';
import { ListActionType } from '~/types';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

import type { GetStaticProps } from 'next';

import type { ListAction, Project } from '~/types';

interface ProjectProps {
	stringifiedProjects: string;
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
	const projects = await fetchProjects();

	// Return empty array if projects is null
	return {
		props: {
			stringifiedProjects: JSON.stringify(projects || []),
		},
		revalidate: 3600,
	};
};

export default function ProjectsPage({ stringifiedProjects }: ProjectProps): JSX.Element {
	const projects = JSON.parse(stringifiedProjects) as Array<Project> | null;

	if (!projects || projects.length === 0) {
		return (
			<Layout.Default seo={{ title: 'yune ─ проекты' }}>
				<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
					<div className="relative max-w-xl mx-auto">
						<List.Container>
							<div className="text-center py-8">
								<p className="text-gray-500 dark:text-gray-400">Не удалось загрузить проекты. Пожалуйста, попробуйте позже.</p>
							</div>
						</List.Container>
					</div>
				</div>
			</Layout.Default>
		);
	}

	return (
		<Layout.Default seo={{ title: 'yune ─ проекты' }}>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-xl mx-auto">
					<List.Container>
						{projects.map((project, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
								<div className="w-full">
									<List.Item
										actions={[
											...(project.post
												? [
													{
														type: ListActionType.LINK,
														external: false,
														href: project.post,
														icon: 'feather:edit-3',
														label: `Blog post about ${project.name}`,
													} as ListAction,
												]
												: []),
											...(project.homepage
												? [
													{
														type: ListActionType.LINK,
														href: project.homepage,
														icon: 'feather:home',
														label: `${project.name} homepage`,
													} as ListAction,
												]
												: []),
											{
												type: ListActionType.LINK,
												href: project.url,
												icon: 'feather:github',
												label: 'GitHub',
											},
										]}
										description={project.description}
										icon={<span className="text-xl">{project.icon}</span>}
										title={project.name}
									>
										<div className="w-full">
											<div className="flex justify-end pr-8 -mt-3 mb-1">
												{(project.stars !== undefined || project.forks !== undefined) && (
													<div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
														{project.stars !== undefined && (
															<div className="flex items-center">
																<Icon icon="mdi:star" className="text-yellow-500 mr-1" />
																<span>{project.stars}</span>
															</div>
														)}
														{project.forks !== undefined && (
															<div className="flex items-center">
																<Icon icon="mdi:source-branch" className="text-gray-500 mr-1" />
																<span>{project.forks}</span>
															</div>
														)}
													</div>
												)}
											</div>
										</div>
									</List.Item>
								</div>
							</Animate>
						))}
					</List.Container>
				</div>
			</div>
		</Layout.Default>
	);
}
