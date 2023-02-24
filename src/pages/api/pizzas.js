export default function handler(req, res) {
    res.status(200).json({
        pizzas: [
            {
                id: 1,
                name: "veggie",
                size: "Large",
                created: "2023-03-01 12:00:00",
            },
            {
                id: 2,
                name: "pepperoni",
                size: "Large",
                created: "2023-03-01 12:00:00",
            },
            {
                id: 3,
                name: "cheese",
                size: "Large",
                created: "2023-03-01 12:00:00",
            },
        ],
    });
}
