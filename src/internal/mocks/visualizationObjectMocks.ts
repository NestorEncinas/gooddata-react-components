// (C) 2019-2020 GoodData Corporation
import { VisualizationObject } from "@gooddata/typings";

const withSorts: VisualizationObject.IVisualizationObjectContent = {
    visualizationClass: {
        uri: "",
    },
    buckets: [
        {
            localIdentifier: "measures",
            items: [
                {
                    measure: {
                        localIdentifier: "m1",
                        definition: {
                            measureDefinition: {
                                item: {
                                    uri: "/gdc/md/project/obj/1279",
                                },
                            },
                        },
                    },
                },
                {
                    measure: {
                        localIdentifier: "m2",
                        definition: {
                            measureDefinition: {
                                item: {
                                    uri: "/gdc/md/project/obj/1280",
                                },
                            },
                        },
                    },
                },
            ],
        },
        {
            localIdentifier: "view",
            items: [
                {
                    visualizationAttribute: {
                        localIdentifier: "a1",
                        displayForm: {
                            uri: "/gdc/md/project/obj/1027",
                        },
                    },
                },
            ],
        },
    ],
    properties: `{
        "sortItems": [
            {
                "measureSortItem": {
                    "direction": "asc",
                    "locators": [
                        {
                            "measureLocatorItem": {
                                "measureIdentifier": "m1"
                            }
                        }
                    ]
                }
            }
        ]
    }`,
};

const withTotals: VisualizationObject.IVisualizationObjectContent = {
    visualizationClass: {
        uri: "",
    },
    buckets: [
        {
            localIdentifier: "measures",
            items: [
                {
                    measure: {
                        localIdentifier: "m1",
                        definition: {
                            measureDefinition: {
                                item: {
                                    uri: "/gdc/md/project/obj/1279",
                                },
                            },
                        },
                    },
                },
                {
                    measure: {
                        localIdentifier: "m2",
                        definition: {
                            measureDefinition: {
                                item: {
                                    uri: "/gdc/md/project/obj/1280",
                                },
                            },
                        },
                    },
                },
            ],
            totals: [
                {
                    measureIdentifier: "m2",
                    type: "nat",
                    attributeIdentifier: "",
                },
            ],
        },
    ],
};

const withoutTotals: VisualizationObject.IVisualizationObjectContent = {
    visualizationClass: {
        uri: "",
    },
    buckets: [
        {
            localIdentifier: "measures",
            items: [
                {
                    measure: {
                        localIdentifier: "m1",
                        definition: {
                            measureDefinition: {
                                item: {
                                    uri: "/gdc/md/project/obj/1279",
                                },
                            },
                        },
                    },
                },
                {
                    measure: {
                        localIdentifier: "m2",
                        definition: {
                            measureDefinition: {
                                item: {
                                    uri: "/gdc/md/project/obj/1280",
                                },
                            },
                        },
                    },
                },
            ],
        },
        {
            localIdentifier: "view",
            items: [
                {
                    visualizationAttribute: {
                        localIdentifier: "a1",
                        displayForm: {
                            uri: "/gdc/md/project/obj/1027",
                        },
                    },
                },
            ],
        },
    ],
};

export const measureItemM1: VisualizationObject.BucketItem = {
    measure: {
        localIdentifier: "m1",
        definition: {
            measureDefinition: {
                item: {
                    uri: "/gdc/md/project/obj/1279",
                },
            },
        },
    },
};

export const measureItemM2: VisualizationObject.BucketItem = {
    measure: {
        localIdentifier: "m2",
        definition: {
            measureDefinition: {
                item: {
                    uri: "/gdc/md/project/obj/m2",
                },
            },
        },
    },
};

export const measureItemM3: VisualizationObject.BucketItem = {
    measure: {
        localIdentifier: "m3",
        definition: {
            measureDefinition: {
                item: {
                    uri: "/gdc/md/project/obj/m3",
                },
            },
        },
    },
};

