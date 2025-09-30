import { Link } from 'react-router-dom';
import { Button } from '@/core/components/Button';

/**
 * @page NotFoundPage
 * @summary A page displayed when a user navigates to a route that does not exist.
 * @type page-component
 * @category feedback
 */
export const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-2xl font-medium text-foreground">Page Not Found</p>
      <p className="mt-2 text-muted-foreground">The page you are looking for does not exist.</p>
      <Button asChild className="mt-6">
        <Link to="/">Go back to Home</Link>
      </Button>
    </div>
  );
};
