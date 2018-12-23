import React, { Component } from "react";

import HeroForm from "./hero-form";
import HeroExport from "./hero-export";
import HeroImport from "./hero-import";
import TopNavBar from "../common/top-navbar";

import { Row, Col, Alert, ButtonGroup } from "reactstrap";

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
        { title: "Immortal", slug: "stic_immortal", checked: false },
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
        { title: "Burn", slug: "stic_burn", checked: false },
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
            <HeroExport
              output={this.state.hero}
              alert={this.handleAlert}
              isDark={this.props.isDark}
            />
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
          Kevin Quach - EpicSeven DataBuilder -{" "}
          <span>{new Date().getFullYear()}</span>
        </footer>
      </React.Fragment>
    );
  }
}

export default Hero;
