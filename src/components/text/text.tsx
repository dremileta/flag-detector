import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface TextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const Text = ({ children, ...rest }: TextProps) => {
  return <p {...rest}>{children}</p>;
};
