export default function registerMedia() {
    const profileImageInput = document.querySelector("#profileImage");
    const profileImagePreview = document.querySelector("#profileImagePreview");
    const bannerImageInput = document.querySelector("#profileBanner");
    const bannerImagePreview = document.querySelector("#bannerImagePreview");

    profileImageInput.addEventListener("change", function() {
        const imageURL = profileImageInput.value;
        profileImagePreview.src = imageURL;
    });

    bannerImageInput.addEventListener("change", function() {
        const imageURL = bannerImageInput.value;
        bannerImagePreview.src = imageURL;
    });
}
