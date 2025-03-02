import ROUTES from "./routes";

export const DEFAULT_EMPTY = {
  title: "No Data Found",
  message:
    "Looks like the database is taking a nap. Wake it up with some new entries.",
  button: {
    text: "Add Data",
    href: ROUTES.HOME,
  },
};

export const DEFAULT_ERROR = {
  title: "Something Went Wrong",
  message: "Even our code can have a bad day. Give it another shot.",
  button: {
    text: "Retry Request",
    href: ROUTES.HOME,
  },
};

export const EMPTY_QUERIES = {
  title: "Queries Are Empty",
  message:
    "Looks like you haven’t created any queries yet. Start curating something extraordinary today",
  button: {
    text: "create query",
    href: ROUTES.ASK_QUERY,
  },
};