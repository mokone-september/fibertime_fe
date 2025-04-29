'use client';

import React from 'react';
import {
  createRouter,
  createRootRoute,
  createRoute,
  RouterProvider,
} from '@tanstack/react-router';
import TVScreen from './components/TVScreen';
import Login from './components/Login';
import PairingCode from './components/PairingCode';
import Connecting from './components/Connecting';
import Connected from './components/Connected';
import { AppProvider } from './context/AppContext';

// 1. Create a root route
const rootRoute = createRootRoute();

// 2. Define child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: TVScreen,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const pairingCodeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pairing-code',
  component: PairingCode,
});

const connectingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/connecting/$deviceId',
  component: Connecting,
});

const connectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/connected/$deviceId',
  component: Connected,
});

// 3. Build the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  pairingCodeRoute,
  connectingRoute,
  connectedRoute,
]);

// 4. Create the router
const router = createRouter({ routeTree });

// 5. Register router types (for TypeScript)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// App component
const App: React.FC = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
