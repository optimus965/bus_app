import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const { currentVan } = useOutletContext();
  return (
    <section className="host-van-price">Price :${currentVan.price}</section>
  );
}
export default HostVanPricing;
