const planData = [
    {
        id: "root",
        type: "section",
        title: "Friday Mar 20",
        children: [
            {
                id: "10",
                title: "Tacos Al Pastor",
                quantity: 1,
                unit: "each",
                type: "recipe",
                children: [
                    {
                        id: "20",
                        title: "Fresh Tortillas",
                        quantity: 3,
                        unit: "each",
                        type: "recipe",
                        children: [
                            {
                                id: "30",
                                title: "Masa",
                                quantity: 2.5,
                                unit: "cups",
                                type: "pantry"
                            },
                            {
                                id: "40",
                                title: "Salt",
                                quantity: 1,
                                unit: "tbsp",
                                type: "pantry"
                            }
                        ]
                    },
                    {
                        id: "50",
                        title: "Achiote Adobo Marinade",
                        quantity: 1,
                        unit: "each",
                        type: "recipe",
                        children: [
                            {
                                id: "60",
                                title: "achiote Paste",
                                quantity: 1,
                                unit: "tbsp",
                                type: "pantry"
                            },
                            {
                                id: "70",
                                title: "garlic",
                                quantity: 3,
                                unit: "cloves",
                                type: "pantry"
                            },
                            {
                                id: "80",
                                title: "guajillo chiles",
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
        type: "section",
        title: "Saturday Mar 21",
        children: [
            {
                id: "110",
                title: "Chicken Francese",
                quantity: 2,
                unit: "each",
                type: "recipe",
                children: [
                    {
                        id: "160",
                        title: "chicken",
                        quantity: 1,
                        unit: "lb",
                        type: "pantry"
                    }
                ]
            },
            {
                id: "120",
                title: "Vanilla Cupcakes",
                quantity: 1,
                unit: "each",
                type: "recipe",
                children: [
                    {
                        id: "130",
                        title: "milk",
                        quantity: 1,
                        unit: "cup",
                        type: "pantry"
                    },
                    {
                        id: "140",
                        title: "sugar",
                        quantity: 1.25,
                        unit: "cup",
                        type: "pantry"
                    }
                ]
            },
            {
                id: "150",
                title: "Broccoli",
                quantity: 2,
                unit: "bunches",
                type: "pantry"
            }
        ]
    },
    {
        id: "root",
        type: "section",
        title: "Sunday Mar 22",
        children: []
    },
    {
        id: "root",
        type: "section",
        title: "Monday Mar 23",
        children: []
    }
];

export default planData;