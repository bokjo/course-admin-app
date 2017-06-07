/**
 * Created by bstojchevski on 5/30/2017.
 */
import expect from "expect";
import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";


describe("Course Reducer Tests", () => {
  describe("Create Course Tests", () => {
    it("Should add course when passed CREATE_COURSE_SUCCESS action!", () => {
      //arrange
      const initialState = [
        {title: "A"},
        {title: "B"}
      ];

      const newCourse = {title: "C"};

      const action = actions.createCourseSuccess(newCourse);

      //act
      const newState = courseReducer(initialState, action);

      //assertion
      expect(newState.length).toEqual(3);
      expect(newState[0].title).toEqual("A");
      expect(newState[1].title).toEqual("B");
      expect(newState[2].title).toEqual("C");
    });

    it("Should update course when passed UPDATE_COURSE_SUCCESS action!", () => {
      //arrange
      const initialState = [
        {id: "A", title: "A"},
        {id: "B", title: "B"},
        {id: "C", title: "C"}
      ];

      const course = {id: "B", title: "Updated Title for B"};
      const action = actions.updateCourseSuccess(course);

      //act
      const newState = courseReducer(initialState, action);
      const updatedCourse = newState.find(a => a.id == course.id);
      const untouchedCourse = newState.find(a => a.id == "A");


      //assertion
      expect(updatedCourse.title).toEqual("Updated Title for B");
      expect(untouchedCourse.title).toEqual("A");
      expect(newState.length).toEqual(3);
    });


  });

  describe("Update Course Tests", () => {
    it("Should do some fucking thing...", () => {
      //arrange

      //act

      //assert
      expect(true).toBe(true);
    });
  });

  describe("Load Courses Tests", () => {
    it("Should do some fucking thing...", () => {
      //arrange

      //act

      //assert
      expect(true).toBe(true);
    });
  });

});
