import { Suspense, useEffect, useState } from "react";
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
import "../server";
import { getVans } from "../api";
export function loader1({ params, request }) {
  console.log(request.url);
  return defer({ vans: getVans(params.id) });
}
function VansDetail() {
  const params = useParams();

  const location = useLocation();
  /* eslint-disable */
  // useEffect(() => {
  //   fetch(`/api/vans/${params.id}`)
  //     .then((response) => response.json())
  //     .then((data) => setdata(data.vans));
  // }, []);
  const van = useLoaderData();
  const search = location.state?.search || "";
  /* eslint-enable */
  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Await resolve={van.vans}>
          {(van) => {
            const element = van ? (
              <div className="van-detail">
                <img alt={van.name} src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price">
                  <span>${van.price}</span>/day
                </p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
              </div>
            ) : (
              <h1>Loading..</h1>
            );
            return element;
          }}
        </Await>
      </Suspense>
    </div>
  );
}
export default VansDetail;
