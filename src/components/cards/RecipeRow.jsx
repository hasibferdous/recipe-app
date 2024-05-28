import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
/* eslint-disable react/prop-types */

export default function RecipeRow({ recipe }) {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState();
  const [categories, setCategories] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    async function load(id) {
      const categoriesData = await axios.get(
        "http://localhost:3000/categories"
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
      if (recipeData?.status === 200) {
        setRecipeDetails(recipeData?.data);
      }
    }

    if (id) {
      load(id);
    }
  }, [id]);

  const openDialog = (id) => {
    setDeleteId(id);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setDeleteId(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:3000/recipes/${id}`);
        if (response.status === 200) {
          toast.success("Recipe Deleted Successfully!");
        } else {
          toast.error("Failed to Delete Recipe!");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the recipe!");
      }
      closeDialog();
    } else {
      closeDialog();
    }
  };

  return (
    <>
      <tr>
        <th>{recipe?.id}</th>
        <td>{recipe?.title}</td>
        <td>{recipe?.price}</td>
        <td>{recipe?.category}</td>
        <td className="flex gap-4">
          <Link to={`/dashboard/edit-recipe/${recipe?.id}`}
            className="btn btn-xs btn-neutral">Edit</Link>
          <button onClick={() => handleDelete(recipe?.id)}
            className="btn btn-xs btn-error">Delete</button>
        </td>
      </tr>

      <ToastContainer />
    </>
  );
}
