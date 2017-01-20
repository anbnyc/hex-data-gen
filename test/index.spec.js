let chai = require('chai'),
    spies = require('chai-spies')
    fs = require('fs')
    hex = require('../source/index.js'),
    should = chai.should(),
    expect = chai.expect;

chai.use(spies)

describe('#hex', function(){
  it('generates dataset of the correct length', function(){
    hex(3).should.have.length(5);
  });

  it('returns empty array when n is not provided or invalid', function(){
    hex(-2).should.have.length(0);
  });

  it('calls writeFile when a second argument is passed', function(){
    hex(3,'a').should.equal("Success. File now at a.json")
    fs.unlink('./a.json',err=>console.log(err))
  })

})