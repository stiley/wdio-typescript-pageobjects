export default class BasePageObject {

    get h1() {
        return $('h1').getText();
    }
}
