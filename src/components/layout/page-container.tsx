import { MainNav } from "./main-nav";

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="pt-16">{children}</div>
    </div>
  );
}
