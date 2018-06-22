'use strict';

import * as PageView from './page-view';
import * as PageState from './page-state';

document.addEventListener('DOMContentLoaded', function () {
    const mainElement = document.querySelector('.c-main');
    const view = PageView;
    const state = PageState.create();
    view.create(mainElement, state).render();
});
