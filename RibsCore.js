class RibsCore {
  /**
   * function that return height of an element that is no displayed
   * @param element
   * @returns {Number}
   */
  static getHeight(element) {
    //if max height get value and delete if for a moment
    const maxHeight = window.getComputedStyle(element).getPropertyValue('max-height');

    if (maxHeight !== "none") {
      element.style.maxHeight = 'inherit';
    }

    element.style.display = 'block';

    let height = parseInt(window.getComputedStyle(element).getPropertyValue('height'));
    element.style.display = '';

    if (maxHeight !== "none") {
      element.style.maxHeight = maxHeight;
    }

    return height;
  }

  /**
   * this method do animation on height when displaying an element
   * if max height = none it show the element else this function hide it
   * @param element
   * @param duration
   */
  static toggleSlide(element, duration) {
    let maxHeight = 0;
    const maxHeightDiv = window.getComputedStyle(element).getPropertyValue('max-height');

    if (maxHeightDiv === 'none' || maxHeightDiv === '0px') {
      maxHeight = this.getHeight(element);
    }

    element.style.transition = `max-height ${duration/1000}s ease-in-out, padding ${duration/1000}s ease-in-out`;
    element.style.maxHeight = 0;
    element.style.display = 'block';
    element.style.overflow = 'hidden';

    if (maxHeight === 0) {
      element.style.padding = '0px';
    } else {
      element.style.removeProperty('padding');
    }

    setTimeout(function () {
      element.style.maxHeight = `${maxHeight}px`;
    }, 10);
  }

  /**
   * add an element arround a specified element. This function is like .wrap() in jQuery
   * @param element
   * @param newElement
   */
  static wrap(element, newElement, className = null) {
    const parentElement = element.parentNode;
    const wrapper = document.createElement(newElement);
    wrapper.className = className;

    parentElement.insertBefore(wrapper, element);
    parentElement.removeChild(element);
    wrapper.appendChild(element);
  }

  /**
   * method to get a wanted parent in parentsNodes of an element
   * @param element
   * @param wanted
   * @returns {*}
   */
  static parents(element, wanted) {
    for ( ; element && element !== document; element = element.parentNode) {
      if (this.checkWanted(wanted) === 'class' && element.classList.contains(wanted.split('.')[1])) {
        return element;
      } else if (this.checkWanted(wanted) === 'id' && element.id === wanted.split('#')[1]) {
        return element;
      }
    }

    return null;
  }

  /**
   * method to test if a wanter element is a class or an id
   * @param wanted
   * @returns {*}
   */
  static checkWanted(wanted) {
    if (wanted.indexOf('.') !== -1) {
      return 'class';
    } else if (wanted.indexOf('#') !== -1) {
      return 'id';
    }

    return null;
  }
}

export default (RibsCore);
