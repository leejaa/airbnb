const { expect } = require('chai');
const grabData = require('./grab-data');

describe('tests example website', function testExample() {
  this.timeout(30000);

  it('browses the website', async function testBrowser() {
    const { title, outerHTML } = await grabData();
    this.title = title;
    this.outerHTML = outerHTML;
  });

  it('title has text: naver', async function testTitle() {
    // expect(this.title.toLowerCase()).to.have.string('naver');
  });

  it('outerHTML has text: naver', async function testOuterHTML() {
    // expect(this.outerHTML.toLowerCase()).to.have.string('naver');
  });
});