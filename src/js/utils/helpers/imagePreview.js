export default function imagePreview(input, image) {
  input.addEventListener("input", (e) => {
    const url = e.target.value;
    if (!url) {
      image.src = "/images/image.png";
      return;
    }
    console.log(url);
    console.log(image);

    try {
      new URL(url);
      image.src = url;
    } catch {
      console.log("Invalid URL");
      image.src = "/images/image.png";
      return;
    }
  });
}
