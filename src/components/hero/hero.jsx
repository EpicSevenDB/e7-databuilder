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
      }
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
          <Col md="9">
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
