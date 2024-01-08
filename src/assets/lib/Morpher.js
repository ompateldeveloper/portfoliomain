export default class Morpher {
    constructor() {
      this.a = null;
    }
  
    lerpClipPaths(b, c, d) {
      const e = b.map((f, g) => ({
        x: f.x + (c[g].x - f.x) * d,
        y: f.y + (c[g].y - f.y) * d,
      }));
  
      return e.reduce((f, g, h) => {
        return f + `${h === 0 ? 'polygon(' : ' '}${g.x}% ${g.y}%${h === b.length - 1 ? ')' : ','}`;
      }, '');
    }
  
    animateClipPath(element, initialArray, finalArray, duration) {
      if (!this.a) this.a = performance.now();
      const progress = Math.min(1, (performance.now() - this.a) / duration);
  
      const alpha = progress;
  
      const interpolatedClipPath = this.lerpClipPaths(initialArray, finalArray, alpha);
  
      element.style.clipPath = interpolatedClipPath;
  
      if (progress < 1) {
        requestAnimationFrame(() => this.animateClipPath(element, initialArray, finalArray, duration));
      } else {
        this.a = null;
      }
    }
  
    fromTo(selector, initialArray, finalArray, duration) {
      const element = document.querySelector(selector);
      if (!element) {
        console.error(`Element with selector "${selector}" not found.`);
        return;
      }
  
      this.animateClipPath(element, initialArray, finalArray, duration);
    }
  
    reverseFromTo(selector, initialArray, finalArray, duration) {
      const element = document.querySelector(selector);
      if (!element) {
        console.error(`Element with selector "${selector}" not found.`);
        return;
      }
  
      const reversedInitialArray = finalArray.slice();
      const reversedFinalArray = initialArray.slice();
  
      this.animateClipPath(element, reversedInitialArray, reversedFinalArray, duration);
    }
  
    clickFromTo(selector, initialArray, finalArray, duration) {
      const element = document.querySelector(selector)
      element.addEventListener("click", () => {
        this.fromTo(selector, initialArray, finalArray, duration);
      });
    }
  }
  