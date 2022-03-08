import { Button } from 'react-bootstrap';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  number,
  isCurrent = false,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button size="sm" variant="primary" className="w-8">
        {number}
      </Button>
    );
  }

  return (
    <Button size="sm" variant="secondary" className="w-8">
      {number}
    </Button>
  );
}
