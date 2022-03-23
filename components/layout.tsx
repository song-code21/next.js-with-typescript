import { ReactElement, ReactNode } from "react"

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps): ReactElement{
  return (
    <>
      <div>{children}</div>
    </>
  );
}
