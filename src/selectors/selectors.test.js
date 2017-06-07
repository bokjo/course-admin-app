/**
 * Created by bstojchevski on 6/6/2017.
 */
import expect                          from "expect";
import { authorsFormattedForDropdown } from "./selectors";

describe("Author Selectors", () => {
  describe("authorsFormattedForDropdown tests", () => {
    it("It should return author data formatted for use in a dropdown", () => {
      const authors = [
        {id: "cory-house", firstName: "Cory", lastName: "House"},
        {id: "scott-allen", firstName: "Scott", lastName: "Allen"}
      ];

      const expected = [
        {value: "cory-house", text: "Cory House"},
        {value: "scott-allen", text: "Scott Allen"}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});


