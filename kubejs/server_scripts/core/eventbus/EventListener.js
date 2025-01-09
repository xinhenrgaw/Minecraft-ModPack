/**
 * @class
 * 
 * @param {Internal.Consumer_<IEvent>} callback 
 */
function EventListener(callback) {
  /**
   * @private
   * @type {Internal.Consumer_<IEvent>}
   */
  this.callback = callback;
}

EventListener.prototype.accept = function (event) {
  this.callback(event);
}

/**
 * @class
 */
function EventListenerBuilder() {
  /**
   * @private
   * @type {Internal.Consumer_<IEvent>}
   */
  this.callback;
}

/**
 * 
 * @param {Internal.Consumer_<IEvent>} callback 
 * @returns {EventListenerBuilder}
 */
EventListenerBuilder.prototype.setCallback = function (callback) {
  this.callback = callback;
  return this;
}

/**
 * 
 * @returns {EventListener}
 */
EventListenerBuilder.prototype.build = function () {
  return new EventListener(this.callback);
}

EventListenerBuilder.get = function () {
  return new EventListenerBuilder();
}