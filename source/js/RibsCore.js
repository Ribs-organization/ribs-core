import 'babel-polyfill';

class RibsCore {
  /**
   * @param element
   * @returns {Number}
   * function that return height of an element that is no displayed
   */
  static getHeight(element) {
    element.style.display = 'block';
    let height = parseInt(window.getComputedStyle(element).getPropertyValue('height'));
    element.style.display = '';

    return height;
  }

  /**
   * @param element
   * @param duration
   * this method do animation on height when displaying an element
   * if max height = none it show the element else this function hide it
   */
  static toggleSlide(element, duration) {
    let maxHeight = 0;

    if (window.getComputedStyle(element).getPropertyValue('max-height') === 'none') {
      maxHeight = this.getHeight(element);
    }

    element.style.transition = 'max-height 0.5s ease-in-out';
    element.style.maxHeight = 0;
    element.style.display = 'block';

    setTimeout(function() {
      element.style.maxHeight = `${maxHeight}px`;
    }, duration)
  }
}

export default (RibsCore);
