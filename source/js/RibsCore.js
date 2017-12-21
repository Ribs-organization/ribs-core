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
}

export default (RibsCore);
