// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResponse: {
            dimensions: [
                {
                    headers: [
                        {
                            measureGroupHeader: {
                                items: [
                                    {
                                        measureHeaderItem: {
                                            name: "Amount previous year",
                                            format: "$#,##0.00",
                                            localIdentifier: "amountPopMeasure",
                                            uri: "/gdc/md/" + projectId + "/obj/75537",
                                            identifier: "generated_1279_pop_1a0c5df112cff5c4a5d705da6e0b7eac",
                                        },
                                    },
                                    {
                                        measureHeaderItem: {
                                            name: "Amount current year",
                                            format: "$#,##0.00",
                                            localIdentifier: "amountMeasure",
                                            uri: "/gdc/md/" + projectId + "/obj/1279",
                                            identifier: "ah1EuQxwaCqs",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    headers: [
                        {
                            attributeHeader: {
                                name: "Year (Created)",
                                localIdentifier: "yearCreatedAttribute",
                                uri: "/gdc/md/" + projectId + "/obj/158",
                                identifier: "created.aag81lMifn6q",
                                formOf: {
                                    uri: "/gdc/md/" + projectId + "/obj/157",
                                    identifier: "created",
                                    name: "Year created",
                                },
                            },
                        },
                    ],
                },
            ],
            links: {
                executionResult:
                    "/gdc/app/projects/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/executionResults/7627331482601749504?q=eAGlkstOwzAQRX%2FFclmAFJG0tApUQqjipbJAiIcQQlm48bSY2nE6dlpClX9nQgoUwaawG9vHd67n%0AeskRcov%2BUhjgfX6XeeU1SB7w1OrCZPdK%2BifH%2B49JwMdKe8DVAu2irrgBjyo9R1vknBhHWry%2FXN3%2B%0AziYVaVg0ggg%2BQfXVpeaWXCqXa1GeETKUhIQTmYZGhrITQTnaW4xd9AI9HemxS2WGWfk0a%2FtuZxba%0A0XPY7u2T6ZFwcKrBQObvroeba8QhNLfdkZKHJCg8PW9UePiLo5gEJCqtT%2Bwiu%2FGQDz7UTs429XbQ%0AJbFmujyf1nVhjMCSdB5A4LrV2zrC1T7bPkYQHuQOEe%2FZ%2FnpgvdB1CBTzY5JUFGSTaxPMZ2gXVwzV%0AVOiAvQJ7J6aCGcHmr7JMpyVbgevm1toOjC0yz3KEubKFY2Xju%2Bm0%2BXzjXm8v5lWw%2FPpUW62g1Yp2%0Ao%2BjbfAaMZsXsmAmtmQR6acAQJgKlBufqA%2BfFBJjFuvCF2%2F1pOi0Q6VP913O7Ex%2FwKqneAKdiKjY%3D%0A&c=107eed92d3979cef2f780ed49d074838&dimension=Date&dimension=Amount",
            },
        },
    };
};
