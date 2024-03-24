

/**
 * An array of public routes
 * These routes are accessible to all users
 * @type {string[]}
 */
export const publicRoutes = [
  "/"
]

/**
 * An array of auth used routes
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/register",
  "/auth/login",
  "/auth/error",
]

/**
 * The prefix for API auth routes
 * This is used to separate the API routes from the rest of the application
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";


/**
 * The default login redirect
 * This is where the user will be redirected to after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";