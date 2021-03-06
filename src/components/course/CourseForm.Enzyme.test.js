import React              from "react";
import expect             from "expect";
import { mount, shallow } from "enzyme";
import TestUtils          from "react-dom/test-utils";
import CourseForm         from "./CourseForm";

function setup(saving) {
  const props = {
    course: {}, saving: saving, errors: {},
    onSave:   () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe("Course Form via Enzyme", () => {
  it("1. Renders form and h1", () => {
    const wrapper = setup(false);
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.find("h1").text()).toEqual("Manage Courses");
  });

  it("Save button is labeled 'Save' when not saving", () => {
    const wrapper = setup(false);
    expect(wrapper.find("input").props().value).toBe("Save");
  });

  it("Save button is labeled 'Saving...' when saving", () => {
    const wrapper = setup(true);
    expect(wrapper.find("input").props().value).toBe("Saving...");
  });

});
