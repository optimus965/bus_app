export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error({
      message: "failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    });
  }
  const data = await res.json();
  console.log("this is in the getHost vans");
  console.log(res);
  return data.vans;
}
