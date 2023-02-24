Feature('home page');

Before(({I}) => {
    I.amOnPage('/');
});

Scenario('load page, search, click on result',  ({ I }) => {
    I.see('nginx');
    I.see('node');
    I.fillField('[name=search]', 'node');
    I.see('node');
    I.dontSee('nginx');
    I.click('node');
    I.seeInCurrentUrl('images/2');
    I.saveScreenshot('search-click-node.png', true);
});
