import BasePageObject from 'src/pageobjects/BasePageObject';

class HomePage extends BasePageObject {
    get message() {
        return $('#content > div > p').getText();
    }

    get open() {
        return browser.url('./');
    }

    get searchSubmit(){
        return $("[name='submit_search']");
    }

    get searchBox() {
        // console.log("here");
        return $('#search_query_top');
    }

    fillSearch(searchText) {
        this.searchBox.setValue(searchText);
    }

    executeSearch(){
        // console.log("executeSearch");
        this.searchSubmit.click();
    }

}

export default new HomePage();