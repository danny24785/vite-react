import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Navigation from '../components/navigation/Navigation';
import NavigationItem from '../components/navigation/NavigationItem/NavigationItem';

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation>
        <NavigationItem to="/">
          Home
        </NavigationItem>

        <NavigationItem to="/about">
          About
        </NavigationItem>

        <NavigationItem to="/existing-form">
          Existing Form
        </NavigationItem>
      </Navigation>
      
      <main className="main-content">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})