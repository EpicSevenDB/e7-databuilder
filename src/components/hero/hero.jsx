import React, { Component } from "react";

import HeroForm from "./hero-form";
import HeroExport from "./hero-export";
import HeroImport from "./hero-import";
import TopNavBar from "../common/top-navbar";

import { Row, Col } from "reactstrap";

class Hero extends Component {
  state = {
    hero: {
      name: "",
      rarity: "",
      classType: "",
      element: "",
      zodiac: "",
      specialtyChangeName: "",
      selfSkillBarName: "",
      background: [""],
      relations: [{ hero: "", relationType: "" }],
      stats: {
        base: {
          cp: 0,
          atk: 0,
          hp: 0,
          spd: 0,
          def: 0,
          chc: 0,
          chd: 0,
          eff: 0,
          efr: 0,
          dac: 0
        },
        max: {
          cp: 0,
          atk: 0,
          hp: 0,
          spd: 0,
          def: 0,
          chc: 0,
          chd: 0,
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
          name: "",
          soulAcquire: 0,
          description: "",
          enhancement: [
            {
              description: "",
              resources: []
            },
            {
              description: "",
              resources: []
            },
            {
              description: "",
              resources: []
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
          awakenUpgrade: false,
          cooldown: 0,
          name: "",
          soulAcquire: 0,
          description: "",
          enhancement: [
            {
              description: "",
              resources: []
            },
            {
              description: "",
              resources: []
            },
            {
              description: "",
              resources: []
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
          awakenUpgrade: false,
          cooldown: 0,
          name: "",
          soulAcquire: 0,
          description: "",
          enhancement: [
            {
              description: "",
              resources: []
            },
            {
              description: "",
              resources: []
            },
            {
              description: "",
              resources: []
            }
          ],
          buffs: [],
          debuffs: []
        }
      ],
      specialtySkill: {
        name: "",
        description: "",
        dispatch: [],
        enhancement: [],
        stats: { command: 0, charm: 0, politics: 0 }
      },
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
          statsIncrease: [{ "": 0 }, { "": 0 }, { "": 0 }],
          resources: [{ item: "", qty: 0 }]
        },
        {
          rank: 2,
          skillUpgrade: false,
          statsIncrease: [{ "": 0 }, { "": 0 }, { "": 0 }],
          resources: [{ item: "", qty: 0 }]
        },
        {
          rank: 3,
          skillUpgrade: true,
          statsIncrease: [{ "": 0 }, { "": 0 }],
          resources: [{ item: "", qty: 0 }]
        },
        {
          rank: 4,
          skillUpgrade: false,
          statsIncrease: [{ "": 0 }, { "": 0 }, { "": 0 }],
          resources: [{ item: "", qty: 0 }]
        },
        {
          rank: 5,
          skillUpgrade: false,
          statsIncrease: [{ "": 0 }, { "": 0 }, { "": 0 }],
          resources: [{ item: "", qty: 0 }]
        },
        {
          rank: 6,
          skillUpgrade: false,
          statsIncrease: [{ "": 0 }, { "": 0 }, { "": 0 }],
          resources: [{ item: "", qty: 0 }]
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
