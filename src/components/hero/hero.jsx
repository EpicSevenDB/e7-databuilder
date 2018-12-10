import React, { Component } from "react";

import HeroInput from "./hero-input";

import { Row, Col } from "reactstrap";

class Hero extends Component {
  state = {
    hero: {
      name: "",
      rarity: "5",
      classType: "thief",
      element: "ice",
      zodiac: "libra",
      specialtyChangeName: "Challenger",
      selfSkillBarName: "Rage",
      background: "Here to save the world.",
      relations: [
        { hero: "Ras", relationType: "longing" },
        { hero: "Mercedes", relationType: "rival" },
        { hero: "Akry", relationType: "trust" }
      ]
    },
    defaults: {
      rarity: [
        { label: "2 ★★", value: "2" },
        { label: "3 ★★★", value: "3" },
        { label: "4 ★★★★", value: "4" },
        { label: "5 ★★★★★", value: "5" }
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

  handleChange = ({ currentTarget: input }) => {
    const hero = { ...this.state.hero };
    hero[input.name] = input.value;
    this.setState({ hero });
    console.info("Changed: ", hero);
  };

  handleRelationDelete = i => {
    const hero = { ...this.state.hero };
    hero.relations = [
      ...hero.relations.slice(0, i),
      ...hero.relations.slice(i + 1)
    ];
    this.setState({ hero });
    console.info("Relation Deleted:", hero.relations);
  };

  //Handles finding the right index and placing the new values
  handleRelationChange = (i, type, value) => {
    const relations = [...this.state.hero.relations];
    relations[i][type] = value;
    this.setState({ relations });
    console.info("Relation Changed:", relations);
  };
  handleNewRelation = () => {
    const hero = { ...this.state.hero };
    const newRelation = {
      hero: "",
      relationType: ""
    };
    hero.relations = [...hero.relations, newRelation];
    this.setState({ hero });
    console.info("Relation Added:", hero.relations);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Heroes</h1>
        <Row>
          <Col>
            <HeroInput
              hero={this.state.hero}
              onChange={this.handleChange}
              onRelationChange={this.handleRelationChange}
              onRelationDelete={this.handleRelationDelete}
              onNewRelation={this.handleNewRelation}
              defaults={this.state.defaults}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Hero;
