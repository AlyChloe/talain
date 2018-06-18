'use strict';

require('handlebars');
const aboutTemplate = require('./pages/about.hbs');
const contactTemplate = require('./pages/contact.hbs');

const pageViewPrototype = {
    render: function () {

    }
}

export const create = function () {
    const view = Object.create(pageViewPrototype);

    return view;
}
