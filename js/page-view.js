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
        templateContainer.innerHTML = this._template(data);
        const mainElement = document.querySelector('main');

        this._removePreviousView(); 
        mainElement.append(templateContainer);
    },

    _onClickChangeTemplate: function(e) {
        this._template = this._getTemplate(e);
        this.render();
    },

    _getTemplate: function(e) {
        const clickedTemplate = e.target.dataset.link;

        if (clickedTemplate === 'home') {
            return homeTemplate;
        }
        if (clickedTemplate === 'about') {
            return aboutTemplate;
        }
        if (clickedTemplate === 'contact') {
            return contactTemplate;
        }
    },

    _removePreviousView: function() {
        const previousView = this._mainElement.querySelector('.c-main');
        if (previousView) {
            previousView.remove();
        }
    }
}

export const create = function (mainElement, footerElement, state) {
    const view = Object.create(pageViewPrototype);
    view._mainElement = mainElement;
    view._template = homeTemplate;
    view.state = state;

    const links = footerElement.querySelectorAll('.js-link');
    links.forEach(link => link.addEventListener('click', view._onClickChangeTemplate.bind(view)));

    return view;
}
