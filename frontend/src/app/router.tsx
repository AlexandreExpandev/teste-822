import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RootLayout } from '@/pages/layouts/RootLayout';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';

// Lazy load pages for code-splitting
const HomePage = lazy(() => import('@/pages/Home'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

/**
 * @router AppRouter
 * @summary Main application routing configuration using React Router.
 * It defines all the application routes, including layouts and lazy-loaded pages.
 * @type router-configuration
 * @category navigation
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner fullPage />}>
            <HomePage />
          </Suspense>
        ),
      },
      // Future routes can be added here
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<LoadingSpinner fullPage />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);

/**
 * @component AppRouter
 * @summary The main router provider component for the application.
 */
export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
