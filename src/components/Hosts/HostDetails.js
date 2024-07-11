import { Link, useLoaderData } from "react-router-dom";
import "../../server";
import { requireAuth } from "../LoaderError/requireAuth";
import { getHostVans } from "../../Loader/HostVanLoader";
import { useEffect, useState } from "react";
export async function hostVanLoader({ request }) {
  await requireAuth(request);
  return getHostVans();
}
function HostDetails() {
  // const [vans, setVans] = useState([]);
  // useEffect(() => {
  //   fetch("/api/host/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans))
  //     .catch((err) => console.log(err));
  // }, []);
  const vans = useLoaderData();
  console.log(vans);
  // const vans = useLoaderData();
  console.log("it is in the host details page");
  console.log(vans);
  const hostVansEla = vans.map((van) => (
    <Link to={`${van.id}`} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={` of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));
  return <h1>{hostVansEla}</h1>;
}
export default HostDetails;
