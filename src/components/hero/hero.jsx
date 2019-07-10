import React, { Component } from "react";

import HeroForm from "./hero-form";
import HeroExport from "./hero-export";
import HeroImport from "./hero-import";
import TopNavBar from "../common/top-navbar";

import { Row, Col, Alert, ButtonGroup } from "reactstrap";

class Hero extends Component {
    state = {
        hero: {
            gameId: "",
            name: "",
            rarity: 3,
            classType: "",
            element: "",
            zodiac: "",
            specialtyChangeName: "",
            selfSkillBarName: "",
            background: [""],
            relations: [{ hero: "", relationType: "" }],
            stats: {
                lv1BaseStarNoAwaken: {
                    cp: 0,
                    atk: 0,
                    hp: 0,
                    spd: 0,
                    def: 0,
                    chc: 0.15,
                    chd: 1.5,
                    eff: 0,
                    efr: 0,
                    dac: 0.05
                },
                lv50FiveStarNoAwaken: {
                    cp: 0,
                    atk: 0,
                    hp: 0,
                    spd: 0,
                    def: 0,
                    chc: 0.15,
                    chd: 1.5,
                    eff: 0,
                    efr: 0,
                    dac: 0.05
                },
                lv50FiveStarFullyAwakened: {
                    cp: 0,
                    atk: 0,
                    hp: 0,
                    spd: 0,
                    def: 0,
                    chc: 0.15,
                    chd: 1.5,
                    eff: 0,
                    efr: 0,
                    dac: 0.05
                },
                lv60SixStarNoAwaken: {
                    cp: 0,
                    atk: 0,
                    hp: 0,
                    spd: 0,
                    def: 0,
                    chc: 0.15,
                    chd: 1.5,
                    eff: 0,
                    efr: 0,
                    dac: 0.05
                },
                lv60SixStarFullyAwakened: {
                    cp: 0,
                    atk: 0,
                    hp: 0,
                    spd: 0,
                    def: 0,
                    chc: 0.15,
                    chd: 1.5,
                    eff: 0,
                    efr: 0,
                    dac: 0.05
                }
            },
            skills: [
                {
                    isPassive: false,
                    soulBurn: 0,
                    selfSkillBarValue: 0,
                    soulBurnEffect: "",
                    awakenUpgrade: false,
                    cooldown: 0,
                    name: "",
                    soulAcquire: 0,
                    description: "",
                    enhancement: [{ description: "", resources: [] }],
                    buffs: [],
                    debuffs: [],
                    damageModifiers: [
                        {
                            name: "pow",
                            section: "pow",
                            value: 1.0,
                            soulburn: 1.0
                        },
                        {
                            name: "statModifier",
                            description: "",
                            section: "additive",
                            stat: "atk",
                            type: "multiplier",
                            target: "self",
                            value: 1.0,
                            soulburn: 1.0
                        }
                    ]
                },
                {
                    isPassive: false,
                    soulBurn: 0,
                    selfSkillBarValue: 0,
                    soulBurnEffect: "",
                    awakenUpgrade: false,
                    cooldown: 0,
                    name: "",
                    soulAcquire: 0,
                    description: "",
                    enhancement: [{ description: "", resources: [] }],
                    buffs: [],
                    debuffs: [],
                    damageModifiers: [
                        {
                            name: "pow",
                            section: "pow",
                            value: 1.0,
                            soulburn: 1.0
                        },
                        {
                            name: "statModifier",
                            description: "",
                            section: "additive",
                            stat: "atk",
                            type: "multiplier",
                            target: "self",
                            value: 1.0,
                            soulburn: 1.0
                        }
                    ]
                },
                {
                    isPassive: false,
                    soulBurn: 0,
                    selfSkillBarValue: 0,
                    soulBurnEffect: "",
                    awakenUpgrade: false,
                    cooldown: 0,
                    name: "",
                    soulAcquire: 0,
                    description: "",
                    enhancement: [{ description: "", resources: [] }],
                    buffs: [],
                    debuffs: [],
                    damageModifiers: [
                        {
                            name: "pow",
                            section: "pow",
                            value: 1.0,
                            soulburn: 1.0
                        },
                        {
                            name: "statModifier",
                            description: "",
                            section: "additive",
                            stat: "atk",
                            type: "multiplier",
                            target: "self",
                            value: 1.0,
                            soulburn: 1.0
                        }
                    ]
                }
            ],
            specialtySkill: {
                name: "",
                description: "",
                dispatch: [],
                enhancement: [],
                stats: { command: 0, charm: 0, politics: 0 }
            },
            camping: {
                options: [
                    "Option1",
                    "Option2"
                ],
                reactions: {
                    "advice": 0,
                    "belief": 0,
                    "bizarre-story": 0,
                    "comforting-cheer": 0,
                    "complain": 0,
                    "criticism": 0,
                    "cute-cheer": 0,
                    "dream": 0,
                    "food-story": 0,
                    "gossip": 0,
                    "happy-memory": 0,
                    "heroic-cheer": 0,
                    "heroic-tale": 0,
                    "horror-story": 0,
                    "interesting-story": 0,
                    "joyful-memory": 0,
                    "myth": 0,
                    "occult": 0,
                    "reality-check": 0,
                    "sad-memory": 0,
                    "self-indulgent": 0,
                    "unique-comment": 0
                }
            },
            memoryImprintFormation: {
                north: false,
                south: false,
                east: false,
                west: false
            },
            memoryImprintAttribute: "",
            memoryImprint: [
                {
                    rank: "d",
                    status: {
                        type: "",
                        increase: 0
                    }
                },
                {
                    rank: "c",
                    status: {
                        type: "",
                        increase: 0
                    }
                },
                {
                    rank: "b",
                    status: {
                        type: "",
                        increase: 0
                    }
                },
                {
                    rank: "a",
                    status: {
                        type: "",
                        increase: 0
                    }
                },
                {
                    rank: "s",
                    status: {
                        type: "",
                        increase: 0
                    }
                },
                {
                    rank: "ss",
                    status: {
                        type: "",
                        increase: 0
                    }
                },
                {
                    rank: "sss",
                    status: {
                        type: "",
                        increase: 0
                    }
                }
            ],
            awakening: [
                {
                    rank: 1,
                    skillUpgrade: false,
                    statsIncrease: [{ "": 0 }, { atk: 20 }, { hp: 60 }],
                    resources: []
                },
                {
                    rank: 2,
                    skillUpgrade: false,
                    statsIncrease: [{ "": 0 }, { atk: 20 }, { hp: 60 }],
                    resources: []
                },
                {
                    rank: 3,
                    skillUpgrade: true,
                    statsIncrease: [{ atk: 20 }, { hp: 60 }],
                    resources: []
                },
                {
                    rank: 4,
                    skillUpgrade: false,
                    statsIncrease: [{ "": 0 }, { atk: 30 }, { hp: 80 }],
                    resources: []
                },
                {
                    rank: 5,
                    skillUpgrade: false,
                    statsIncrease: [{ "": 0 }, { atk: 30 }, { hp: 80 }],
                    resources: []
                },
                {
                    rank: 6,
                    skillUpgrade: false,
                    statsIncrease: [{ "": 0 }, { atk: 30 }, { hp: 80 }],
                    resources: []
                }
            ]
        },
        import: {},
        defaults: {
            hero: {
                gameId: "",
                name: "",
                rarity: 3,
                classType: "",
                element: "",
                zodiac: "",
                specialtyChangeName: "",
                selfSkillBarName: "",
                background: [""],
                relations: [{ hero: "", relationType: "" }],
                stats: {
                    lv1BaseStarNoAwaken: {
                        cp: 0,
                        atk: 0,
                        hp: 0,
                        spd: 0,
                        def: 0,
                        chc: 0.15,
                        chd: 1.5,
                        eff: 0,
                        efr: 0,
                        dac: 0.05
                    },
                    lv50FiveStarNoAwaken: {
                        cp: 0,
                        atk: 0,
                        hp: 0,
                        spd: 0,
                        def: 0,
                        chc: 0.15,
                        chd: 1.5,
                        eff: 0,
                        efr: 0,
                        dac: 0.05
                    },
                    lv50FiveStarFullyAwakened: {
                        cp: 0,
                        atk: 0,
                        hp: 0,
                        spd: 0,
                        def: 0,
                        chc: 0.15,
                        chd: 1.5,
                        eff: 0,
                        efr: 0,
                        dac: 0.05
                    },
                    lv60SixStarNoAwaken: {
                        cp: 0,
                        atk: 0,
                        hp: 0,
                        spd: 0,
                        def: 0,
                        chc: 0.15,
                        chd: 1.5,
                        eff: 0,
                        efr: 0,
                        dac: 0.05
                    },
                    lv60SixStarFullyAwakened: {
                        cp: 0,
                        atk: 0,
                        hp: 0,
                        spd: 0,
                        def: 0,
                        chc: 0.15,
                        chd: 1.5,
                        eff: 0,
                        efr: 0,
                        dac: 0.05
                    }
                },
                skills: [
                    {
                        isPassive: false,
                        soulBurn: 0,
                        selfSkillBarValue: 0,
                        soulBurnEffect: "",
                        awakenUpgrade: false,
                        cooldown: 0,
                        name: "",
                        soulAcquire: 0,
                        description: "",
                        enhancement: [{ description: "", resources: [] }],
                        buffs: [],
                        debuffs: [],
                        damageModifiers: [
                            {
                                name: "pow",
                                section: "pow",
                                value: 1.0,
                                soulburn: 1.0
                            },
                            {
                                name: "statModifier",
                                description: "",
                                section: "additive",
                                stat: "atk",
                                type: "multiplier",
                                target: "self",
                                value: 1.0,
                                soulburn: 1.0
                            }
                        ]
                    },
                    {
                        isPassive: false,
                        soulBurn: 0,
                        selfSkillBarValue: 0,
                        soulBurnEffect: "",
                        awakenUpgrade: false,
                        cooldown: 0,
                        name: "",
                        soulAcquire: 0,
                        description: "",
                        enhancement: [{ description: "", resources: [] }],
                        buffs: [],
                        debuffs: [],
                        damageModifiers: [
                            {
                                name: "pow",
                                section: "pow",
                                value: 1.0,
                                soulburn: 1.0
                            },
                            {
                                name: "statModifier",
                                description: "",
                                section: "additive",
                                stat: "atk",
                                type: "multiplier",
                                target: "self",
                                value: 1.0,
                                soulburn: 1.0
                            }
                        ]
                    },
                    {
                        isPassive: false,
                        soulBurn: 0,
                        selfSkillBarValue: 0,
                        soulBurnEffect: "",
                        awakenUpgrade: false,
                        cooldown: 0,
                        name: "",
                        soulAcquire: 0,
                        description: "",
                        enhancement: [{ description: "", resources: [] }],
                        buffs: [],
                        debuffs: [],
                        damageModifiers: [
                            {
                                name: "pow",
                                section: "pow",
                                value: 1.0,
                                soulburn: 1.0
                            },
                            {
                                name: "statModifier",
                                description: "",
                                section: "additive",
                                stat: "atk",
                                type: "multiplier",
                                target: "self",
                                value: 1.0,
                                soulburn: 1.0
                            }
                        ]
                    }
                ],
                specialtySkill: {
                    name: "",
                    description: "",
                    dispatch: "",
                    enhancement: "",
                    stats: { command: 0, charm: 0, politics: 0 }
                },
                camping: {
                    options: [
                        "Option1",
                        "Option2"
                    ],
                    reactions: {
			"advice": 0,
			"belief": 0,
			"bizarre-story": 0,
			"comforting-cheer": 0,
			"complain": 0,
			"criticism": 0,
			"cute-cheer": 0,
			"dream": 0,
			"food-story": 0,
			"gossip": 0,
			"happy-memory": 0,
			"heroic-cheer": 0,
			"heroic-tale": 0,
			"horror-story": 0,
			"interesting-story": 0,
			"joyful-memory": 0,
			"myth": 0,
			"occult": 0,
			"reality-check": 0,
			"sad-memory": 0,
			"self-indulgent": 0,
			"unique-comment": 0
                    }
                },
                memoryImprintFormation: {
                    north: false,
                    south: false,
                    east: false,
                    west: false
                },
                memoryImprintAttribute: "",
                memoryImprint: [
                    {
                        rank: "d",
                        status: {
                            type: "",
                            increase: 0
                        }
                    },
                    {
                        rank: "c",
                        status: {
                            type: "",
                            increase: 0
                        }
                    },
                    {
                        rank: "b",
                        status: {
                            type: "",
                            increase: 0
                        }
                    },
                    {
                        rank: "a",
                        status: {
                            type: "",
                            increase: 0
                        }
                    },
                    {
                        rank: "s",
                        status: {
                            type: "",
                            increase: 0
                        }
                    },
                    {
                        rank: "ss",
                        status: {
                            type: "",
                            increase: 0
                        }
                    },
                    {
                        rank: "sss",
                        status: {
                            type: "",
                            increase: 0
                        }
                    }
                ],
                awakening: [
                    {
                        rank: 1,
                        skillUpgrade: false,
                        statsIncrease: [{ "": 0 }, { atk: 20 }, { hp: 60 }],
                        resources: []
                    },
                    {
                        rank: 2,
                        skillUpgrade: false,
                        statsIncrease: [{ "": 0 }, { atk: 20 }, { hp: 60 }],
                        resources: []
                    },
                    {
                        rank: 3,
                        skillUpgrade: true,
                        statsIncrease: [{ atk: 20 }, { hp: 60 }],
                        resources: []
                    },
                    {
                        rank: 4,
                        skillUpgrade: false,
                        statsIncrease: [{ "": 0 }, { atk: 30 }, { hp: 80 }],
                        resources: []
                    },
                    {
                        rank: 5,
                        skillUpgrade: false,
                        statsIncrease: [{ "": 0 }, { atk: 30 }, { hp: 80 }],
                        resources: []
                    },
                    {
                        rank: 6,
                        skillUpgrade: false,
                        statsIncrease: [{ "": 0 }, { atk: 30 }, { hp: 80 }],
                        resources: []
                    }
                ]
            },
            awakeningCosts: [
                [
                    [{ item: "", qty: 5 }],
                    [{ item: "", qty: 9 }],
                    [{ item: "", qty: 12 }, { item: "greater-", qty: 6 }],
                    [{ item: "greater-", qty: 15 }],
                    [{ item: "epic-", qty: 4 }, { item: "rare", qty: 9 }],
                    [{ item: "epic-", qty: 6 }, { item: "epic", qty: 6 }]
                ],
                [
                    [{ item: "", qty: 8 }],
                    [{ item: "", qty: 12 }, { item: "greater-", qty: 2 }],
                    [{ item: "", qty: 17 }, { item: "greater-", qty: 8 }],
                    [{ item: "greater-", qty: 8 }, { item: "epic-", qty: 2 }],
                    [{ item: "epic-", qty: 5 }, { item: "rare", qty: 12 }],
                    [{ item: "epic-", qty: 8 }, { item: "epic", qty: 8 }]
                ],
                [
                    [{ item: "", qty: 10 }],
                    [{ item: "", qty: 15 }, { item: "greater-", qty: 2 }],
                    [{ item: "", qty: 20 }, { item: "greater-", qty: 10 }],
                    [{ item: "greater-", qty: 10 }, { item: "epic-", qty: 2 }],
                    [{ item: "epic-", qty: 6 }, { item: "rare", qty: 15 }],
                    [{ item: "epic-", qty: 10 }, { item: "epic", qty: 10 }]
                ]
            ],
            // enhanceCosts[rarity - 3][maxlevel][level][index]
            enhanceCosts: [
                [
                    // 3-star
                    [
                        // max +1
                        [
                            // +1
                        ]
                    ],
                    [
                        // max +2
                        [
                            // +1
                            { item: "gold", qty: 14000 },
                            { item: "molagora", qty: 1 },
                            { item: "rare", qty: 2 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 23000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 3 }
                        ]
                    ],
                    [
                        // max +3
                        [
                            // +1
                            { item: "gold", qty: 14000 },
                            { item: "molagora", qty: 1 },
                            { item: "rare", qty: 2 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 23000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 3 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 33000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 5 }
                        ]
                    ],
                    [
                        // max +4
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 14000 },
                            { item: "molagora", qty: 1 },
                            { item: "rare", qty: 2 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 23000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 3 }
                        ],
                        [
                            // +4
                            { item: "gold", qty: 32000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 4 }
                        ]
                    ],
                    [
                        // max +5
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 23000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 3 }
                        ],
                        [
                            // +4
                            { item: "gold", qty: 28000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 4 }
                        ],
                        [
                            // +5
                            { item: "gold", qty: 37000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 5 }
                        ]
                    ],
                    [
                        // max +6
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 13000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 1 }
                        ],
                        [
                            // +4
                            { item: "gold", qty: 18000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 2 }
                        ],
                        [
                            // +5
                            { item: "gold", qty: 28000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 4 }
                        ],
                        [
                            // +6
                            { item: "gold", qty: 42000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 6 }
                        ]
                    ],
                    [
                        // max +7
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +4
                            { item: "gold", qty: 23000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 3 }
                        ],
                        [
                            // +5
                            { item: "gold", qty: 28000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 4 }
                        ],
                        [
                            // +6
                            { item: "gold", qty: 37000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 5 }
                        ],
                        [
                            // +7
                            { item: "gold", qty: 42000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 6 }
                        ]
                    ]
                ],

                [
                    // 4-star
                    [
                        // max +1
                        [{ item: "gold", qty: 52000 }, { item: "molagora", qty: 3 }, { item: "rare", qty: 8 } ]
                    ],
                    [
                        // max +2
                        [
                            // +1
                            { item: "gold", qty: 23000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 3 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 42000 },
                            { item: "molagora", qty: 3 },
                            { item: "epic", qty: 1 }
                        ]
                    ],
                    [
                        // max +3
                        [
                            // +1
                            { item: "gold", qty: 9000 },
                            { item: "molagora", qty: 1 },
                            { item: "rare", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 23000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 3 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 50000 },
                            { item: "molagorago", qty: 1 },
                            { item: "epic", qty: 1 }
                        ]
                    ],
                    [
                        // max +4
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 13000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 1 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 13000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 1 }
                        ],
                        [
                            // +4
                            { item: "gold", qty: 80000 },
                            { item: "molagorago", qty: 1 },
                            { item: "epic", qty: 2 }
                        ]
                    ],
                    [
                        // max +5
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 13000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 1 },
                        ],
                        [
                            // +4
                            { item: "gold", qty: 27000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 3 }
                        ],
                        [
                            // +5
                            { item: "gold", qty: 80000 },
                            { item: "molagorago", qty: 1 },
                            { item: "epic", qty: 2 }
                        ]
                    ],
                    [
                        // max +6
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 13000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 1 }
                        ],
                        [
                            // +4
                            { item: "gold", qty: 18000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 2 }
                        ],
                        [
                            // +5
                            { item: "gold", qty: 32000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 4 }
                        ],
                        [
                            // +6
                            { item: "gold", qty: 80000 },
                            { item: "molagorago", qty: 1 },
                            { item: "epic", qty: 2 }
                        ]
                    ],
                    [
                        // max +7
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +4
                            { item: "gold", qty: 13000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 1 }
                        ],
                        [
                            // +5
                            { item: "gold", qty: 22000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 2 }
                        ],
                        [
                            // +6
                            { item: "gold", qty: 37000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 5 }
                        ],
                        [
                            // +7
                            { item: "gold", qty: 80000 },
                            { item: "molagorago", qty: 1 },
                            { item: "epic", qty: 2 }
                        ]
                    ]
                ],

                [
                    // 5-star
                    [
                        // max +1
                        [
                            // +1
                            { item: "gold", qty: 64000 },
                            { item: "molagora", qty: 6 },
                            { item: "rare", qty: 8 }
                        ]
                    ],
                    [
                        // max +2
                        [
                            // +1
                            { item: "gold", qty: 33000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 5 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 84000 },
                            { item: "molagora", qty: 6 },
                            { item: "epic", qty: 2 }
                        ]
                    ],
                    [
                        // max +3
                        [
                            // +1
                            { item: "gold", qty: 19000 },
                            { item: "molagora", qty: 1 },
                            { item: "rare", qty: 3 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 37000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 5 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 114000 },
                            { item: "molagora", qty: 6 },
                            { item: "epic", qty: 3 },
                        ]
                    ],
                    [
                        // max +4
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 27000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 3 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 45000 },
                            { item: "molagorago", qty: 1 },
                            { item: "rare", qty: 5 }
                        ],
                        [
                            // +4
                            { item: "gold", qty: 80000 },
                            { item: "molagorago", qty: 1 },
                            { item: "epic", qty: 2 }
                        ]
                    ],
                    [
                        // max +5
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 8000 },
                            { item: "molagora", qty: 2 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 33000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 5 }
                        ],
                        [
                            // +4
                            { item: "gold", qty: 47000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 7 }
                        ],
                        [
                            // +5
                            { item: "gold", qty: 84000 },
                            { item: "molagora", qty: 6 },
                            { item: "epic", qty: 2 }
                        ]
                    ],
                    [
                        // max +6
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 8000 },
                            { item: "molagora", qty: 2 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 18000 },
                            { item: "molagora", qty: 2 },
                            { item: "rare", qty: 2 }
                        ],
                        [
                            // +4
                            { item: "gold", qty: 32000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 4 }
                        ],
                        [
                            // +5
                            { item: "gold", qty: 45000 },
                            { item: "molagorago", qty: 1 },
                            { item: "rare", qty: 5 }
                        ],
                        [
                            // +6
                            { item: "gold", qty: 80000 },
                            { item: "molagorago", qty: 1 },
                            { item: "epic", qty: 2 }
                        ]
                    ],
                    [
                        // max +7
                        [
                            // +1
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +2
                            { item: "gold", qty: 4000 },
                            { item: "molagora", qty: 1 }
                        ],
                        [
                            // +3
                            { item: "gold", qty: 8000 },
                            { item: "molagora", qty: 2 }
                        ],
                        [
                            // +4
                            { item: "gold", qty: 27000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 3 }
                        ],
                        [
                            // +5
                            { item: "gold", qty: 32000 },
                            { item: "molagora", qty: 3 },
                            { item: "rare", qty: 4 }
                        ],
                        [
                            // +6
                            { item: "gold", qty: 55000 },
                            { item: "molagorago", qty: 1 },
                            { item: "rare", qty: 7 }
                        ],
                        [
                            // +7
                            { item: "gold", qty: 110000 },
                            { item: "molagorago", qty: 1 },
                            { item: "epic", qty: 3 }
                        ]
                    ]
                ]
            ],
            rarity: [{ label: "3 ★★★", value: 3 }, { label: "4 ★★★★", value: 4 }, { label: "5 ★★★★★", value: 5 }],
            classType: [
                { label: "Knight", value: "knight" },
                { label: "Warrior", value: "warrior" },
                { label: "Thief", value: "thief" },
                { label: "Ranger", value: "ranger" },
                { label: "Mage", value: "mage" },
                { label: "Soul Weaver", value: "soul-weaver" },
                { label: "Material", value: "material" }
            ],
            element: [
                { label: "Fire", value: "fire" },
                { label: "Earth", value: "earth" },
                { label: "Ice", value: "ice" },
                { label: "Light", value: "light" },
                { label: "Dark", value: "dark" }
            ],
            zodiac: [
                {
                    label: "Aries",
                    value: "aries",
                    normalAwakening: "blessing-of-orbis",
                    worldAwakening: "nightmare-mask",
                    normalSkill: "path-power-loop",
                    worldSkill: "nightmare-mask"
                },
                {
                    label: "Taurus",
                    value: "taurus",
                    normalAwakening: "blazing-rage",
                    worldAwakening: "horn-of-desire",
                    normalSkill: "shiny-enchantment",
                    worldSkill: "horn-of-desire"
                },
                {
                    label: "Gemini",
                    value: "gemini",
                    normalAwakening: "small-sun-badge",
                    worldAwakening: "fused-nerve",
                    normalSkill: "ring-of-glory",
                    worldSkill: "fused-nerve"
                },
                {
                    label: "Cancer",
                    value: "cancer",
                    normalAwakening: "special-alarm-loop",
                    worldAwakening: "the-heart-of-hypocrisy",
                    normalSkill: "baby-mouse-insignia",
                    worldSkill: "the-heart-of-hypocrisy"
                },
                {
                    label: "Leo",
                    value: "leo",
                    normalAwakening: "ultra-fang",
                    worldAwakening: "blazing-soul",
                    normalSkill: "twisted-fang",
                    worldSkill: "blazing-soul"
                },
                {
                    label: "Virgo",
                    value: "virgo",
                    normalAwakening: "eternal-forest-dust",
                    worldAwakening: "demon-blood-gem",
                    normalSkill: "flame-of-soul",
                    worldSkill: "demon-blood-gem"
                },
                {
                    label: "Libra",
                    value: "libra",
                    normalAwakening: "dream-time-circuit",
                    worldAwakening: "reingar-student-id",
                    normalSkill: "mysterious-flash",
                    worldSkill: "reingar-student-id"
                },
                {
                    label: "Scorpio",
                    value: "scorpio",
                    normalAwakening: "erikion-carapace",
                    worldAwakening: "black-curse-powder",
                    normalSkill: "sharp-spearhead",
                    worldSkill: "black-curse-powder"
                },
                {
                    label: "Sagittarius",
                    value: "sagittarius",
                    normalAwakening: "cold-look",
                    worldAwakening: "mercenarys-medicine",
                    normalSkill: "archers-vision",
                    worldSkill: "mercenarys-medicine"
                },
                {
                    label: "Capricorn",
                    value: "capricorn",
                    normalAwakening: "cursed-ashes",
                    worldAwakening: "dragons-wrath",
                    normalSkill: "slime-jelly",
                    worldSkill: "dragons-wrath"
                },
                {
                    label: "Aquarius",
                    value: "aquarius",
                    normalAwakening: "order-of-the-shield-insignia",
                    worldAwakening: "fighter-medal",
                    normalSkill: "leather-sheath",
                    worldSkill: "fighter-medal"
                },
                {
                    label: "Pisces",
                    value: "pisces",
                    normalAwakening: "blood-flaked-bone",
                    worldAwakening: "ancient-creature-nucleus",
                    normalSkill: "strange-jelly",
                    worldSkill: "ancient-creature-nucleus"
                }
            ],
            relationType: [
                { label: "Love", value: "love" },
                { label: "Trust", value: "trust" },
                { label: "Grudge", value: "grudge" },
                { label: "Rival", value: "rival" },
                { label: "Longing", value: "longing" }
            ],
            buffs: [
                { title: "Increase Attack", slug: "stic_att_up", checked: false },
                { title: "Increase Defense", slug: "stic_def_up", checked: false },
                { title: "Increase Speed", slug: "stic_speed_up", checked: false },
                { title: "Increase Dodge", slug: "stic_dodge_up", checked: false },
                {
                    title: "Increase Critical Hit Chance",
                    slug: "stic_cri_up",
                    checked: false
                },
                {
                    title: "Increase Critical Hit Damage",
                    slug: "stic_cridmg_up",
                    checked: false
                },
                {
                    title: "Increase Critical Hit Resistance",
                    slug: "stic_cri_res_up",
                    checked: false
                },
                { title: "Increase Maximum HP", slug: "stic_maxhp_up", checked: false },
                {
                    title: "Increase Debuff Resistance",
                    slug: "stic_con_up",
                    checked: false
                },
                { title: "Immune", slug: "stic_debuf_impossible", checked: false },
                { title: "Revive", slug: "stic_bless", checked: false },
                { title: "Barrier", slug: "stic_protect", checked: false },
                { title: "Counter", slug: "stic_counter", checked: false },
                { title: "Invincible", slug: "stic_invincible", checked: false },
                { title: "Stealth", slug: "stic_hide", checked: false },
                { title: "Immortal", slug: "stic_immortality", checked: false },
                { title: "Continous Heal", slug: "stic_heal", checked: false },
                { title: "Enraged", slug: "stic_madness", checked: false },
                { title: "Reflect", slug: "stic_reflect", checked: false },
                {
                    title: "Increase Attack (Stackable)",
                    slug: "stic_att_inc",
                    checked: false
                }
            ],
            debuffs: [
                { title: "Decrease Attack", slug: "stic_att_dn", checked: false },
                { title: "Decrease Defense", slug: "stic_def_dn", checked: false },
                { title: "Decrease Speed", slug: "stic_speed_dn", checked: false },
                { title: "Decrease Dodge", slug: "stic_dodge_dn", checked: false },
                { title: "Decrease Hit Chance", slug: "stic_blind", checked: false },
                { title: "Poison", slug: "stic_dot", checked: false },
                { title: "Bleed", slug: "stic_blood", checked: false },
                { title: "Burn", slug: "stic_blaze", checked: false },
                { title: "Provoke", slug: "stic_provoke", checked: false },
                { title: "Stun", slug: "stic_stun", checked: false },
                { title: "Curse", slug: "stic_curse", checked: false },
                { title: "Confusion", slug: "stic_dizzy", checked: false },
                { title: "Unhealable", slug: "stic_heal_impossible", checked: false },
                { title: "Cannot Buff", slug: "stic_buf_impossible", checked: false },
                { title: "Target", slug: "stic_sign", checked: false },
                { title: "Silence", slug: "stic_silence", checked: false },
                { title: "Sleep", slug: "stic_sleep", checked: false },
                { title: "Shock", slug: "stic_shock", checked: false },
                { title: "Vampiric Touch", slug: "stic_vampire", checked: false },
                { title: "Magic Nail", slug: "stic_nail", checked: false },
                {
                    title: "Decrease Critical Damage",
                    slug: "stic_cridmg_dn",
                    checked: false
                }
            ],
            stats: [
                { label: "Attack", value: "atk" },
                { label: "Health", value: "hp" },
                { label: "Speed", value: "spd" },
                { label: "Defense", value: "def" },
                { label: "Critical Hit Chance", value: "chc" },
                { label: "Critical Hit Damage", value: "chd" },
                { label: "Effectiveness", value: "eff" },
                { label: "Effect Resistance", value: "efr" },
                { label: "Dual Attack Chance", value: "dac" }
            ]
        },
        alert: {
            color: "secondary",
            message: "",
            show: false
        }
    };

    handleAlert = (color, message) => {
        const alert = { ...this.state.alert };
        alert["show"] = true;
        alert["color"] = color;
        alert["message"] = message;
        this.setState({ alert });
        setTimeout(() => {
            alert["show"] = false;
            this.setState({
                alert
            });
        }, 3000);
    };

    handleReset = () => {
        this.setState({ hero: this.state.defaults.hero });
    };

    handleChange = (name, value) => {
        let hero = { ...this.state.hero };
        if (typeof hero[name] !== undefined) {
            if (name !== "hero") {
                hero[name] = value;
                console.info("Changed: ", hero[name]);
            } else {
                hero = value;
                console.info("Hero Import: ", hero);
            }
            this.setState({ hero });
        }
    };

    render() {
        const { color, show, message } = this.state.alert;
        return (
            <React.Fragment>
                <TopNavBar
                    title="Heroes"
                    alert={this.handleAlert}
                    isDark={this.props.isDark}
                    onReset={this.handleReset}
                >
                    <ButtonGroup>
                        <HeroExport output={this.state.hero} alert={this.handleAlert} isDark={this.props.isDark} />
                        <HeroImport
                            input={this.state.hero}
                            onChange={this.handleChange}
                            alert={this.handleAlert}
                            isDark={this.props.isDark}
                        />
                    </ButtonGroup>
                </TopNavBar>

                <Row>
                    <Col>
                        <HeroForm
                            hero={this.state.hero}
                            defaults={this.state.defaults}
                            onChange={this.handleChange}
                            isDark={this.props.isDark}
                        />
                    </Col>
                </Row>

                <Alert color={color} className={show ? "toaster" : "toaster hide"}>
                    {message}
                </Alert>
                <footer>
                    {" Version: 1.0.7 - Last Updated: 28/04/2019"}
                    <br />
                    Kevin Quach - EpicSeven DataBuilder <span>{new Date().getFullYear()}</span>
                </footer>
            </React.Fragment>
        );
    }
}

export default Hero;
