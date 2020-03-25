const planData = [
    {
        id: "root",
        name: "Friday Mar 20",
        items: [
            {
                id: "10",
                name: "Tacos Al Pastor",
                quantity: 1,
                unit: "each",
                type: "recipe",
                items: [
                    {
                        id: "20",
                        name: "Fresh Tortillas",
                        quantity: 3,
                        unit: "each",
                        type: "recipe",
                        items: [
                            {
                                id: "30",
                                name: "Masa",
                                quantity: 2.5,
                                unit: "cups",
                                type: "pantry"
                            },
                            {
                                id: "40",
                                name: "Salt",
                                quantity: 1,
                                unit: "tbsp",
                                type: "pantry"
                            }
                        ]
                    },
                    {
                        id: "50",
                        name: "Achiote Adobo Marinade",
                        quantity: 1,
                        unit: "each",
                        type: "recipe",
                        items: [
                            {
                                id: "60",
                                name: "achiote Paste",
                                quantity: 1,
                                unit: "tbsp",
                                type: "pantry"
                            },
                            {
                                id: "70",
                                name: "garlic",
                                quantity: 3,
                                unit: "cloves",
                                type: "pantry"
                            },
                            {
                                id: "80",
                                name: "guajillo chiles",
                                quantity: 2,
                                unit: "each",
                                type: "pantry"
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: "root",
        name: "Saturday Mar 21",
        items: [
            {
                id: "110",
                name: "Chicken Francese",
                quantity: 2,
                unit: "each",
                type: "recipe",
                items: [
                    {
                        id: "160",
                        name: "chicken",
                        quantity: 1,
                        unit: "lb",
                        type: "pantry"
                    }
                ]
            },
            {
                id: "120",
                name: "Vanilla Cupcakes",
                quantity: 1,
                unit: "each",
                type: "recipe",
                items: [
                    {
                        id: "130",
                        name: "milk",
                        quantity: 1,
                        unit: "cup",
                        type: "pantry"
                    },
                    {
                        id: "140",
                        name: "sugar",
                        quantity: 1.25,
                        unit: "cup",
                        type: "pantry"
                    }
                ]
            },
            {
                id: "150",
                name: "Broccoli",
                quantity: 2,
                unit: "bunches",
                type: "pantry"
            }
        ]
    },
    {
        id: "root",
        name: "Sunday Mar 22",
        items: []
    },
    {
        id: "root",
        name: "Monday Mar 23",
        items: []
    }
];

export default planData;