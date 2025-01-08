import { MainNav } from "./main-nav";
import { LanguageSwitcher } from "../language-switcher";

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="pt-20">{children}</div>
      <LanguageSwitcher />
    </div>
  );
}
