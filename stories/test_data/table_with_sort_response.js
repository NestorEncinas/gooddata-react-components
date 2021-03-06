// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResponse: {
            dimensions: [
                {
                    headers: [
                        {
                            attributeHeader: {
                                name: "US Short (Created)",
                                localIdentifier: "5a5d9791c8f84b15a94ed4e70c0a21e9",
                                uri: "/gdc/md/" + projectId + "/obj/94",
                                identifier: "created.aci81lMifn6q",
                                formOf: {
                                    name: "Quarter/Year (Created)",
                                    uri: "/gdc/md/" + projectId + "/obj/93",
                                    identifier: "created.quarter",
                                },
                                totalItems: [
                                    {
                                        totalHeaderItem: {
                                            name: "sum",
                                        },
                                    },
                                    {
                                        totalHeaderItem: {
                                            name: "avg",
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            attributeHeader: {
                                name: "Product Name",
                                localIdentifier: "a8d42e8ce00f4cb784c04c83c3c29701",
                                uri: "/gdc/md/" + projectId + "/obj/952",
                                identifier: "label.product.id.name",
                                formOf: {
                                    name: "Product",
                                    uri: "/gdc/md/" + projectId + "/obj/949",
                                    identifier: "attr.product.id",
                                },
                            },
                        },
                    ],
                },
                {
                    headers: [
                        {
                            measureGroupHeader: {
                                items: [
                                    {
                                        measureHeaderItem: {
                                            name: "Amount",
                                            format: "$#,##0.00",
                                            localIdentifier: "46d105303d4c48cd8dc8caeb9cdfbc00",
                                            uri: "/gdc/md/" + projectId + "/obj/1279",
                                            identifier: "ah1EuQxwaCqs",
                                        },
                                    },
                                    {
                                        measureHeaderItem: {
                                            name: "Lost",
                                            format: "$#,##0.00",
                                            localIdentifier: "20718ba57f004da385bf16b137cbe3a9",
                                            uri: "/gdc/md/" + projectId + "/obj/1283",
                                            identifier: "af2Ewj9Re2vK",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
            links: {
                executionResult:
                    "/gdc/app/projects/lwniouurkk915fw220tydgb6020zc9yo/executionResults/7082198111567805440?q=eAGlU1Fv0zAQ%2FiuWywNI0ZKmLZBJCE2MoUkIMdge0JQHN75mobYvss9EZep%2F50zXriAh1PXtfL7v%0A%2FN13n%2B%2Blhx49fVIW5Km8cdSRAS0z2aCJ1gV5eistkO%2BaDx5jL%2Bvs4Zhu7uUCvVXEyGejbDQqToqC%0AoSFaq%2FyKs2eCY4ELoYwRGpQJmfDQKq8NhJAuAqkWBPoUUAwnDP9NIYEtRkec2Lx%2FqTmXt7rJrc7N%0A4DqM0S%2BX1Xi2GMqyoJVu5y%2BLsvjZVCvMcf49H5evKrnO%2Fsvy%2Bg72eWKfFImuow6CoDtFQnkQjcEA%0AWswjCYckBnR7XD9iOI7p64lcs7Yeh42wugu9UasL1vfwwaspU5urAO8NWHB08%2BXyUO2qSQ4bcHjb%0A6TfcTxG7gKeHJ%2FCZMF77zphzHNxXgv5s2%2Bz84lBmszRc4A0xsF%2BmeGe3q6g8gRfKafENlBfPr8Z5%0AWYyLF%2Fv8r5PFGfxQnW8q33lQBDpVbg347wIktjJ%2FgNv0eOr9o%2BWf8cepTsbbabZ987NHHZtklUfW%0AfDhu27OSWxy57mn19763KjxS3k3zBAdMK%2BZIO91YrLpe1%2BtfZaN%2BRw%3D%3D%0A&c=d7c8406d12b7841668ad8cca34abded7&offset=0%2C0&limit=1000%2C1000&dimensions=2&totals=2%2C0",
            },
        },
    };
};
