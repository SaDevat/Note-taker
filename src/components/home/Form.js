import React from "react";
import useInput from "../../customHook/useInput";
import { addNote } from "../../store/actions/noteAction";
import { useDispatch } from "react-redux";

const Form = () => {
  const [title, onChangeTitle, resetTitle] = useInput();
  const [content, onChangeContent, resetContent] = useInput();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, content }));
    resetTitle();
    resetContent();
  };

  return (
    <div className="section">
      <form onSubmit={handleSubmit} action="" className="white">
        <h5 className="grey-text text-darken-3">New Note</h5>
        <div className="input-field">
          <input type="text" className="validate" {...onChangeTitle} />
          <label className="active" htmlFor="first_name2">
            Note Title
          </label>
        </div>
        <div className="input-field">
          <textarea
            id="note_content"
            className="materialize-textarea"
            {...onChangeContent}
          ></textarea>
          <label htmlFor="note_content">Note Content</label>
        </div>
        <button className="btn green">Add Note</button>
      </form>
    </div>
  );
};

export default Form;
