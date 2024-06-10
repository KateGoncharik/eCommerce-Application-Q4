import { ErrorBoundary } from 'react-error-boundary';

import { RootLayout } from '@/components/root-layout/';
import { AuthProtectedRoute } from '@/components/route/auth-protected-route';
import { AboutPage } from '@/pages/about-page';
import CatalogPage from '@/pages/catalog-page';
import ErrorPage from '@/pages/error-page';
import LoginPage from '@/pages/login-page';
import MainPage from '@/pages/main-page';
import NotFoundPage from '@/pages/not-found-page';
import ProductPage from '@/pages/product-page';
import RegistrationPage from '@/pages/registration-page';
import { UserProfilePage } from '@/pages/user-profile-page';
export const routes = [
  {
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: (
          <AuthProtectedRoute isForLoggedIn={false}>
            <LoginPage />
          </AuthProtectedRoute>
        ),
        path: '/login',
      },
      {
        element: (
          <AuthProtectedRoute isForLoggedIn={false}>
            <RegistrationPage />
          </AuthProtectedRoute>
        ),
        path: '/registration',
      },
      {
        children: [{ children: [{ element: <></>, path: ':subcategory' }], element: <></>, path: ':categoryName' }],
        element: <CatalogPage />,
        path: '/catalog',
      },
      {
        element: (
          <ErrorBoundary FallbackComponent={ErrorPage}>
            <ProductPage />
          </ErrorBoundary>
        ),
        path: 'catalog/product/:id',
      },
      {
        element: (
          <AuthProtectedRoute isForLoggedIn={true}>
            <UserProfilePage />
          </AuthProtectedRoute>
        ),
        path: '/profile',
      },
      { element: <NotFoundPage />, path: '*' },
      { element: <AboutPage />, path: '/about' },
    ],
    element: (
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <RootLayout />
      </ErrorBoundary>
    ),
    path: '/',
  },
];
