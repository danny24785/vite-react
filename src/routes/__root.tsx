import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="main-navigation">
        <Link to="/" className="main-navigation__item">
          Home
        </Link>{' '}
        <Link to="/about" className="main-navigation__item">
          About
        </Link>
      </div>
      
      <main className="main-content">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})