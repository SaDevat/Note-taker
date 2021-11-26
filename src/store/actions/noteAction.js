import app from "../../config/fbconfig";

export const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const db = getFirestore(app).collection("notes");
    db.add({
      ...note,
      favorite: false,
      createdAt: new Date(),
    })
      .then(() => {
        console.log("note was added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
