((w, d) => {
  const ChristmasCard = class ChristmasCard {
    constructor() {
      this._item = d.querySelector("header");
      this.init();
    };
    init() {
      this.handleCtaLabel();
      w.addEventListener('scroll', this.onScroll.bind(this));
    };
    onScroll(scrollEvt) {
      const headerElem = d.querySelector("header");
      const paddingTop = parseInt(w.getComputedStyle(d.querySelector("main")).paddingBlockStart);
      const headerStickyPos = parseInt(w.getComputedStyle(headerElem).insetBlockStart);
      const sectionMarginTop = parseInt(w.getComputedStyle(d.querySelector("section")).marginBlockStart);
      const scrollTarget = paddingTop - headerStickyPos + sectionMarginTop;
      if (w.scrollY >= scrollTarget) {
        headerElem.classList.add("overlapped");
      } else {
        headerElem.classList.remove("overlapped");
      }
    };
    handleCtaLabel() {
      const ctaElem = d.querySelector("p > span");
      if (w.matchMedia('(hover:hover) and (pointer:fine)')) {
        ctaElem.textContent = "click";
      }
    };
    get item() {
      return this._item;
    }
  };
  w.ChristmasCard = new ChristmasCard();
})(window, document);