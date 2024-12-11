import { ReactNode } from "react";

type FormErrorMessageProps = {
  children: ReactNode;
}

export default function FormErrorMessage({ children }: FormErrorMessageProps) {
  return (
    <span className="flex justify-end text-red-600">{children}</span>
  )
}