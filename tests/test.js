const expect = require('chai').expect;

const { 
  addSlash
} = require('../index');


describe('addSlash', () => {
  it('should not append slash', async () => {
    const response = addSlash('./');
    expect(response).to.equal('./');
  });
  it('should append slash', async () => {
    const response = addSlash('.');
    expect(response).to.equal('./');
  });
});
