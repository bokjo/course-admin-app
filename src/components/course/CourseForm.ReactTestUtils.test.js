import React, { PropTypes } from "react";
import expect               from "expect";
import TestUtils            from "react-addons-test-utils";
import CourseForm           from "./CourseForm";

function setup(saving) {
  let props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("CourseForm via React Test Utils", () => {
  it("1. Renders form and h1", () => {
    const { output } = setup();
    expect(output.type).toBe("form");

    let [ h1 ] = output.props.children;
    expect(h1.type).toBe("h1");
  });

  it("2. Save button is labeled 'Save' when not saving", () => {
    const { output } = setup(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe("Save");
  });

  it("3. Save button is labeled 'Saving...' when saving", () => {
    const { output } = setup(true);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe("Saving...");
  });

});