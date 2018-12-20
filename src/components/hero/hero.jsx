import React, { Component } from "react";

import HeroForm from "./hero-form";
import HeroExport from "./hero-export";
import HeroImport from "./hero-import";
import TopNavBar from "../common/top-navbar";

import { Row, Col, Alert, ButtonGroup } from "reactstrap";

class Hero extends Component {
  state = {
    hero: {
      name: "Diene",
      rarity: 5,
      classType: "soul-weaver",
      element: "ice",
      zodiac: "gemini",
      specialtyChangeName: "",
      selfSkillBarName: "",
      background: [
        "Diene, Saint of Ezera, received the Goddess's divine revelation and fearlessly led the world to victory against the Archdemon, even without the Heir of the Covenant. Later, she became Ezera's queen."
      ],
      relations: [
        { hero: "bask", relationType: "love" },
        { hero: "nilgal", relationType: "grudge" },
        { hero: "angelica", relationType: "longing" },
        { hero: "specter-tenebria", relationType: "grudge" },
        { hero: "kayron", relationType: "grudge" },
        { hero: "krau", relationType: "trust" },
        { hero: "gunther", relationType: "trust" }
      ],
      stats: {
        base: {
          cp: 2330,
          atk: 195,
          hp: 691,
          spd: 103,
          def: 82,
          chc: 15,
          chd: 150,
          eff: 0,
          efr: 9,
          dac: 5
        },
        max: {
          cp: 13961,
          atk: 603,
          hp: 4945,
          spd: 103,
          def: 662,
          chc: 15,
          chd: 150,
          eff: 0,
          efr: 9,
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
          name: "Light of Judgement",
          soulAcquire: 1,
          description:
            "Emits a ray of brilliant light, increasing the caster's Combat Readiness by 10%. Effect doubles when caster is buffed.",
          enhancement: [
            {
              description: "+5% damage dealt",
              resources: [
                { item: "molagora", qty: 1 },
                { item: "gold", qty: 4000 }
              ]
            },
            {
              description: "+2% combat readiness",
              resources: [{ item: "", qty: 0 }, { item: "gold", qty: 0 }]
            },
            {
              description: "+5% damage dealt",
              resources: [{ item: "", qty: 0 }, { item: "gold", qty: 0 }]
            },
            {
              description: "+5% damage dealt",
              resources: [{ item: "", qty: 0 }, { item: "gold", qty: 0 }]
            },
            {
              description: "+3% combat readiness",
              resources: [{ item: "", qty: 0 }, { item: "gold", qty: 0 }]
            },
            {
              description: "+10% damage dealt",
              resources: [{ item: "", qty: 0 }, { item: "gold", qty: 0 }]
            },
            {
              description: "+10% damage dealt",
              resources: [{ item: "", qty: 0 }, { item: "gold", qty: 0 }]
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
          cooldown: 4,
          name: "Blessings of the Goddess",
          soulAcquire: 2,
          description:
            "With the Blessings of the Goddess, covers all allies with a barrier for 2 turns before dispelling one debuff. Barrier strength increases proportional to the target's max Health.",
          enhancement: [
            {
              description: "+5% barrier strength",
              resources: [
                { item: "molagora", qty: 1 },
                { item: "gold", qty: 4000 }
              ]
            },
            {
              description: "+5% barrier strength",
              resources: [
                { item: "molagora", qty: 3 },
                { item: "gold", qty: 0 }
              ]
            },
            {
              description: "-1 turn cooldown",
              resources: [{ item: "", qty: 0 }, { item: "gold", qty: 0 }]
            },
            {
              description: "+10% barrier strength",
              resources: [{ item: "", qty: 0 }, { item: "gold", qty: 0 }]
            },
            {
              description: "+15% barrier strength",
              resources: [{ item: "", qty: 0 }, { item: "gold", qty: 0 }]
            },
            {
              description: "+15% barrier strength",
              resources: [{ item: "", qty: 0 }, { item: "gold", qty: 0 }]
            }
          ],
          buffs: ["stic_protect"],
          debuffs: []
        },
        {
          isPassive: false,
          soulBurn: 20,
          selfSkillBarValue: 0,
          soulBurnEffect: "Skill cooldown decreased by 2 turns.",
          awakenUpgrade: true,
          cooldown: 5,
          name: "Saint's Prayer",
          soulAcquire: 2,
          description:
            "A miracle of the Goddess manifests, increasing Attack and Critical Hit Resistance of all allies for 3 turns, before increasing the caster's Combat Readiness by 50%.",
          enhancement: [
            {
              description: "Acquire +1 soul",
              resources: [
                { item: "molagora", qty: 3 },
                { item: "ring-of-glory", qty: 5 },
                { item: "gold", qty: 37000 }
              ]
            },
            {
              description: "-1 turn cooldown",
              resources: [
                { item: "", qty: 0 },
                { item: "", qty: 0 },
                { item: "gold", qty: 0 }
              ]
            }
          ],
          buffs: ["stic_att_up", "stic_cri_res_up"],
          debuffs: []
        }
      ],
      specialtySkill: {
        name: "Saint of Ezera",
        description:
          "She overcomes the hardship through her deeply pious faith.",
        dispatch: ["[Support] Type"],
        enhancement: ["Reward bonus +6%"],
        stats: { command: 78, charm: 86, politics: 90 }
      },
      memoryImprint: [
        {
          rank: "d",
          status: {
            type: "atk",
            increase: "3.6%"
          }
        },
        {
          rank: "c",
          status: {
            type: "atk",
            increase: 0
          }
        },
        {
          rank: "b",
          status: {
            type: "atk",
            increase: 0
          }
        },
        {
          rank: "a",
          status: {
            type: "atk",
            increase: 0
          }
        },
        {
          rank: "s",
          status: {
            type: "atk",
            increase: 0
          }
        },
        {
          rank: "ss",
          status: {
            type: "atk",
            increase: 0
          }
        },
        {
          rank: "sss",
          status: {
            type: "atk",
            increase: 0
          }
        }
      ],
      awakening: [
        {
          rank: 1,
          skillUpgrade: false,
          statsIncrease: [{ afr: "3%" }, { atk: 20 }, { hp: 60 }],
          resources: [{ item: "frost-rune", qty: 10 }]
        },
        {
          rank: 2,
          skillUpgrade: false,
          statsIncrease: [{ hp: "3%" }, { atk: 20 }, { hp: 60 }],
          resources: [
            { item: "frost-rune", qty: 15 },
            { item: "greater-frost-rune", qty: 2 }
          ]
        },
        {
          rank: 3,
          skillUpgrade: true,
          statsIncrease: [{ atk: 20 }, { hp: 60 }],
          resources: [
            { item: "frost-rune", qty: 20 },
            { item: "greater-frost-rune", qty: 10 }
          ]
        },
        {
          rank: 4,
          skillUpgrade: false,
          statsIncrease: [{ spd: 4 }, { atk: 30 }, { hp: 80 }],
          resources: [
            { item: "greater-frost-rune", qty: 10 },
            { item: "epic-frost-rune", qty: 2 }
          ]
        },
        {
          rank: 5,
          skillUpgrade: false,
          statsIncrease: [{ afr: "6%" }, { atk: 30 }, { hp: 80 }],
          resources: [
            { item: "epic-frost-rune", qty: 6 },
            { item: "small-sun-badge", qty: 15 }
          ]
        },
        {
          rank: 6,
          skillUpgrade: false,
          statsIncrease: [{ hp: "6%" }, { atk: 30 }, { hp: 80 }],
          resources: [
            { item: "epic-frost-rune", qty: 10 },
            { item: "fused-nerve", qty: 10 }
          ]
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
      if (name === "hero") {
        hero = value;
      } else {
        hero[name] = value;
      }
      this.setState({ hero });
      console.info("Changed: ", hero);
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
      </React.Fragment>
    );
  }
}

export default Hero;
