/**
 * Represents an event listener that can be added to an element.
 */
/**
 * Represents an event listener that can be attached to an HTML element.
 */
export default class EventListener {
  /**
   * Creates a new instance of EventListener.
   * @param {HTMLElement} element - The element to attach the event listener to.
   * @param {string} type - The type of event to listen for. (click by default)
   * @param {Function} callback - The callback function to be executed when the event is triggered. (null by default)
   */
  constructor(element, type = "click", callback = null) {
    this.element = element;
    this.type = type;
    this.callback = callback;
  }

  /**
   * Adds the event listener to the element.
   * @param {string} - The type of event to listen for.
   * @param {Function}  - The callback function to be executed when the event is triggered.
   */
  add(type = this.type, callback = this.callback) {
    try {
      if (!callback) throw new Error("No callback function provided.");

      if (!this.element) throw new Error("No element provided.");
      this.element.addEventListener(type, callback);
    } catch (error) {
      console.error(error.message);
    }
  }

  /**
   * Removes the event listener from the element.
   * @param {string} [type=this.type] - The type of event to remove.
   * @param {Function} [callback=this.callback] - The callback function to be removed.
   */
  remove(type = this.type, callback = this.callback) {
    this.element.removeEventListener(type, callback);
  }

  /**
   * Submits a form and executes the provided callback function.
   * @param {Function}  - The callback function to be executed when the form is submitted (usually an auth request).
   * set to this.callback by default. but can be overridden.
   */
  submitForm(authRequest = this.callback, tags = null, confirmMessage = null) {
    /**
     * Callback function for form submission.
     * @param {Event} e - The submit event object.
     */
    function submitCallback(e) {
      e.preventDefault();

      tags && (tags = tags.getValue());

      try {
        if (!authRequest) throw new Error("No authRequest function provided.");
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        if (data.hasOwnProperty("media") && data.media !== "") {
          data.media = { url: data.media, alt: "user media" };
        } else delete data.media;

        if (data.hasOwnProperty("avatar") && data.avatar !== "") {
          data.avatar = { url: data.avatar, alt: "user avatar" };
        } else delete data.avatar;

        if (data.hasOwnProperty("banner") && data.banner !== "") {
          data.banner = { url: data.banner, alt: "user banner" };
        } else delete data.banner;

        tags && (data.tags = tags);

        console.log(data);
        authRequest(data, confirmMessage);
        form.reset();
      } catch (error) {
        console.error(error.message);
      }
    }
    this.add("submit", submitCallback);
  }
}
