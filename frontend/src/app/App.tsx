import { AppProviders } from './providers';
import { AppRouter } from './router';

/**
 * @component App
 * @summary The root component of the application, which composes the
 * global providers and the application router.
 * @type root-component
 */
function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;
