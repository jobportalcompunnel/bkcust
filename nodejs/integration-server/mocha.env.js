// Global Config File for Env Variable Setup

process.env.NODE_ENV = 'testing';

const  chai = require('chai');

const  expect = chai.expect;

const  should = chai.should();
   
global.should = should;
global.expect = expect;