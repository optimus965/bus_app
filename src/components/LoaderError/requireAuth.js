import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem("loggedin");
  const url = new URL(request.url).pathname;
  console.log("it is in the require auth");
  if (!isLoggedIn) {
    const response = redirect(
      `/login?message=you should login first.&redirectTo=${url}`
    );
    response.body = true;
    throw response;
  }
  return null;
}
