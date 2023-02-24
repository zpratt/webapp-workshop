Feature("home page");

const favoritePizza = "veggie";
const otherPizzas = ["pepperoni", "cheese"];
const pizzas = [...otherPizzas, favoritePizza];

Before(({ I }) => {
    I.amOnPage("/");
});

Scenario("load page, see pizzas", ({ I }) => {
    pizzas.forEach((pizza) => {
        I.see(pizza);
    });

    I.saveScreenshot("see-pizzas.png", true);
});

Scenario("load page, search, click on favorite pizza", ({ I }) => {
    I.fillField("[name=search]", favoritePizza);
    I.see(favoritePizza);

    otherPizzas.forEach((pizza) => {
        I.dontSee(pizza);
    });

    I.click(favoritePizza);
    I.saveScreenshot("search-click-node.png", true);
});
