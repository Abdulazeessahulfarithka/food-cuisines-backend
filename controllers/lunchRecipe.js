import lunchRecipe from "../model/lunchRecipe.js";

export const createRecipe = async (req, res) => {
  try {
    const { name, photo,description,instructions,ingredients,photo1,benefits} = req.body;

    // Validate required fields
    if (!name) return res.status(400).send({ message: "Name is required" });
    if (!photo) return res.status(400).send({ message: "Photo is required" });
    if (!description) return res.status(400).send({ message: "Description is required" });
    if (!instructions) return res.status(400).send({ message: "instructions is required" });
    if (!ingredients) return res.status(400).send({ message: "Ingredients are required" });
    if (!photo1) return res.status(400).send({ message: "Additional photo is required" });
    if (!benefits) return res.status(400).send({ message: "Benefits are required" });

    // Create and save the recipe
    const recipe = new lunchRecipe({ name, photo,description,instructions,ingredients,photo1,benefits});
    await recipe.save();

    return res.status(201).send({
      success: true,
      message: "Recipe created successfully",
      recipe,
    });

  } catch (error) {
    console.error("Error creating recipe:", error);
    return res.status(500).send({
      success: false,
      message: "Error creating recipe",
      error,
    });
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await lunchRecipe.find({});
    res.status(200).send({
      success: true,
      message: "All recipes retrieved successfully",
      recipes,
    });
  } catch (error) {
    console.error("Error retrieving recipes:", error);
    res.status(500).send({
      success: false,
      message: "Error retrieving recipes",
      error,
    });
  }
};
