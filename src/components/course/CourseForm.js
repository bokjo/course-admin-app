import React, { PropTypes } from "react";
import SelectInput          from "../common/SelectInput";
import TextInput            from "../common/TextInput";

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
      <form>
        <h1>Manage Courses</h1>
        <TextInput
          name="title"
          label="Title"
          onChange={onChange}
          value={course.title}
          error={errors.title}
        />

        <SelectInput
          name="authorId"
          label="Author"
          value={course.authorId}
          defaultOption="Select Author"
          options={allAuthors}
          onChange={onChange}
          error={errors.authorId}
        />

        <TextInput
          name="category"
          label="Category"
          onChange={onChange}
          value={course.category}
          error={errors.category}
        />

        <TextInput
          name="length"
          label="Length"
          onChange={onChange}
          value={course.length}
          error={errors.length}
        />

        <input
          type="submit"
          disabled={saving}
          onClick={onSave}
          className="btn btn-primary"
          value={saving ? "Saving..." : "Save"}
        />
      </form>
    );
};

CourseForm.propTypes = {
  course:     PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave:     PropTypes.func.isRequired,
  onChange:   PropTypes.func.isRequired,
  saving:    PropTypes.bool,
  errors:     PropTypes.object
};

export default CourseForm;
