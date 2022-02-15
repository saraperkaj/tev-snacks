const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const snacks = await db.any("SELECT * FROM snacks");
    return snacks;
  } catch (err) {
    return err;
  }
};

const getOneSnack = async (id) => {
  try {
    const snack = await db.one("SELECT * FROM snacks WHERE id=$1", id);

    return snack;
  } catch (error) {
    return error;
  }
};

const addNewSnack = async (newSnack) => {
  const { name, image, fiber, protein, added_sugar, is_healthy } = newSnack;
  try {
    const snack = await db.any(
      "INSERT INTO snacks (name, image, fiber, protein, added_sugar, is_healthy) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, image, fiber, protein, added_sugar, is_healthy]
    );
    return snack;
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    const snack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );

    return snack;
  } catch (error) {
    return error;
  }
};

const updateSnack = async (snack, id) => {
  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$2, image=$3, fiber=$4, protein=$5, added_sugar=$6, is_healthy=$7 WHERE id=$1 RETURNING *",
      [
        id,
        snack.name,
        snack.image,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        snack.is_healthy,
      ]
    );
    return updatedSnack;
  } catch (error) {
    return error;
  }
};

// here we are exporting our functions to use in our controllers
module.exports = {
  getAllSnacks,
  addNewSnack,
  getOneSnack,
  deleteSnack,
  updateSnack,
};
