const express = require("express");

const {
  getAllSnacks,
  addNewSnack,
  deleteSnack,
  updateSnack,
  getOneSnack,
} = require("../queries/snacks");

const snacks = express.Router();

// All snacks
snacks.get("/", async (_, response) => {
  console.log("GET request to /snacks");
  const allSnacks = await getAllSnacks();
  if (allSnacks.length === 0) {
    response.status(500).json({ error: "server error" });

    return;
  }

  response.status(200).json({ success: true, payload: allSnacks });
});

// Show snack
snacks.get("/:id", async (request, response) => {
  console.log("GET request to /snacks/:id");
  const snack = await getOneSnack(request.params.id);
  if (snack.id) {
    response.status(200).json({ success: true, payload: snack });
  } else {
    response.status(404).json({ error: error });
  }
});

// Create snack
snacks.post("/", async (request, response) => {
  try {
    console.log("POST request to /snacks");
    const newSnack = await addNewSnack(request.body);
    response.json({ success: true, payload: newSnack });
  } catch (error) {
    response.status(400).json({ error: "error" });
  }
});

// Delete snack
snacks.delete("/:id", async (request, response) => {
  console.log("DELETE request to /snacks/:id");
  const deletedSnack = await deleteSnack(request.params.id);
  if (deletedSnack.id) {
    response.status(200).json({ success: true, payload: deletedSnack });
  } else {
    response.status(404).json("snack does not exist.");
  }
});

// Update snack
snacks.put("/:id", async (request, response) => {
  try {
    console.log("UPDATE request to /snacks/:id");
    const updatedSnack = await updateSnack(request.body, request.params.id);
    response.status(200).json({ success: true, payload: updatedSnack });
  } catch (error) {
    response.status(400).json({ error: "SNACK DOES NOT EXIST!" });
  }
});

module.exports = snacks;
