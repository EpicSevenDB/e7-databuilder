import React, { Component } from "react";

import HeroForm from "./hero-form";

import { Row, Col } from "reactstrap";

class Hero extends Component {
  state = {
    hero: {
      name: "Ras",
      rarity: 3,
      classType: "knight",
      element: "fire",
      zodiac: "libra",
      specialtyChangeName: "",
      selfSkillBarName: "",
      background: [
        "Created to protect the world and all life within it, he is admired as the leader of the Heirs and the alter ego of the Goddess. He has a good personality and is very understanding, though he lacks some understanding of Humans"
      ],
      relations: [
        { hero: "ruele-of-light", relationType: "trust" },
        { hero: "judge-kise", relationType: "trust" },
        { hero: "krau", relationType: "trust" },
        { hero: "iseria", relationType: "trust" },
        { hero: "ludwig", relationType: "trust" },
        { hero: "aither", relationType: "trust" },
        { hero: "mercedes", relationType: "trust" },
        { hero: "yuna", relationType: "trust" }
      ],
      stats: {
        base: {
          cp: 2222,
          atk: 203,
          hp: 706,
          spd: 95,
          def: 74,
          chc: 15,
          chd: 150,
          eff: 0,
          efr: 6,
          dac: 5
        },
        max: {
          cp: 15272,
          atk: 758,
          hp: 5826,
          spd: 95,
          def: 672,
          chc: 15,
          chd: 150,
          eff: 0,
          efr: 6,
          dac: 5
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
          name: "X-Slash",
          soulAcquire: 1,
          description:
            "Swing the sword and attack the enemy. Damage increases proportionally to your maximum Vitality",
          enhancement: [
            {
              description: "+5% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "+5% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "+5% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "+5% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "+10% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            }
          ],
          buffs: [],
          debuffs: []
        },
        {
          isPassive: false,
          soulBurn: 10,
          selfSkillBarValue: 0,
          soulBurnEffect: "The skill cooldown decreases by 2 turns.",
          awakenUpgrade: false,
          cooldown: 3,
          name: "Command Strike",
          soulAcquire: 2,
          description:
            "After successive attacks on the enemy, it will cause your strongest ally to Dual attack with you.",
          enhancement: [
            {
              description: "+5% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "+5% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "+5% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "+5% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "+10% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            }
          ],
          buffs: [],
          debuffs: []
        },
        {
          isPassive: false,
          soulBurn: 10,
          selfSkillBarValue: 0,
          soulBurnEffect: "",
          awakenUpgrade: true,
          cooldown: 5,
          name: "Sword of the Heir",
          soulAcquire: 2,
          description:
            "Strongly attacks with a swordstorm, recovering Health prportional to damage dealt, and increasing Defense of the caster for 2 turns. Damage dealt increases proportional to max Health of caster.",
          enhancement: [
            {
              description: "+5% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "+5% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "-1 turn cooldown",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "+5% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            },
            {
              description: "+10% damage dealt",
              resources: [{ item: "molagora", qty: 1 }]
            }
          ],
          buffs: ["stic_def_up"],
          debuffs: []
        }
      ],
      specialtySkill: {
        name: "Blessings of Covenants",
        description:
          "The Heir of the Covenant bears the weight of the world upon his shoulders.",
        dispatch: ["[Security] type mission"],
        enhancement: ["Reward bonus +6%"],
        stats: { command: 88, charm: 76, politics: 15 }
      },
      memoryImprint: [
        {
          rank: "d",
          status: {
            type: "hp",
            increase: 120
          }
        },
        {
          rank: "c",
          status: {
            type: "hp",
            increase: 180
          }
        },
        {
          rank: "b",
          status: {
            type: "hp",
            increase: 240
          }
        },
        {
          rank: "a",
          status: {
            type: "hp",
            increase: 300
          }
        },
        {
          rank: "s",
          status: {
            type: "hp",
            increase: 360
          }
        },
        {
          rank: "ss",
          status: {
            type: "hp",
            increase: 420
          }
        },
        {
          rank: "sss",
          status: {
            type: "hp",
            increase: 480
          }
        }
      ],
      awakening: [
        {
          rank: 1,
          skillUpgrade: false,
          statsIncrease: [{ hp: "3%" }, { atk: 20 }, { hp: 60 }],
          resources: [{ item: "flame-rune", qty: 5 }]
        },
        {
          rank: 2,
          skillUpgrade: false,
          statsIncrease: [{ def: "3%" }, { atk: 20 }, { hp: 60 }],
          resources: [{ item: "flame-rune", qty: 9 }]
        },
        {
          rank: 3,
          skillUpgrade: true,
          statsIncrease: [{ atk: 20 }, { hp: 60 }],
          resources: [
            { item: "flame-rune", qty: 12 },
            { item: "greater-flame-rune", qty: 6 }
          ]
        },
        {
          rank: 4,
          skillUpgrade: false,
          statsIncrease: [{ efr: "6%" }, { atk: 30 }, { hp: 80 }],
          resources: [{ item: "greater-flame-rune", qty: 15 }]
        },
        {
          rank: 5,
          skillUpgrade: false,
          statsIncrease: [{ hp: "6%" }, { atk: 30 }, { hp: 80 }],
          resources: [
            { item: "epic-flame-rune", qty: 4 },
            { item: "dream-time-circuit", qty: 9 }
          ]
        },
        {
          rank: 6,
          skillUpgrade: false,
          statsIncrease: [{ def: "6%" }, { atk: 30 }, { hp: 80 }],
          resources: [
            { item: "epic-flame-rune", qty: 6 },
            { item: "reingar-student-id", qty: 6 }
          ]
        }
      ]
    },
    defaults: {
      rarity: [
        { label: "2 ★★", value: 2 },
        { label: "3 ★★★", value: 3 },
        { label: "4 ★★★★", value: 4 },
        { label: "5 ★★★★★", value: 5 }
      ],
      classType: [
        { label: "Knight", value: "knight" },
        { label: "Warrior", value: "warrior" },
        { label: "Thief", value: "thief" },
        { label: "Ranger", value: "ranger" },
        { label: "Mage", value: "mage" },
        { label: "Soul Weaver", value: "soul-weaver" }
      ],
      element: [
        { label: "Fire", value: "fire" },
        { label: "Earth", value: "earth" },
        { label: "Ice", value: "ice" },
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
        { label: "Material", value: "material" }
      ],
      zodiac: [
        { label: "Aries", value: "aries" },
        { label: "Taurus", value: "taurus" },
        { label: "Gemini", value: "gemini" },
        { label: "Cancer", value: "cancer" },
        { label: "Leo", value: "leo" },
        { label: "Virgo", value: "virgo" },
        { label: "Libra", value: "libra" },
        { label: "Scorpio", value: "scorpio" },
        { label: "Sagittarius", value: "sagittarius" },
        { label: "Capricorn", value: "capricorn" },
        { label: "Aquarius", value: "aquarius" },
        { label: "Pisces", value: "pisces" }
      ],
      relationType: [
        { label: "Trust", value: "trust" },
        { label: "Grudge", value: "grudge" },
        { label: "Rival", value: "rival" },
        { label: "Longing", value: "longing" }
      ]
    }
  };

  handleChange = (name, value) => {
    const hero = { ...this.state.hero };
    hero[name] = value;
    this.setState({ hero });
    console.info("Changed: ", hero);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Heroes</h1>
        <Row className="main-container">
          <Col md="12">
            <HeroForm
              hero={this.state.hero}
              defaults={this.state.defaults}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Hero;
