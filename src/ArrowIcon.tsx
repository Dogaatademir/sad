type Direction = 'up-right' | 'down' | 'left' | 'turn-right';

const paths: Record<Direction, string> = {
  'up-right': 'M5 19 19 5M5 5h14v14',
  down: 'M12 4v16m-7-7 7 7 7-7',
  left: 'M20 12H4m7-7-7 7 7 7',
  'turn-right': 'M5 4v11h14m-5-5 5 5-5 5',
};

export function ArrowIcon({ direction = 'up-right' }: { direction?: Direction }) {
  return <span className="arrow-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" focusable="false">
      <path d={paths[direction]} />
    </svg>
  </span>;
}
