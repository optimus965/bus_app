import React from "react";
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../api";
export function loaderc({ params, request }) {
  const url = new URL(request.url).searchParams.get("message");
  return url;
}
// export async function loginaction(obj) {
//   console.log(obj);
//   return null;
// }
export async function fakeLoginUser(creds) {
  if (creds.email.length >= 8 && creds.password.length >= 8) {
    return true;
  }
  throw new Error("Couldn't log the user in");
}
export async function loginaction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const url = new URL(request.url).searchParams.get("redirectTo") || "/host";
  console.log("in the login function");
  console.log(url);
  // const data = await loginUser({ email, password });
  // console.log(data);

  // return redirect("/host");

  try {
    const user = await fakeLoginUser({ email, password });

    const response = redirect(`${url}`);
    response.body = true;
    return response;
  } catch (err) {
    localStorage.setItem("loggedin", false);
    return err.message;
  }
  return null;
}
export default function Login() {
  // const [loginFormData, setLoginFormData] = React.useState({
  //   email: "",
  //   password: "",
  // });
  const ms = useLoaderData();
  const error = useActionData();
  const navigation = useNavigation();
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   loginUser(loginFormData).then((data) => console.log(data));
  //   console.log(loginFormData);
  //   loginFormData.email = "";
  //   loginFormData.password = "";
  // }

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <h1 className="red">{ms}</h1>
      <h3 className="red">{error}</h3>
      {/* <form onSubmit={handleSubmit} className="login-form"> */}
      {/* replace is used when the user logged in successfully when he click back it will be again redirect you to login page
      instead we can use 'replace' which will skip the current part  */}
      <Form method="post" className="login-form" replace>
        <input
          name="email"
          // onChange={handleChange}
          type="email"
          placeholder="Email address"
          // value={loginFormData.email}
        />
        <input
          name="password"
          // onChange={handleChange}
          type="password"
          placeholder="Password"
          // value={loginFormData.password}
        />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in" : "Log in"}
        </button>
      </Form>
      {/* </form> */}
    </div>
  );
}
