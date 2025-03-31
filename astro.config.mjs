// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '知识库',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '容器',
					items: [
						{
							label: 'Docker',
							items: [
								{ label: 'Docker 简介', link: 'container/docker/intro' },
								{ label: 'Docker Compose', link: 'container/docker/docker-compose' },
								{ label: 'Docker Compose Yaml', link: 'container/docker/docker-compose-yml' }
							]
						},
						{
							label: 'Podman',
							items: [
								{ label: 'Podman 简介', link: 'container/podman/intro' }
							]
						}
					],
				},
				{
					label: 'Caddy',
					items: [
						{
							label: 'Caddy',
							items: [
								{ label: 'Caddy 简介', link: 'soft/caddy/intro' }
							]
						},
						{
							label: 'Caddy 2',
							items: [
								{ label: 'Caddy 2 简介', link: 'soft/caddy2/intro' },
								{ label: 'Caddy 2 安装', link: 'soft/caddy2/install' }
							]
						}
					]
				}
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
