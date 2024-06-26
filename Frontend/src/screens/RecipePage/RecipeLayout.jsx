import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import ClipLoader from "react-spinners/ClipLoader";

const RecipeLayout = ({ recipes }) => {
  if (!recipes) return <ClipLoader />;

  return (
    <RecipeGrid>
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe._id} recipe={recipe} />;
      })}
    </RecipeGrid>
  );
};

export default RecipeLayout;

const RecipeGrid = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
  margin-inline: 10vw;
  margin-bottom: 60px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
