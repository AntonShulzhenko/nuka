import isTouchDevice from '../helpers/detectTouch';

class ResponsiveTabs {
  constructor(element, props) {
    this.element = document.querySelector(element);
    if(!this.element) return;

    this.container = this.element.querySelector('.js-container');
    this.tabsList = this.element.querySelector('.js-tabs-list');
    this.tabsToggleButtons = [...this.element.querySelectorAll('.js-tab-toggle')];
    this.accordionToggleButtons = [...this.element.querySelectorAll('.js-accordion-toggle')];
    this.contentContainers = [...this.element.querySelectorAll('.js-content')];
    this.activeClassName = 'is-active';
    this.hiddenClassName = 'is-hidden';
    this.defaults = {
      activeTab: 0,
      breakpoint: 767
    };
    this.props = Object.assign({}, this.defaults, props);
    this.toggleButtons = null;

    this.init();
  }

  removeElementsClassName(elementsArray, className) { // eslint-disable-line
    elementsArray.forEach(element => {
      element.classList.remove(className);
    });
  }

  setMaximumContentHeight() {
    if(window.innerWidth > this.props.breakpoint) {
      const contentHeights = this.contentContainers.map(content => content.offsetHeight);
      const maxHeight = Math.max( ...contentHeights );
      this.container.style.height = `${maxHeight}px`;
    } else {
      this.container.removeAttribute('style');
    }
  }

  setInitialActiveTab() {
    this.toggleButtons[this.props.activeTab].classList.add(this.activeClassName);
    this.contentContainers[this.props.activeTab].classList.add(this.activeClassName);
  }

  // setActiveTab(tabs, activeContent) {
  //   tabs.forEach(tab => {
  //     if(tab.getAttribute('rel') === activeContent) {
  //       tab.classList.add(this.activeClassName);
  //     } else {
  //       tab.classList.remove(this.activeClassName);
  //     }
  //   });
  // }

  // setActiveTabOnResize() {
  //   const activeContent = this.contentContainers.filter(content => content.classList.contains(this.activeClassName));
  //   const dataContent = activeContent ? activeContent[this.props.activeTab].getAttribute('data-content') : null;
  //
  //   if((window.innerWidth > this.props.breakpoint) && dataContent) {
  //     this.setActiveTab(this.tabsToggleButtons, dataContent);
  //   } else {
  //     this.setActiveTab(this.accordionToggleButtons, dataContent);
  //   }
  // }

  toggleTabsVisibility() {
    if(window.innerWidth > this.props.breakpoint) {
      this.tabsList.classList.remove(this.hiddenClassName);
      this.accordionToggleButtons.forEach(button => {
        button.classList.add(this.hiddenClassName);
      });
    } else {
      this.tabsList.classList.add(this.hiddenClassName);
      this.accordionToggleButtons.forEach(button => {
        button.classList.remove(this.hiddenClassName);
      });
    }
  }

  toggleTabs() {
    const eventType = isTouchDevice() ? 'touchstart' : 'click';

    this.toggleButtons = (window.innerWidth > this.props.breakpoint)
      ? [...this.tabsToggleButtons]
      : [...this.accordionToggleButtons];

    this.toggleButtons.forEach(toggleButton => {
      toggleButton.addEventListener(eventType, (e) => {
        const {target} = e;
        const rel = target.getAttribute('rel');
        const activeTab = this.element.querySelector(`[data-content="${rel}"]`);

        if(window.innerWidth > this.props.breakpoint) {
          this.removeElementsClassName(this.contentContainers, this.activeClassName);
          this.removeElementsClassName(this.toggleButtons, this.activeClassName);
          target.classList.add(this.activeClassName);
          activeTab.classList.add(this.activeClassName);
        } else {
          target.classList.toggle(this.activeClassName);
          activeTab.classList.toggle(this.activeClassName);
        }
      });
    });
  }

  resizeHandler() {
    window.addEventListener('resize', () => {
      this.setMaximumContentHeight();
      this.toggleTabsVisibility();
      this.toggleTabs();
      // this.setActiveTabOnResize();
    });
  }

  init() {
    this.setMaximumContentHeight();
    this.toggleTabsVisibility();
    this.toggleTabs();
    this.resizeHandler();
    this.setInitialActiveTab();
  }
}

export default ResponsiveTabs;
