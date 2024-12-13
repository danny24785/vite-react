import { ReactNode } from 'react';

type NavigationProps = {
  children: ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
  return (
    <div className="flex gap-1 p-3 bg-neutral-300">
      {children}
    </div>
  )
}