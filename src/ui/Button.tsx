import React from 'react';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const { type = 'button', className, ...restProps } = props;
  return <button type={type} {...restProps} className={`bg-red-400 ${className}`} />;
}
