import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function mergeClassNames(...props: clsx.ClassValue[]) {
  return twMerge(clsx(...props));
}
