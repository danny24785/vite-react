import { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="bg-neutral-500 text-white p-3">
      {children}
    </header>
  )
}