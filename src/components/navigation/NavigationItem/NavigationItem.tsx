import { Link } from '@tanstack/react-router';
import './NavigationItem.css';

type NavigationItemProps = {
  to: string
  children: React.ReactNode
}

export default function NavigationItem({ to, children }: NavigationItemProps) {
  return (
    <Link to={to} className="bg-neutral-500 text-white py-1 px-2 rounded-md">
      {children}
    </Link>
  )
}