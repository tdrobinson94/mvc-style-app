import _ from 'lodash';
import $ from 'jquery';
import {Contact} from '../models/contacts';

class AppController {
  constructor(form, container, list) {
    this.form = form;
    this.container = container;
    this.list = list;
    console.log(this.form)
  }
  submitContact(){
    this.form.on('submit', (event) => {

      event.preventDefault();
      let name = this.form.find('.full-name').val();
      let phone = this.form.find('.phone-number').val();
      let city = this.form.find('.city').val();
      let state = this.form.find('.state').val();

      this.addContact(name, phone, city, state);
    })
  }
  addContact(name, phone, city, state){
    let contact = new Contact(name, phone, city, state);
    let contactHTML = this.contactTemplate(contact);

    this.list.contacts.push(contact);
    this.container.append(contactHTML);
  }
  contactTemplate(contact){
    return `
    <div class="contact">
      <img class="new-contact-picture" src="./images/avatar.png">
      <div class="contact-info">
        Name: ${contact.name}<br>
        Phone: ${contact.phone}<br>
        Place: ${contact.city}, ${contact.state}
      </div>
    </div>
    `
  }
}

export {AppController};
