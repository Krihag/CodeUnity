import Auth from "../index.js";
import headers from "../data/headers.js";

export default async function putRequest(endpoint) {
  const header = headers.authWithoutContent();
  const method = "PUT";

  const putReq = new Auth(method, header, endpoint);
  const response = await putReq.fetch();
  return response;
}
