import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
}

function SubmitButton({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const combinedClassName = `bg-pink-500 text-white font-semibold h-12 mt-10 border-3 outline-pink-600 transition hover:-translate-y-1 active:translate-y-0 rounded-lg ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

export default SubmitButton;
