// Import Chai
import chai from 'chai';

// Import Any Files to Test
import {List} from '../src/js/models/list';
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('How contacts list should work', function () {

  describe('List model', function(){

    it('Should be an instance of Contacts', function(){
      let newList = new List();
      expect(newList).to.be.an.instanceof(List);

    });

    it('Should have a full name', function(){
      let newList = new List('Terry Robinson');
      expect(newList.name).to.equal('Terry Robinson');

    });

    it('Should have a full name and a phone number', function(){
      let newList = new List('Terry Robinson', '792-214-3344');
      expect(newList.name).to.equal('Terry Robinson');
      expect(newList.phone).to.equal('792-214-3344');

    });

    it('Should have a full name, a phone number, and a city', function(){
      let newList = new List('Terry Robinson', '792-214-3344', 'Augusta');
      expect(newList.name).to.equal('Terry Robinson');
      expect(newList.phone).to.equal('792-214-3344');
      expect(newList.city).to.equal('Augusta');

    });

    it('Should have a full name, a phone number, a city, and a state', function(){
      let newList = new List('Terry Robinson', '792-214-3344', 'Augusta', 'Georgia');
      expect(newList.name).to.equal('Terry Robinson');
      expect(newList.phone).to.equal('792-214-3344');
      expect(newList.city).to.equal('Augusta');
      expect(newList.state).to.equal('Georgia');

    });

  });

});
