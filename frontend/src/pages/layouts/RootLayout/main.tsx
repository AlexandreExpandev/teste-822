import { Outlet } from 'react-router-dom';
import { Globe } from 'lucide-react';

/**
 * @component RootLayout
 * @summary The main layout for the application, including a shared header and footer.
 * It uses React Router's Outlet to render nested routes.
 * @type layout-component
 */
export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center">
          <a href="/" className="flex items-center gap-2 font-bold">
            <Globe className="h-6 w-6 text-primary" />
            <span>Hello World Gen</span>
          </a>
        </div>
      </header>

      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>

      <footer className="border-t py-6 md:px-8 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ using React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};
