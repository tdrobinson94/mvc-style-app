// Import Chai
import chai from 'chai';

// Import Any Files to Test
import {Contact} from '../src/js/models/contacts';
import {List} from '../src/js/models/list';
import {AppController} from '../src/js/controllers/app-controller';
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('How contacts list should work', function () {

  describe('Contact model', function(){

    it('Should be an instance of Contacts', function(){
      let newContact = new Contact();
      expect(newContact).to.be.an.instanceof(Contact);

    });

    it('Should have a full name', function(){
      let newContact = new Contact('Terry Robinson');
      expect(newContact.name).to.equal('Terry Robinson');

    });

    it('Should have a full name and a phone number', function(){
      let newContact = new Contact('Terry Robinson', '792-214-3344');
      expect(newContact.name).to.equal('Terry Robinson');
      expect(newContact.phone).to.equal('792-214-3344');

    });

    it('Should have a full name, a phone number, and a city', function(){
      let newContact = new Contact('Terry Robinson', '792-214-3344', 'Augusta');
      expect(newContact.name).to.equal('Terry Robinson');
      expect(newContact.phone).to.equal('792-214-3344');
      expect(newContact.city).to.equal('Augusta');

    });

    it('Should have a full name, a phone number, a city, and a state', function(){
      let newContact = new Contact('Terry Robinson', '792-214-3344', 'Augusta', 'Georgia');
      expect(newContact.name).to.equal('Terry Robinson');
      expect(newContact.phone).to.equal('792-214-3344');
      expect(newContact.city).to.equal('Augusta');
      expect(newContact.state).to.equal('Georgia');

    });

  });

  describe('Should describe how the list works', function() {

    it('Should be an instance of List', function(){
      let list = new List();
      expect(list).to.be.an.instanceof(List);

    });

  });

  describe('Should describe how the app controller will work', function(){

    it('Should be an instance of the App Controller', function(){
      let appController = new AppController();
      expect(appController).to.be.an.instanceof(AppController);

    });

  });

});
