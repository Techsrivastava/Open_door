import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

// Supported languages
export const locales = ['en', 'hi'];

// Create the internationalization middleware
const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: 'en',
  // Persist the user's language preference in a cookie
  localePrefix: 'as-needed',
  localeDetection: true,
});

// Apply the middleware to all routes
export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

// Configure the middleware to match specific paths
export const config = {
  // Match all pathnames except for
  // - API routes (/api)
  // - Static files (/static, /favicon.ico, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};