import { create as createConfetti } from 'canvas-confetti';
import { useEffect, useRef } from 'react';

import { EventType } from '~/types';

export interface EventProps {
	event: EventType;
}

export function Event({ event }: EventProps): JSX.Element {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const confetti = createConfetti(canvasRef.current, {
		resize: true,
	});

	useEffect(() => {
		switch (event) {
			case EventType.BIRTHDAY: {
				const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

				// Initial burst
				setTimeout(() => {
					// Center burst
					confetti({
						particleCount: 150,
						spread: 180,
						startVelocity: 80,
						ticks: 200,
						origin: { y: 0.5 },
						colors: colors,
						shapes: ['square', 'circle'],
						scalar: 1.5,
					});

					// Left side
					confetti({
						particleCount: 80,
						angle: 60,
						spread: 55,
						startVelocity: 70,
						ticks: 200,
						origin: { x: 0, y: 0.7 },
						colors: colors,
						shapes: ['square', 'circle'],
					});

					// Right side
					confetti({
						particleCount: 80,
						angle: 120,
						spread: 55,
						startVelocity: 70,
						ticks: 200,
						origin: { x: 1, y: 0.7 },
						colors: colors,
						shapes: ['square', 'circle'],
					});
				}, 500);

				// Additional bursts
				const intervals = [1500, 2500, 3500];
				intervals.forEach((delay, i) => {
					setTimeout(() => {
						confetti({
							particleCount: 100,
							spread: 360,
							startVelocity: 60,
							ticks: 200,
							origin: { y: 0.5, x: Math.random() },
							colors: colors,
							shapes: ['square', 'circle'],
							scalar: 1.2,
						});
					}, delay);
				});
			}
		}
	}, [confetti, event]);

	return <canvas className="fixed inset-0 z-20" ref={canvasRef} />;
}
