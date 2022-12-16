import { multiply } from '@rewind-ui/utils';

export function Multiply(props: { a: number; b: number }) {
  return <div>{multiply(props.a, props.b)}</div>;
}
