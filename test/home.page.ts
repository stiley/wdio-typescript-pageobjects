import {expect} from 'chai';
import HomePage from 'src/pageobjects/HomePage';

/**
 * Simple set of tests to make sure the home page loads properly
 */
describe.skip('Main Page loads', () => {
    it('displays the search box', () => {
        HomePage.open;
        expect(HomePage.searchBox).to.not.be.an('undefined');
     });
});


describe('Main Page allows user to interact with the search field', () => {
    it('allows the user to enter text into the search box', () => {
        HomePage.open;
        expect(HomePage.searchBox).to.not.be.an('undefined');
        HomePage.fillSearch("Text to search for");
        expect(HomePage.searchBox.getValue()).to.equal('Text to search for');
        browser.pause(2000);
    });

    it('allows the user to execute a search', () => {
        HomePage.open;
        expect(HomePage.searchBox).to.not.be.an('undefined');
        HomePage.fillSearch("Shirt");
        expect(HomePage.searchBox.getValue()).to.equal('Shirt');
        browser.pause(2000);
        HomePage.executeSearch();
        browser.pause(5000);
    });
});

