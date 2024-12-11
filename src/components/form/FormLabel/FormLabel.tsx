import { ReactNode } from 'react';

type FormLabelProps = {
  children: ReactNode;
}

export default function FormLabel({ children }: FormLabelProps) {
  return (
    <label className="flex justify-start">{children}</label>
  )
}
