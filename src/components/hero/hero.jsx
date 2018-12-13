import React, { Component } from "react";

import HeroForm from "./hero-form";
import HeroExport from "./hero-export";

import { Row, Col, Button } from "reactstrap";

class Hero extends Component {
  state = {
    hero: {
      name: "Martial Artist Kenny",
      rarity: 5,
      classType: "warrior",
      element: "dark",
      zodiac: "leo",
      specialtyChangeName: "HAHAHA",
      selfSkillBarName: "RAGEEEE",
      background: "nothing",
      relations: [{ hero: "ken", relationType: "grudge" }],
      stats: {
        base: {
          cp: 2557,
          atk: 259,
          hp: 708,
          spd: 105,
          def: 70,
          chc: 21,
          chd: 150,
          eff: 0,
          efr: 0,
          dac: 5
        },
        max: {
          cp: 16259,
          atk: 1252,
          hp: 5219,
          spd: 105,
          def: 564,
          chc: 21,
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
          soulBurnEffect: "",
          awakenUpgrade: false,
          cooldown: 0,
          name: "Knockout",
          soulAcquire: 1,
          description:
            "Batters the enemy with 50% chance to decrease Attack for 1 turn.",
          enhancement: [
            { description: "+5% damage dealt", resources: [] },
            {
              description: "+5% damage dealt",
              resources: [
                { item: "molagora", qty: 3 },
                { item: "gold", qty: 12000 }
              ]
            },
            {
              description: "+10% effect chance",
              resources: [
                { item: "twisted-fang", qty: 2 },
                { item: "molagora", qty: 4 },
                { item: "gold", qty: 26000 }
              ]
            },
            {
              description: "+10% damage dealt",
              resources: [
                { item: "twisted-fang", qty: 4 },
                { item: "molagorago", qty: 1 },
                { item: "gold", qty: 26000 }
              ]
            },
            {
              description: "+15% effect chance",
              resources: [
                { item: "twisted-fang", qty: 5 },
                { item: "molagorago", qty: 2 },
                { item: "gold", qty: 65000 }
              ]
            },
            {
              description: "+15% damage dealt",
              resources: [
                { item: "blazing-soul", qty: 2 },
                { item: "molagoragora", qty: 1 },
                { item: "gold", qty: 160000 }
              ]
            },
            {
              description: "ga",
              resources: [
                { item: "gold", qty: "" },
                { item: "", qty: "" },
                { item: "", qty: "" }
              ]
            },
            {
              description: "adf",
              resources: [
                { item: "gold", qty: "" },
                { item: "", qty: "" },
                { item: "", qty: "" }
              ]
            },
            {
              description: "asdf",
              resources: [
                { item: "gold", qty: "" },
                { item: "", qty: "" },
                { item: "", qty: "" }
              ]
            },
            {
              description: "aasdfas",
              resources: [
                { item: "gold", qty: "" },
                { item: "", qty: "" },
                { item: "", qty: "" }
              ]
            }
          ],
          buffs: [],
          debuffs: ["stic_att_dn"]
        },
        {
          isPassive: true,
          soulBurn: 0,
          soulBurnEffect: "",
          awakenUpgrade: false,
          cooldown: 0,
          name: "Dragon Flame",
          soulAcquire: 0,
          description: [
            "Has a 30% chance to couterattack when attacked, with a 100% chance to counterattack with Dragon Flame after suffering a critical hit.",
            "Dragon Flame: Causes critical hit, and deals damage proportional to the caster's lost Health."
          ],
          enhancement: [
            {
              description: "+5% damage dealt by Dragon Flame",
              resources: [
                { item: "twisted-fang", qty: 3 },
                { item: "molagora", qty: 1 },
                { item: "gold", qty: 19000 }
              ]
            },
            {
              description: "+10% damage dealt by Dragon Flame",
              resources: [
                { item: "twisted-fang", qty: 5 },
                { item: "molagorago", qty: 2 },
                { item: "gold", qty: 65000 }
              ]
            },
            {
              description: "+15% damage dealt by Dragon Flame",
              resources: [
                { item: "blazing-soul", qty: 3 },
                { item: "molagoragora", qty: 1 },
                { item: "gold", qty: 190000 }
              ]
            }
          ],
          buffs: [],
          debuffs: []
        },
        {
          isPassive: false,
          soulBurn: 10,
          soulBurnEffect: "Increases damage dealt",
          awakenUpgrade: true,
          cooldown: 5,
          name: "The Coming of Asura",
          soulAcquire: 3,
          description:
            "Attacks all enemies with a powerful ground pound, with a 50% chance to decrease Defense for 2 turns, and increase Attack of the caster for 2 turns.",
          enhancement: [
            {
              description: "+5% damage dealt",
              resources: [
                { item: "molagora", qty: 1 },
                { item: "gold", qty: 4000 }
              ]
            },
            {
              description: "+10% effect chance",
              resources: [
                { item: "molagora", qty: 3 },
                { item: "gold", qty: 12000 }
              ]
            },
            {
              description: "-1 turn cooldown",
              resources: [
                { item: "twisted-fang", qty: 2 },
                { item: "molagora", qty: 4 },
                { item: "gold", qty: 26000 }
              ]
            },
            {
              description: "+10% damage dealt",
              resources: [
                { item: "twisted-fang", qty: 4 },
                { item: "molagorago", qty: 1 },
                { item: "gold", qty: 26000 }
              ]
            },
            {
              description: "+15% effect chance",
              resources: [
                { item: "twisted-fang", qty: 5 },
                { item: "molagorago", qty: 2 },
                { item: "gold", qty: 65000 }
              ]
            },
            {
              description: "+15% damage dealt",
              resources: [
                { item: "blazing-soul", qty: 2 },
                { item: "molagoragora", qty: 1 },
                { item: "gold", qty: 160000 }
              ]
            }
          ],
          buffs: ["stic_att_up"],
          debuffs: ["stic_def_dn"]
        }
      ],
      specialtySkill: {
        name: "Finding the Strongest",
        description:
          "His desire to fight the strongest made him follow the path of Asura.",
        dispatch: ["[Chase] type mission"],
        enhancement: ["Reward bonus +6%"],
        stats: { command: 28, charm: 29, politics: 18 }
      },
      memoryImprint: [
        { rank: "d", status: { type: "atk", increase: "3.6%" } },
        { rank: "c", status: { type: "atk", increase: 0 } },
        { rank: "b", status: { type: "atk", increase: 0 } },
        { rank: "a", status: { type: "atk", increase: 0 } },
        { rank: "s", status: { type: "atk", increase: 0 } },
        { rank: "ss", status: { type: "atk", increase: 0 } },
        { rank: "sss", status: { type: "atk", increase: 0 } }
      ],
      awakening: [
        {
          rank: 1,
          skillUpgrade: false,
          statsIncrease: [{ atk: "3%" }, { atk: 20 }, { hp: 60 }],
          resources: [{ item: "dark-rune", qty: 10 }]
        },
        {
          rank: 2,
          skillUpgrade: false,
          statsIncrease: [{ atk: "3%" }, { atk: 20 }, { hp: 60 }],
          resources: [
            { item: "dark-rune", qty: 15 },
            { item: "greater-dark-rune", qty: 2 }
          ]
        },
        {
          rank: 3,
          skillUpgrade: true,
          statsIncrease: [{ atk: 20 }, { hp: 60 }],
          resources: [
            { item: "dark-rune", qty: 20 },
            { item: "greater-dark-rune", qty: 10 }
          ]
        },
        {
          rank: 4,
          skillUpgrade: false,
          statsIncrease: [{ chc: "6%" }, { atk: 30 }, { hp: 80 }],
          resources: [
            { item: "greater-dark-rune", qty: 10 },
            { item: "epic-dark-rune", qty: 2 }
          ]
        },
        {
          rank: 5,
          skillUpgrade: false,
          statsIncrease: [{ atk: "6%" }, { atk: 30 }, { hp: 80 }],
          resources: [
            { item: "epic-dark-rune", qty: 6 },
            { item: "ultra-fang", qty: 15 }
          ]
        },
        {
          rank: 6,
          skillUpgrade: false,
          statsIncrease: [{ atk: "6%" }, { atk: 30 }, { hp: 80 }],
          resources: [
            { item: "epic-dark-rune", qty: 10 },
            { item: "blazing-soul", qty: 10 }
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
        <HeroExport output={this.state.hero} />
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
