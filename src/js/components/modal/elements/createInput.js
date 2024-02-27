export default function input(ele) {
  const container = document.createElement("div");
  const label = document.createElement("label");

  label.classList.add("md:text-lg");
  const input = document.createElement("input");
  ele.name && (input.name = ele.name);
  ele.text && (label.textContent = ele.text);
  input.setAttribute(
    "class",
    "w-full border h-10 2xl:h-14 rounded mb-4 mt-2 outline-none pl-3 text-sm md:text-base"
  );
  ele.value && (input.value = ele.value);
  ele.placeholder && input.setAttribute("placeholder", ele.placeholder);
  container.append(label, input);
  return container;
}
