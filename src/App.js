import {
  BrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Vans, { loader } from "./components/Vans";
import "./server";
import VansDetail, { loader1 } from "./components/VansDetail";
import Header from "./components/Header";
import Layout from "./components/Layout";
import DashBoard, { loaderDash } from "./components/Hosts/DashBoard";
import Income from "./components/Hosts/Income";
import Reviews from "./components/Hosts/Reviews";
import HostLayout from "./components/Hosts/HostLayout";
import HostDetails, { hostVanLoader } from "./components/Hosts/HostDetails";
import HostVanDetail, {
  hostVanDetailLoader,
} from "./components/Hosts/HostVanDetail";
import HostVanInfo from "./components/Hosts/HostVanInfo";
import HostVanPricing from "./components/Hosts/HostVanPricing";
import HostVanPhotos from "./components/Hosts/HostVanPhotos";
import PageNotFound from "./components/PageNotFound";
import Login, { loaderc, loginaction } from "./components/Login";
import VansError from "./components/LoaderError/VansError";
import { requireAuth } from "./components/LoaderError/requireAuth";

//new Routers were introduced that support the new data apis:
// createBrowserRoutere
// createMemoryRouter
// createHashRouter

// following routers  do not support the data Apis:

// <BrowserRouter>
// <MemoryRouter>
// <HashRouter>
// <NativeRouter>
// <StaticRouter>
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="*" element={<PageNotFound />} />
      <Route
        path="login"
        element={<Login />}
        loader={loaderc}
        action={loginaction}
      />
      <Route path="" element={<HomePage />} />

      <Route path="about" element={<AboutPage />} />
      {/* 
  
  it's the default route we want to render when the path of the parent matches.
  It gives us a chance to render an element inside the parents <Outlet /> at the same
  path as the parent route.
  
  
  */}
      <Route path="vans">
        <Route
          index
          element={<Vans />}
          errorElement={<VansError />}
          loader={loader}
        />
        <Route path=":id" element={<VansDetail />} loader={loader1} />
      </Route>
      {/* <Route path="vans" element={<Vans />} />
  <Route path="vans/:id" element={<VansDetail />} /> */}
      <Route
        path="host"
        element={<HostLayout />}
        loader={async ({ request }) => await requireAuth(request)}
      >
        <Route path="" element={<DashBoard />} loader={loaderDash} />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
        <Route path="vans" element={<HostDetails />} loader={hostVanLoader} />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route
            path=""
            element={<HostVanInfo />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
          <Route
            path="price"
            element={<HostVanPricing />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
        </Route>
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

// this is one way of doing routing
{
  /* <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/vans" element={<Vans />} />
    <Route path="/vans/:id" element={<VansDetail />} />
  </Routes>
</BrowserRouter>; */
}

// return (
//   <BrowserRouter>
//     <Routes>
//       <Route path="" element={<Layout />}>
//         <Route path="*" element={<PageNotFound />} />
//         <Route path="login" element={<Login />} />
//         <Route path="" element={<HomePage />} />

//         <Route path="about" element={<AboutPage />} />
//         {/*

//         it's the default route we want to render when the path of the parent matches.
//         It gives us a chance to render an element inside the parents <Outlet /> at the same
//         path as the parent route.

//         */}
//         <Route path="vans">
//           <Route index element={<Vans />} />
//           <Route path=":id" element={<VansDetail />} />
//         </Route>
//         {/* <Route path="vans" element={<Vans />} />
//         <Route path="vans/:id" element={<VansDetail />} /> */}
//         <Route path="host" element={<HostLayout />}>
//           <Route path="" element={<DashBoard />} />
//           <Route path="income" element={<Income />} />
//           <Route path="vans" element={<HostDetails />} />
//           <Route path="reviews" element={<Reviews />} />
//           <Route path="vans/:id" element={<HostVanDetail />}>
//             <Route path="" element={<HostVanInfo />} />
//             <Route path="price" element={<HostVanPricing />} />
//             <Route path="photos" element={<HostVanPhotos />} />
//           </Route>
//         </Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
