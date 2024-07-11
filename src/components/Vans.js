import React, { Suspense, useEffect, useState } from "react";
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { getVans } from "../api";

/**
 * {
 * id: "1",
 * name: "Modest Explorer",
 * price: 60,
 * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
 * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
 * type: "simple"
 * }
 */
// export function loader() {
//   return getVans();
// }
export function loader() {
  return defer({ vans: getVans() });
}
export default function Vans() {
  // const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  // const [loading, setLoading] = useState(false);
  const vansPromise = useLoaderData();
  // useEffect(() => {
  //   async function loadVans() {
  //     setLoading(true);
  //     const data = await getVans();
  //     setLoading(false);
  //     setVans(data);
  //   }
  //   loadVans();
  // // }, []);
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  // useEffect(() => {
  //   fetch("/api/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  // }, []);
  // const displayedVans = typeFilter
  //   ? vans.filter((van) => van.type === typeFilter)
  //   : vans;
  // const vanElements = displayedVans.map((van) => (
  //   <div key={van.id} className="van-tile">
  //     <Link
  //       to={`/vans/${van.id}`}
  //       state={{ search: `?${searchParams.toString()}` }}
  //     >
  //       <img alt={van.name} src={van.imageUrl} />
  //       <div className="van-info">
  //         <h3>{van.name}</h3>
  //         <p>
  //           ${van.price}
  //           <span>/day</span>
  //         </p>
  //       </div>
  //       <i className={`van-type ${van.type} selected`}>{van.type}</i>
  //     </Link>
  //   </div>
  // ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Await resolve={vansPromise.vans}>
          {(vans) => {
            const displayedVans = typeFilter
              ? vans.filter((van) => van.type === typeFilter)
              : vans;
            const vanElements = displayedVans.map((van) => (
              <div key={van.id} className="van-tile">
                <Link
                  to={`/vans/${van.id}`}
                  state={{ search: `?${searchParams.toString()}` }}
                >
                  <img alt={van.name} src={van.imageUrl} />
                  <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>
                      ${van.price}
                      <span>/day</span>
                    </p>
                  </div>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
              </div>
            ));

            return (
              <>
                <div className="van-list-filter-buttons">
                  <button
                    className="van-type simple"
                    onClick={() => setSearchParams({ type: "simple" })}
                  >
                    simple
                  </button>
                  <button
                    className="van-type luxury"
                    onClick={() => setSearchParams({ type: "luxury" })}
                  >
                    luxury
                  </button>
                  <button
                    className="van-type rugged"
                    onClick={() => setSearchParams({ type: "rugged" })}
                  >
                    rugged
                  </button>
                  {typeFilter ? (
                    <button
                      className="van-type clear"
                      onClick={() => setSearchParams({})}
                    >
                      clear
                    </button>
                  ) : null}
                  {/* <Link to="?type=simple" className="van-type simple">
          Simple
        </Link>

        <Link to="?type=rugged" className="van-type rugged">
          rugged
        </Link>
        <Link to="?type=luxury" className="van-type luxury">
          luxury
        </Link>
        <Link to="">Clear</Link> */}
                </div>

                <div className="van-list">{vanElements}</div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
