import type { Action } from 'svelte/action';

export interface InViewOptions {
	root?: HTMLElement | null;
	rootMargin?: string;
	threshold?: number | number[];
	unobserveOnEnter?: boolean;
}

export interface ScrollDirection {
	vertical: 'up' | 'down' | null;
	horizontal: 'left' | 'right' | null;
}

export interface ObserverEventDetails {
	inView: boolean;
	entry: IntersectionObserverEntry;
	scrollDirection: ScrollDirection;
	observer: IntersectionObserver;
	node: HTMLElement;
}

export interface LifecycleEventDetails {
	observer: IntersectionObserver;
	node: HTMLElement;
}

interface InViewAttributes {
	'oninview_change'?: (event: CustomEvent<ObserverEventDetails>) => void;
	'oninview_enter'?: (event: CustomEvent<ObserverEventDetails>) => void;
	'oninview_leave'?: (event: CustomEvent<ObserverEventDetails>) => void;
	'oninview_init'?: (event: CustomEvent<LifecycleEventDetails>) => void;
}

export const inview: Action<HTMLElement, InViewOptions | undefined, InViewAttributes> = (
	node,
	options = {}
) => {
	const {
		root = null,
		rootMargin = '0px',
		threshold = 0,
		unobserveOnEnter = false
	} = options;

	let prevY = 0;
	let prevX = 0;
	let prevInView = false;

	const handleIntersect = (entries: IntersectionObserverEntry[]) => {
		const entry = entries[0];
		const currentY = entry.boundingClientRect.y;
		const currentX = entry.boundingClientRect.x;
		const isInView = entry.isIntersecting;

		const scrollDirection: ScrollDirection = {
			vertical: prevY > currentY ? 'down' : prevY < currentY ? 'up' : null,
			horizontal: prevX > currentX ? 'right' : prevX < currentX ? 'left' : null
		};

		prevY = currentY;
		prevX = currentX;

		const eventDetails: ObserverEventDetails = {
			inView: isInView,
			entry,
			scrollDirection,
			observer,
			node
		};

		// Dispatch change event
		node.dispatchEvent(
			new CustomEvent('inview_change', {
				detail: eventDetails
			})
		);

		// Dispatch enter/leave events
		if (isInView && !prevInView) {
			node.dispatchEvent(
				new CustomEvent('inview_enter', {
					detail: eventDetails
				})
			);
		} else if (!isInView && prevInView) {
			node.dispatchEvent(
				new CustomEvent('inview_leave', {
					detail: eventDetails
				})
			);
		}

		prevInView = isInView;

		// Unobserve if configured
		if (unobserveOnEnter && isInView) {
			observer.unobserve(node);
		}
	};

	const observer = new IntersectionObserver(handleIntersect, {
		root,
		rootMargin,
		threshold
	});

	observer.observe(node);

	// Dispatch init event
	node.dispatchEvent(
		new CustomEvent('inview_init', {
			detail: { observer, node }
		})
	);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};