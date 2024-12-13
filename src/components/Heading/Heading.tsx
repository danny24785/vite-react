import mergeClassNames from '../../functions/utils/MergeClassNames';
import { HeadingLevel } from '../../types/enums/HeadingLevel.enum';

type HeadingProps = {
  children: string;
  headingLevel: HeadingLevel;
}

export default function Heading({ children, headingLevel = HeadingLevel.h2 }: HeadingProps) {
  return (
    <h1 className={mergeClassNames(
      "max-w-[300px] mx-auto flex justify-center w-full",
      { 
        'text-3xl mt-4 mb-1': headingLevel === HeadingLevel.h1,
        'text-2xl  mb-4': headingLevel === HeadingLevel.h2,
        'text-xl mb-3': headingLevel === HeadingLevel.h3,
      })}
    >
      {children}
    </h1>
  )
}