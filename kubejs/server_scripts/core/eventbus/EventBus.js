/**
 * @class
 * 
 * @template T
 */
function EventBus() {
  /**
   * @type {Map<Function, Array<EventListener>>}
   */
  this.eventListenerMap = new Map();
}

/**
 * 
 * @param {T} event 
 * @param {Internal.Consumer_<InstanceType<T>>} callback 
 */
EventBus.prototype.addListener = function (event, callback) {
  let eventClass = event.prototype;
  if (!this.eventListenerMap.has(eventClass)) {
    this.eventListenerMap.set(eventClass, []);
  } else {
    let listeners = this.eventListenerMap.get(eventClass);
    listeners.push(EventListenerBuilder.get().setCallback(callback).build());
  }
}

/**
 * 
 * @param {Internal.Consumer_<InstanceType<T>>} event 
 */
EventBus.prototype.post = function (event) {
  let eventType = this.eventListenerMap.get(Object.getPrototypeOf(event));
  if (!this.eventListenerMap.has(eventType)) return;

  this.eventListenerMap.get(eventType).forEach(listener => listener.accept(event));

}