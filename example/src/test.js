function stringToLowerCase(str) {
  if (typeof str === "string") {
    return str.toLowerCase();
  } else {
    return "";
  }
}
function getXpath(element) {
  console.log(element);
  let xpath = "";
  for (
    let me = element, k = 0;
    me && me.nodeType === 1;
    element = element.parentNode, me = element, k += 1
  ) {
    let i = 0;
    while ((me = me.previousElementSibling)) {
      if (me.tagName == element.tagName) {
        i += 1;
      }
    }
    const elementTag = stringToLowerCase(element.tagName);
    let id = i + 1;
    id > 1 || k === 0 ? (id = "[" + id + "]") : (id = "");
    xpath = "/" + elementTag + id + xpath;
  }

  return xpath;
}

function getDOMFromXPath(xpath) {
  const result = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  const node = result.singleNodeValue;
  return node;
}
const oldAddEventListener = EventTarget.prototype.addEventListener;

EventTarget.prototype.addEventListener = function (type, listener, options) {
  console.log("yes i now you ", type);
  oldAddEventListener.call(
    this,
    type,
    (e) => {
      if (type === "click") {
        const xpathForTarget = getXpath(e.target);
        console.log("xpathForTarget is", xpathForTarget);
      }
      listener(e);
    },
    options
  );
};
