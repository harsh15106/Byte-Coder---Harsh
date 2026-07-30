import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export const AppShell = ({ children }) => (
  <div className="min-h-screen bg-background text-text-primary">
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 px-4 py-6 xl:px-8">{children}</main>
      </div>
    </div>
  </div>
);
