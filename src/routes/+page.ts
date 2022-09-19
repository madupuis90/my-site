import type { RouteParams } from './$types';

export function load({ params }: { params: RouteParams }) {
  return { content: 'the content of the page' };
}