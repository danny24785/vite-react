import { ReactNode } from 'react'

type FormInputContainerProps = {
  children: ReactNode;
}

export default function FormInputContainer({ children }: FormInputContainerProps) {
  return (
    <div className="flex flex-col gap-1 justify-start">
      {children}
    </div>
  )
}