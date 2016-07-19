import _ from 'lodash';
import $ from 'jquery';

import {AppController} from '../js/controllers/app-controller';
import {List} from '../js/models/list';

const addContactForm = $('.add-contact');
const listContainer = $('.contact-list');
const mylist = new List();
let app = new AppController(addContactForm, listContainer, mylist);

console.log(addContactForm)
app.submitContact();
