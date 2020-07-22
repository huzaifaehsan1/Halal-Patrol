replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType == Text.TEXT_NODE) {
    if (
      //element.textContent.match(/sex/gi) ||
      element.textContent.match(/corona/gi)
    ) {
      element.parentElement.remove();
      alert("Haram");
    }
  }
}
