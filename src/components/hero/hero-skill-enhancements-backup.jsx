{
  enhancement.resources.map((resource, j) => (
    <Col
      key={"resources-" + j + "-" + index}
      md="12"
      className="resource-wrapper"
    >
      <FormGroup className="inline-wrapper">
        <Input
          type="text"
          bsSize="sm"
          name="item"
          placeholder="resource item"
          index={i}
          index2={j}
          value={resource.item}
          onChange={e => this.handleChange("item", e.currentTarget.value, i, j)}
          onBlur={this.onBlur}
        />
        <Input
          type="number"
          bsSize="sm"
          name="qty"
          index={i}
          index2={j}
          value={resource.qty}
          onChange={e => this.handleChange("qty", e.currentTarget.value, i, j)}
          onBlur={this.onBlur}
        />

        {/* <Button
          size="sm"
          color="danger"
          tabIndex="-1"
          onClick={e => this.handleDelete("resources", i, j)}
          onBlur={this.onBlur}
        >
          X
        </Button> */}
      </FormGroup>
    </Col>
  ));
}
{
  /* <Col
                    md="12"
                    className={
                      enhancement.resources.length >= 3 ? "hidden" : ""
                    }
                  >
                    <Button
                      onClick={e => this.handleAdd("resources", i)}
                      color="secondary"
                      outline
                      block
                      size="sm"
                      className="gutter-top btn-add"
                      onBlur={this.onBlur}
                    >
                      Add new resource
                    </Button>
                  </Col> */
}
