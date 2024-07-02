import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Vans from "./components/Vans";
import "./server";
import VansDetail from "./components/VansDetail";
import Header from "./components/Header";
import Layout from "./components/Layout";
import DashBoard from "./components/Hosts/DashBoard";
import Income from "./components/Hosts/Income";
import Reviews from "./components/Hosts/Reviews";
import HostLayout from "./components/Hosts/HostLayout";
import HostDetails from "./components/Hosts/HostDetails";
import HostVanDetail from "./components/Hosts/HostVanDetail";
import HostVanInfo from "./components/Hosts/HostVanInfo";
import HostVanPricing from "./components/Hosts/HostVanPricing";
import HostVanPhotos from "./components/Hosts/HostVanPhotos";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          {/* 
          
          it's the default route we want to render when the path of the parent matches.
          It gives us a chance to render an element inside the parents <Outlet /> at the same
          path as the parent route.
          
          
          */}
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VansDetail />} />
          </Route>
          {/* <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetail />} /> */}
          <Route path="host" element={<HostLayout />}>
            <Route path="" element={<DashBoard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostDetails />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route path="" element={<HostVanInfo />} />
              <Route path="price" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
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
