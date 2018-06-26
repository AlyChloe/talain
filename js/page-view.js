'use strict';

const Handlebars = require('handlebars');
const $ = require('jquery');
const homeTemplate = require('./pages/home.hbs');
const aboutTemplate = require('./pages/about.hbs');
const contactTemplate = require('./pages/contact.hbs');

const pageViewPrototype = {
    render: function () {
        const templateContainer = document.createElement('div');
        templateContainer.className = 'c-main';
        const data = {title: "My New Post", body: "This is my first post!"};
        templateContainer.innerHTML = homeTemplate(data);
        const mainElement = document.querySelector('main');
        mainElement.append(templateContainer);
    }
}

export const create = function (mainElement, state) {
    const view = Object.create(pageViewPrototype);
    view._mainElement = mainElement;
    view._template = aboutTemplate;
    view.state = state;

    return view;
}
