'use strict';

import * as PageView from './page-view';
import * as PageState from './page-state';

document.addEventListener('DOMContentLoaded', function () {
    const headerElement = document.querySelector('.js-header-link');
    const mainElement = document.querySelector('.c-content');
    const footerElement = document.querySelector('.c-footer');
    const view = PageView;
    const state = PageState.create();
    view.create(headerElement, mainElement, footerElement, state).render();
});
