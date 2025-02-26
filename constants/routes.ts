const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUERY: "/ask-query",
  PROFILE: (id: string) => `/profile/${id}`,
  QUERIES: "/queries",
  SIGN_IN_WITH_OAUTH: `signin-with-oauth`,
};

export default ROUTES;
