import React, { Component } from "react";

import HeroForm from "./hero-form";

import { Row, Col } from "reactstrap";

class Hero extends Component {
  state = {
    hero: {
      name: "Cidd",
      rarity: 5,
      classType: "thief",
      element: "earth",
      zodiac: "aries",
      specialtyChangeName: "",
      selfSkillBarName: "",
      background: [
        "Cidd is the youngest member and mascot of the Wild Dog Company, a group of mercenaries headquartered in an old ruined fortress in Wetheric Moor. Contrary to his cheerful and carefree appearance, he will complete any task assigned to him. He cares for the Wild Dog Company as if they were family."
      ],
      relations: [
        { hero: "dingo", relationType: "trust" },
        { hero: "otillie", relationType: "trust" },
        { hero: "armin", relationType: "rival" }
      ],
      stats: {
        base: {
          cp: 2434,
          atk: 228,
          hp: 675,
          spd: 126,
          def: 54,
          chc: 21,
          chd: 150,
          eff: 0,
          efr: 0,
          dac: 5
        },
        max: {
          cp: 14727,
          atk: 990,
          hp: 4936,
          spd: 126,
          def: 466,
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
          selfSkillBarValue: 0,
          soulBurnEffect: "",
          awakenUpgrade: false,
          cooldown: 0,
          name: "Relentless Strike",
          soulAcquire: 1,
          description:
            "Attacks with a dagger. A critical hit will increase speed of the caster for 2 turns. Damage dealt increases proportional to the caster's speed",
          enhancement: [
            {
              description: "+5% damage dealt",
              resources: [
                { item: "gold", qty: 4000 },
                { item: "molagora", qty: 1 }
              ]
            },
            {
              description: "+5% damage dealt",
              resources: [
                { item: "gold", qty: 8000 },
                { item: "molagora", qty: 2 }
              ]
            },
            {
              description: "+5% damage dealt",
              resources: [
                { item: "gold", qty: 21000 },
                { item: "path power loop", qty: 1 },
                { item: "molagora", qty: 4 }
              ]
            },
            {
              description: "+10% damage dealt",
              resources: [
                { item: "gold", qty: 35000 },
                { item: "path power loop", qty: 3 },
                { item: "molagorago", qty: 1 }
              ]
            },
            {
              description: "+10% damage dealt",
              resources: [
                { item: "gold", qty: 160000 },
                { item: "nightmare mask", qty: 2 },
                { item: "molagoragora", qty: 1 }
              ]
            }
          ],
          buffs: ["stic_spd_up"],
          debuffs: []
        },
        {
          isPassive: true,
          soulBurn: 0,
          soulBurnEffect: "",
          awakenUpgrade: false,
          cooldown: 0,
          name: "Wind's Resolve",
          soulAcquire: 0,
          description:
            "Enhances Relentless Strike, increasing Damage dealt, when the caster is granted increased speed, and decreases defense of the enemy for 1 turn.",
          enhancement: [
            {
              description: "+5% damage dealt by Relentless Strike",
              resources: [
                { item: "gold", qty: 4000 },
                { item: "molagora", qty: 1 }
              ]
            },
            {
              description: "+5% damage dealt by Relentless Strike",
              resources: [
                { item: "gold", qty: 8000 },
                { item: "molagora", qty: 2 }
              ]
            },
            {
              description: "+5% damage dealt by Relentless Strike",
              resources: [
                { item: "gold", qty: 21000 },
                { item: "path power loop", qty: 1 },
                { item: "molagora", qty: 4 }
              ]
            },
            {
              description: "+10% damage dealt by Relentless Strike",
              resources: [
                { item: "gold", qty: 35000 },
                { item: "path power loop", qty: 3 },
                { item: "molagorago", qty: 1 }
              ]
            },
            {
              description: "+15% damage dealt by Relentless Strike",
              resources: [
                { item: "gold", qty: 160000 },
                { item: "nightmare mask", qty: 2 },
                { item: "molagoragora", qty: 1 }
              ]
            }
          ],
          buffs: ["stic_spd_up"],
          debuffs: []
        },
        {
          isPassive: false,
          soulBurn: 10,
          soulBurnEffect: "Increases damage dealt",
          awakenUpgrade: true,
          cooldown: 4,
          name: "Hack",
          soulAcquire: 2,
          description:
            "Cuts with a dagger, granting an extra turn if they enemy is defeated. Attacks with a more powerful skill when the caster is granted increased Speed.",
          enhancement: [
            {
              description: "+5% damage dealt",
              resources: [
                { item: "gold", qty: 4000 },
                { item: "molagora", qty: 1 }
              ]
            },
            {
              description: "+5% damage dealt",
              resources: [
                { item: "gold", qty: 8000 },
                { item: "molagora", qty: 2 }
              ]
            },
            {
              description: "-1 turn cooldown",
              resources: [
                { item: "gold", qty: 21000 },
                { item: "path power loop", qty: 1 },
                { item: "molagora", qty: 4 }
              ]
            },
            {
              description: "+10% damage dealt",
              resources: [
                { item: "gold", qty: 35000 },
                { item: "path power loop", qty: 3 },
                { item: "molagorago", qty: 1 }
              ]
            },
            {
              description: "+10% damage dealt",
              resources: [
                { item: "gold", qty: 160000 },
                { item: "nightmare mask", qty: 2 },
                { item: "molagoragora", qty: 1 }
              ]
            }
          ],
          buffs: ["stic_spd_up"],
          debuffs: []
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
        <Row>
          <Col md="10">
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
