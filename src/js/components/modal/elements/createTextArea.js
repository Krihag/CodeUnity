export default function createTextArea(ele) {
  const container = document.createElement("div");
  const label = document.createElement("label");
  label.classList.add("md:text-lg");
  label.textContent = ele.text;
  const textarea = document.createElement("textarea");
  textarea.setAttribute(
    "class",
    "w-full border rounded mb-2 md:mb-4 mt-2 outline-none pl-3 resize-none h-24 2xl:h-28 py-4 text-sm md:text-base"
  );

  ele.name && (textarea.name = ele.name);
  ele.value && (textarea.value = ele.value);
  container.append(label, textarea);

  return container;
}