export const attributeItemA1: VisualizationObject.BucketItem = {
    visualizationAttribute: {
        localIdentifier: "a1",
        displayForm: {
            uri: "/gdc/md/project/obj/1027",
        },
    },
};

export const attributeItemA2: VisualizationObject.BucketItem = {
    visualizationAttribute: {
        localIdentifier: "a1",
        displayForm: {
            uri: "/gdc/md/project/obj/1027",
        },
    },
};

export const oneMeasureNoView: VisualizationObject.IVisualizationObjectContent = {
    visualizationClass: {
        uri: "",
    },
    buckets: [
        {
            localIdentifier: "measures",
            items: [measureItemM1],
        },
        {
            localIdentifier: "view",
            items: [],
        },
    ],
};

export const measuresAndSecondaryMeasuresNoView: VisualizationObject.IVisualizationObjectContent = {
    visualizationClass: {
        uri: "",
    },
    buckets: [
        {
            localIdentifier: "measures",
            items: [measureItemM1],
        },
        {
            localIdentifier: "secondary_measures",
            items: [measureItemM2],
        },
        {
            localIdentifier: "view",
            items: [],
        },
    ],
};

export const measuresAndTertiaryMeasuresNoView: VisualizationObject.IVisualizationObjectContent = {
    visualizationClass: {
        uri: "",
    },
    buckets: [
        {
            localIdentifier: "measures",
            items: [measureItemM1],
        },
        {
            localIdentifier: "tertiary_measures",
            items: [measureItemM3],
        },
        {
            localIdentifier: "view",
            items: [],
        },
    ],
};

export const measuresAndSecondaryMeasuresAndTertiaryMeasuresNoView: VisualizationObject.IVisualizationObjectContent = {
    visualizationClass: {
        uri: "",
    },
    buckets: [
        {
            localIdentifier: "measures",
            items: [measureItemM1],
        },
        {
            localIdentifier: "secondary_measures",
            items: [measureItemM2],
        },
        {
            localIdentifier: "tertiary_measures",
            items: [measureItemM3],
        },
        {
            localIdentifier: "view",
            items: [],
        },
    ],
};

export const measuresAndNoSecondaryMeasuresAndTertiaryMeasuresNoView: VisualizationObject.IVisualizationObjectContent = {
    visualizationClass: {
        uri: "",
    },
    buckets: [
        {
            localIdentifier: "measures",
            items: [measureItemM1],
        },
        {
            localIdentifier: "secondary_measures",
            items: [],
        },
        {
            localIdentifier: "tertiary_measures",
            items: [measureItemM3],
        },
        {
            localIdentifier: "view",
            items: [],
        },
    ],
};

export const oneMeasureOneView: VisualizationObject.IVisualizationObjectContent = {
    visualizationClass: {
        uri: "",
    },
    buckets: [
        {
            localIdentifier: "measures",
            items: [measureItemM1],
        },
        {
            localIdentifier: "view",
            items: [attributeItemA1],
        },
    ],
};

export const oneMeasureOneStack: VisualizationObject.IVisualizationObjectContent = {
    visualizationClass: {
        uri: "",
    },
    buckets: [
        {
            localIdentifier: "measures",
            items: [measureItemM1],
        },
        {
            localIdentifier: "stack",
            items: [attributeItemA1],
        },
    ],
};

export const noMeasureNoView: VisualizationObject.IVisualizationObjectContent = {
    visualizationClass: {
        uri: "",
    },
    buckets: [
        {
            localIdentifier: "measures",
            items: [],
        },
        {
            localIdentifier: "view",
            items: [],
        },
    ],
};

export const visualizationObjectMock = {
    withSorts,
    withTotals,
    withoutTotals,
    oneMeasureNoView,
    measuresAndSecondaryMeasuresNoView,
    measuresAndTertiaryMeasuresNoView,
    measuresAndSecondaryMeasuresAndTertiaryMeasuresNoView,
    measuresAndNoSecondaryMeasuresAndTertiaryMeasuresNoView,
    noMeasureNoView,
    oneMeasureOneView,
    oneMeasureOneStack,
};
