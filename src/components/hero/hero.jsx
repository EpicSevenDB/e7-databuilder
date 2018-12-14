import React, { Component } from "react";

import HeroForm from "./hero-form";
import HeroExport from "./hero-export";
import HeroImport from "./hero-import";
import TopNavBar from "../common/top-navbar";

import { Row, Col } from "reactstrap";

class Hero extends Component {
  state = {
    hero: {
      name: "Aither",
      rarity: 3,
      classType: "soul-weaver",
      element: "ice",
      zodiac: "libra",
      specialtyChangeName: "",
      selfSkillBarName: "",
      background: [
        "Aither is the royal child of Ezera. He is bright and energetic, but he does not like those people who treat him as a weak boy. He desires to make his name as a brave knight one day, just like his mother."
      ],
      relations: [
        { hero: "arbiter-vildred", relationType: "grudge" },
        { hero: "angelica", relationType: "longing" },
        { hero: "ras", relationType: "longing" },
        { hero: "mercedes", relationType: "trust" },
        { hero: "vildred", relationType: "longing" },
        { hero: "iseria", relationType: "trust" },
        { hero: "chloe", relationType: "trust" }
      ],
      stats: {
        base: {
          cp: 2064,
          atk: 198,
          hp: 623,
          spd: 92,
          def: 74,
          chc: 15,
          chd: 150,
          eff: 0,
          efr: 0,
          dac: 5
        },
        max: {
          cp: 13178,
          atk: 705,
          hp: 4248,
          spd: 92,
          def: 672,
          chc: 15,
          chd: 150,
          eff: 0,
          efr: 0,
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
          name: "Whispering Spirit",
          soulAcquire: 1,
          description:
            "Attacks with spirit power, with a 25% chance to decrease Speed for 2 turns.",
          enhancement: [
            {
              description: "+10% damage dealt",
              resources: [
                { item: "molagora", qty: 1 },
                { item: "gold", qty: 4000 }
              ]
            },
            {
              description: "+10% effect chance",
              resources: [
                { item: "molagora", qty: 3 },
                { item: "mysterious-flash", qty: 2 },
                { item: "gold", qty: 22000 }
              ]
            },
            {
              description: "+15% effect chance",
              resources: [
                { item: "molagorago", qty: 1 },
                { item: "mysterious-flash", qty: 3 },
                { item: "gold", qty: 35000 }
              ]
            },
            {
              description: "+15% damage dealt",
              resources: [
                { item: "molagorago", qty: 1 },
                { item: "mysterious-flash", qty: 4 },
                { item: "gold", qty: 40000 }
              ]
            }
          ],
          buffs: [],
          debuffs: ["stic_speed_dn"]
        },
        {
          isPassive: false,
          soulBurn: 10,
          selfSkillBarValue: 0,
          soulBurnEffect: "Increases the amount recovered.",
          awakenUpgrade: false,
          cooldown: 2,
          name: "Guard",
          soulAcquire: 1,
          description:
            "Recovers the ally's Health with water energy. Amount recovered is proportional to Attack.",
          enhancement: [
            {
              description: "+5% healing",
              resources: [
                { item: "molagora", qty: 1 },
                { item: "gold", qty: 4000 }
              ]
            },
            {
              description: "+5% healing",
              resources: [
                { item: "molagora", qty: 3 },
                { item: "mysterious-flash", qty: 2 },
                { item: "gold", qty: 22000 }
              ]
            },
            {
              description: "+10% healing",
              resources: [
                { item: "molagorago", qty: 1 },
                { item: "mysterious-flash", qty: 3 },
                { item: "gold", qty: 35000 }
              ]
            },
            {
              description: "+10% healing",
              resources: [
                { item: "molagorago", qty: 1 },
                { item: "mysterious-flash", qty: 4 },
                { item: "gold", qty: 40000 }
              ]
            }
          ],
          buffs: [],
          debuffs: []
        },
        {
          isPassive: false,
          soulBurn: 0,
          selfSkillBarValue: 0,
          soulBurnEffect: "",
          awakenUpgrade: true,
          cooldown: 4,
          name: "Spirit's Call",
          soulAcquire: 2,
          description:
            "Recovers Health of all allies and casts a barrier for 2 turns with spirit power. Amount recovered and barrier strength is proportional to the caster's Attack.",
          enhancement: [
            {
              description: "+5% healing",
              resources: [
                { item: "molagora", qty: 1 },
                { item: "gold", qty: 4000 }
              ]
            },
            {
              description: "+5% healing",
              resources: [
                { item: "molagora", qty: 2 },
                { item: "gold", qty: 8000 }
              ]
            },
            {
              description: "+5% healing",
              resources: [
                { item: "molagora", qty: 3 },
                { item: "gold", qty: 12000 }
              ]
            },
            {
              description: "-1 turn cooldown",
              resources: [
                { item: "molagora", qty: 3 },
                { item: "mysterious-flash", qty: 3 },
                { item: "gold", qty: 27000 }
              ]
            },
            {
              description: "+5% healing",
              resources: [
                { item: "molagora", qty: 4 },
                { item: "mysterious-flash", qty: 4 },
                { item: "gold", qty: 36000 }
              ]
            },
            {
              description: "+10% healing",
              resources: [
                { item: "molagorago", qty: 1 },
                { item: "mysterious-flash", qty: 5 },
                { item: "gold", qty: 45000 }
              ]
            },
            {
              description: "+10% healing",
              resources: [
                { item: "molagorago", qty: 1 },
                { item: "mysterious-flash", qty: 6 },
                { item: "gold", qty: 50000 }
              ]
            }
          ],
          buffs: ["stic_protect"],
          debuffs: []
        }
      ],
      specialtySkill: {
        name: "First Aid",
        description: "With his warm touch, there's nothing he can't heal.",
        dispatch: ["[Weakened] attribute mission"],
        enhancement: ["Reward bonus +10%"],
        stats: { command: 41, charm: 80, politics: 37 }
      },
      memoryImprint: [
        {
          rank: "d",
          status: {
            type: "atk",
            increase: 24
          }
        },
        {
          rank: "c",
          status: {
            type: "atk",
            increase: 36
          }
        },
        {
          rank: "b",
          status: {
            type: "atk",
            increase: 48
          }
        },
        {
          rank: "a",
          status: {
            type: "atk",
            increase: 60
          }
        },
        {
          rank: "s",
          status: {
            type: "atk",
            increase: 72
          }
        },
        {
          rank: "ss",
          status: {
            type: "atk",
            increase: 84
          }
        },
        {
          rank: "sss",
          status: {
            type: "atk",
            increase: 96
          }
        }
      ],
      awakening: [
        {
          rank: 1,
          skillUpgrade: false,
          statsIncrease: [{ atk: "3%" }, { atk: 20 }, { hp: 60 }],
          resources: [{ item: "frost-rune", qty: 5 }]
        },
        {
          rank: 2,
          skillUpgrade: false,
          statsIncrease: [{ atk: "3%" }, { atk: 20 }, { hp: 60 }],
          resources: [{ item: "frost-rune", qty: 9 }]
        },
        {
          rank: 3,
          skillUpgrade: true,
          statsIncrease: [{ atk: 20 }, { hp: 60 }],
          resources: [
            { item: "frost-rune", qty: 12 },
            { item: "greater-frost-rune", qty: 6 }
          ]
        },
        {
          rank: 4,
          skillUpgrade: false,
          statsIncrease: [{ def: "6%" }, { atk: 30 }, { hp: 80 }],
          resources: [{ item: "greater-frost-rune", qty: 15 }]
        },
        {
          rank: 5,
          skillUpgrade: false,
          statsIncrease: [{ atk: "6%" }, { atk: 30 }, { hp: 80 }],
          resources: [
            { item: "epic-frost-rune", qty: 4 },
            { item: "dream-time-circuit", qty: 9 }
          ]
        },
        {
          rank: 6,
          skillUpgrade: false,
          statsIncrease: [{ atk: "6%" }, { atk: 30 }, { hp: 80 }],
          resources: [
            { item: "epic-frost-rune", qty: 6 },
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
    },
    alert: {
      isOpened: false,
      message: ""
    }
  };

  handleChange = (name, value) => {
    let hero = { ...this.state.hero };
    if (name === "hero") {
      hero = value;
    } else {
      hero[name] = value;
    }
    this.setState({ hero });
    console.info("Changed: ", hero);
  };
  render() {
    return (
      <React.Fragment>
        <TopNavBar title="Heroes">
          <HeroExport output={this.state.hero} />
          <HeroImport
            input={this.state.hero}
            onChange={this.handleChange}
            alert={this.handleAlert}
          />
        </TopNavBar>

        <Row>
          <Col>
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
