import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../server";
function VansDetail() {
  const params = useParams();
  const [van, setdata] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setdata(data.vans));
  }, [params.id]);
  console.log(params);
  return (
    <div className="van-detail-container">
      {van ? (
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
        <h2>Loading...</h2>
      )}
    </div>
  );
}
export default VansDetail;
