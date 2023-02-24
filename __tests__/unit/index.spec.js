import { describe, it, beforeEach, afterEach } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import Home from "@/pages/index";

describe("home page", () => {
    let favoritePizza, server;

    beforeEach(() => {
        favoritePizza = "veggie";

        const responseBody = {
            pizzas: [
                {
                    id: 1,
                    name: favoritePizza,
                    size: "Large",
                    created: "2023-03-01 12:00:00",
                },
            ],
        };

        server = setupServer(
            rest.get("/api/pizzas", (req, res, ctx) => {
                console.log("pizzas called");
                return res(ctx.json(responseBody));
            })
        );
        server.listen();
    });

    afterEach(() => {
        server.close();
    });

    it("should render the list of images", async () => {
        render(<Home />);
        await screen.findAllByText(favoritePizza);
    });
});
