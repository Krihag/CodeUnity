import storage from "../../../utils/storage.js";

export default async function loginSpecific(loginRequest) {
  try {
    const response = await loginRequest.fetch();
    if (!response) return null;
    const { accessToken, ...profileData } = response.data;
    storage.save("token", accessToken);
    storage.save("profile", profileData);
    window.location.href = "/profile/?name=" + profileData.name;
    return { accessToken, ...profileData };
  } catch (error) {
    console.error(error);
  }
}
