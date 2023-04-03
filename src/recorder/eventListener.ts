import eventMap from "./eventRegister";
import { getXPath } from "xpath-generator";

const oldAddEventListener = EventTarget.prototype.addEventListener;

EventTarget.prototype.addEventListener = function (
  this: EventTarget,
  type: string,
  listener: (event: Event) => void,
  options?: boolean | AddEventListenerOptions
): void {
  const valuesShouldBeRecord = eventMap.get(type);
  oldAddEventListener.call(
    this,
    type,
    (e: Event) => {
      const xpathForTarget = getXPath();
      console.log("xpathForTarget is", xpathForTarget);
      listener(e);
    },
    options
  );
};
