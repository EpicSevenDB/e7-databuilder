import React, { Component } from "react";

import HeroInputRelation from "./hero-input-relation";
import { Col, FormGroup, Label, Input, Button } from "reactstrap";

class HeroInput extends Component {
  state = {
    default: {
      rarity: [2, 3, 4, 5],
      class: [
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
    relations: []
  };

  handleDelete = index => {
    const relations = [
      ...this.state.relations.slice(0, index),
      ...this.state.relations.slice(index + 1)
    ];
    this.setState({ relations });
  };
  handleNewRelation = () => {
    const newRelation = {
      heroName: "",
      relation: ""
    };
    const relations = [...this.state.relations, newRelation];
    this.setState({ relations });

    console.info("New Relation Added");
  };
  handleChange = (index, value) => {
    const relations = [...this.state.relations];
    relations[index].heroName = value;
    this.setState({ relations });

    console.info("Change is happening", index);
  };
  render() {
    return (
      <React.Fragment>
        <h3>Input</h3>
        {/* Name */}
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="heroName" placeholder="Ras" bsSize="sm" />
        </FormGroup>
        {/* Rarity & Class */}
        <FormGroup row>
          <Col>
            <Label for="heroRarity">Rarity</Label>
            <Input bsSize="sm" type="select" name="heroRarity" defaultValue="">
              <option disabled value="">
                Select Rarity
              </option>
              {this.state.default.rarity.map((rarity, i) => (
                <option key={i} value={rarity}>
                  {rarity}
                </option>
              ))}
            </Input>
          </Col>
          <Col>
            <Label for="heroClass">Class</Label>
            <Input bsSize="sm" type="select" name="heroClass" defaultValue="">
              <option disabled value="">
                Select Class
              </option>
              {this.state.default.class.map((heroClass, i) => (
                <option key={i} value={heroClass.value}>
                  {heroClass.label}
                </option>
              ))}
            </Input>
          </Col>
        </FormGroup>
        {/* Element & Zodiac */}
        <FormGroup row>
          <Col>
            <Label for="heroElement">Element</Label>
            <Input bsSize="sm" type="select" name="heroElement" defaultValue="">
              <option disabled value="">
                Select Element
              </option>
              {this.state.default.element.map((element, i) => (
                <option key={i} value={element.value}>
                  {element.label}
                </option>
              ))}
            </Input>
          </Col>
          <Col>
            <Label for="heroZodiac">Zodiac</Label>
            <Input bsSize="sm" type="select" name="heroZodiac" defaultValue="">
              <option disabled value="">
                Select Zodiac
              </option>
              {this.state.default.zodiac.map((zodiac, i) => (
                <option key={i} value={zodiac.value}>
                  {zodiac.label}
                </option>
              ))}
            </Input>
          </Col>
        </FormGroup>
        {/* Specialty */}
        <FormGroup>
          <Label for="heroSpecialty">Specialty Name</Label>
          <Input type="text" name="heroSpecialty" bsSize="sm" />
        </FormGroup>
        {/* Background */}
        <FormGroup>
          <Label for="heroBackground">Background</Label>
          <Input type="textarea" rows="4" />
        </FormGroup>
        {/* Relation */}
        <FormGroup>
          <Label>Hero Relation</Label>
          {this.state.relations.map((relation, i) => (
            <HeroInputRelation
              key={i}
              index={i}
              relationType={this.state.default.relationType}
              relation={relation}
              onDelete={this.handleDelete}
              onChange={this.handleChange}
            />
          ))}
          <Button
            onClick={this.handleNewRelation}
            color="secondary"
            outline
            block
          >
            Add new relation
          </Button>
        </FormGroup>
      </React.Fragment>
    );
  }
}

export default HeroInput;
