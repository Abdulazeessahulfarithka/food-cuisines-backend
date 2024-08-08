import latestRecipe from "../model/latestRecipe.js";

export const createRecipe = async (req, res) => {
  try {
    const { name, photo, description, ingrediants, instructions, photo1, benefits } = req.body;

    
    switch (true) {
      case !name:
        return res.status(400).send({ error: "Name is required" });
      case !photo:
        return res.status(400).send({ error: "Photo is required" });
      case !description:
        return res.status(400).send({ error: "Description is required" });
      case !ingrediants:
        return res.status(400).send({ error: "ingrediants are required" });
      case !instructions:
        return res.status(400).send({ error: "Instructions are required" });
      case !photo1:
        return res.status(400).send({ error: "Additional photo is required" });
      case !benefits:
        return res.status(400).send({ error: "Benefits are required" });
    }

   
    const recipe = new latestRecipe({ name, photo, description, ingrediants, instructions, photo1, benefits });
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
      error: "Internal Server Error",
    });
  }
};

//get all latestrecipe

export const getRecipe = async (req, res) => {
  try {
   
    const recipes = await latestRecipe.find({}).limit(19);
    return res.status(200).send({
      success: true,
      message: "Recipes fetched successfully",
      recipes,
    });

  } catch (error) {
    console.error("Error fetching recipes:", error);
    return res.status(500).send({
      success: false,
      message: "Error fetching recipes",
      error,
    });
  }
};
