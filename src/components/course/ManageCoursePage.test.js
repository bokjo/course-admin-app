/**
 * Created by bstojchevski on 5/31/2017.
 */
import React                from "react";
import expect               from "expect";
import { mount, shallow }   from "enzyme";
import { ManageCoursePage } from "./ManageCoursePage";

describe("Manage Course Page Tests", () => {
  const props = {
    authors: [],
    actions: { saveCourse: () => { return Promise.resolve();} },
    course: {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""}
  };

  it("Throws an error message when trying to save empty title", () => {
    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find("input").last();

    // const title = wrapper.find("TextInput").get(0);
    // title.value = "TESTTT";
    // title.simulate("change", {value: "T"});
    // expect(title.props).toBe("TESTTT");

    expect(saveButton.prop("type")).toBe("submit");
    saveButton.simulate("click");
    // expect(saveButton.prop("value")).toEqual("Saving...");
    expect(wrapper.state().errors.title).toBe("Title must be at least 5 characters.");

    // const dropDown = wrapper.find("select");
    // expect(dropDown).toBe("Please select an author.");
    // dropDown.simulate("change", {target: {value: ""}});
    // expect(wrapper.state().errors.authorId).toBe("Please select an author.");
  });
});
