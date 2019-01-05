        
  // handleDelete = (type, i, j) => {
  //   const awakening = [...this.props.awakening];
  //   awakening[i][type] = [
  //     ...awakening[i][type].slice(0, j),
  //     ...awakening[i][type].slice(j + 1)
  //   ];
  //   this.props.onChange("awakening", awakening);
  // };

  // handleAdd = (type, i) => {
  //   const awakening = [...this.props.awakening];
  //   let newObj = {};
  //   if (type === "statsIncrease") {
  //     newObj = { "": "" };
  //   } else {
  //     newObj = { item: "", qty: 0 };
  //   }
  //   awakening[i][type] = [...awakening[i][type], newObj];
  //   this.setState({ awakening });
  // };

        <Nav tabs>
          {awakening.map((awake, i) => (
            <NavItem key={i}>
              <NavLink
                className={classnames({ active: this.state.activeTab === i })}
                onClick={() => {
                  this.toggle(i);
                }}
              >
                Rank {i + 1}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          {awakening.map((awake, i) => (
            <TabPane key={i} tabId={i}>
              <Col md="12">
                <FormGroup row>
                  {/* <CustomInput
                    id={"skillUpgrade-" + i} //Id needs to be unique when using customInput
                    type="checkbox"
                    name="skillUpgrade"
                    label="skillUpgrade"
                    className="margin-10"
                    checked={awake.skillUpgrade}
                    onBlur={this.onBlur}
                    onChange={e =>
                      this.handleChange(
                        e.currentTarget.name,
                        e.currentTarget.checked,
                        i
                      )
                    }
                  /> */}
                  <Col md="12">
                    <Label>
                      statIncreases
                      <Badgetip
                        value="Percents are converted to decimal. Example: 5% -> 0.05"
                        id={"statIncrease-" + i}
                      />
                    </Label>
                  </Col>
                  {awake.statsIncrease.map((increase, j) => (
                    <Col key={j} md="12">
                      <FormGroup className="inline-wrapper awakening">
                        <Input
                          type="text"
                          bsSize="sm"
                          readOnly={j !== 0 || i === 2}
                          name={"stats." + Object.keys(increase)}
                          placeholder="stat increase"
                          value={Object.keys(increase)}
                          onBlur={this.onBlur}
                          onChange={e =>
                            this.handleChange(
                              e.currentTarget.name,
                              e.currentTarget.value,
                              i,
                              j
                            )
                          }
                        />
                        <Input
                          type="text"
                          bsSize="sm"
                          readOnly={j !== 0 || i === 2}
                          name={Object.keys(increase)}
                          value={increase[Object.keys(increase)]}
                          onBlur={e =>
                            this.onPercentBlur(
                              e.currentTarget.name,
                              e.currentTarget.value,
                              i,
                              j
                            )
                          }
                          onChange={e =>
                            this.handleChange(
                              e.currentTarget.name,
                              e.currentTarget.value,
                              i,
                              j
                            )
                          }
                        />

                        {/* <Button
                          size="sm"
                          color="danger"
                          tabIndex="-1"
                          onClick={e =>
                            this.handleDelete("statsIncrease", i, j)
                          }
                        >
                          X
                        </Button> */}
                      </FormGroup>
                    </Col>
                  ))}
                  <Col
                    className={
                      awake.statsIncrease.length >= 3 ||
                      (awake.skillUpgrade && awake.statsIncrease.length >= 2)
                        ? "hidden"
                        : null
                    }
                  >
                    {/* <Button
                      className="gutter-top btn-add"
                      color="secondary"
                      block
                      size="sm"
                      outline
                      onClick={e => this.handleAdd("statsIncrease", i)}
                      onBlur={this.onBlur}
                    >
                      Add new stat
                    </Button> */}
                  </Col>

                  <Col md="12">
                    <Label>
                      resources
                      <Badgetip
                        value="Resources are automatically calculated based on the hero's element, rarity, and zodiac sign."
                        id={"awakeningResource-" + i}
                      />
                    </Label>
                  </Col>
                  {awake.resources.map((resource, j) => (
                    <Col key={j} md="12">
                      <FormGroup className="inline-wrapper awakening">
                        <Input
                          type="text"
                          bsSize="sm"
                          name="item"
                          readOnly
                          placeholder="resource item"
                          value={this.awakeningMaterial(i, j)}
                          onBlur={this.onBlur}
                          onChange={e =>
                            this.handleChange(
                              e.currentTarget.name,
                              e.currentTarget.value,
                              i,
                              j
                            )
                          }
                        />
                        <Input
                          type="number"
                          bsSize="sm"
                          name="qty"
                          readOnly
                          value="0"
                          onBlur={this.onBlur}
                          onChange={e =>
                            this.handleChange(
                              e.currentTarget.name,
                              e.currentTarget.value,
                              i,
                              j
                            )
                          }
                        />
                        {/* 
                        <Button
                          size="sm"
                          color="danger"
                          tabIndex="-1"
                          onClick={e => this.handleDelete("resources", i, j)}
                        >
                          X
                        </Button> */}
                      </FormGroup>
                    </Col>
                  ))}
                  {/* <Col className={awake.resources.length >= 3 ? "hidden" : ""}>
                    <Button
                      className="gutter-top btn-add"
                      color="secondary"
                      block
                      size="sm"
                      outline
                      onBlur={this.onBlur}
                      onClick={e => this.handleAdd("resources", i)}
                    >
                      Add new resource
                    </Button>
                  </Col> */}
                </FormGroup>
              </Col>
            </TabPane>
          ))}
        </TabContent>