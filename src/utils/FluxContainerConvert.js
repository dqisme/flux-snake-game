export default class FluxContainerConvert {
  static convert(containerClass) {
    const tmp = containerClass;
    containerClass = function(...args) {
      return new tmp(...args);
    };
    containerClass.prototype = tmp.prototype;
    containerClass.getStores = tmp.getStores;
    containerClass.calculateState = tmp.calculateState;
    return containerClass;
  }
}
