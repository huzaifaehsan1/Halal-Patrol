replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType == Text.TEXT_NODE) {
    if (
      element.textContent.match(/sex/gi) ||
      element.textContent.match(/porn/gi) ||
      element.textContent.match(/fuck/gi) ||
      element.textContent.match(/piss/gi) ||
      element.textContent.match(/dick/gi) ||
      element.textContent.match(/asshole/gi) ||
      element.textContent.match(/bitch/gi) ||
      element.textContent.match(/bastard/gi)
    ) {
      element.parentElement.remove();
      alert("Haram");
    }
  }
}
