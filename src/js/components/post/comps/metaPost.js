export default function metaPost(body) {
    const metaPostElement = document.querySelector("#metaPost");
    if (metaPostElement) {
        let truncatedContent = body.textContent;
        if (truncatedContent.length > 150) {
            truncatedContent = truncatedContent.substring(0, 147) + "...";
        }
        metaPostElement.content = truncatedContent;
    }
}