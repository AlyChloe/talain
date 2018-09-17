'use strict';

import * as PageView from './page-view';
import * as PageState from './page-state';

document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const view = PageView;
    const state = PageState.create();
    view.create(body, state).render();
});
