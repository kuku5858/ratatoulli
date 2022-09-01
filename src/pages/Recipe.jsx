import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [activeTab, settActiveTab] = useState("instructions");

  const params = useParams();

  const fetchDetails = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_APIKEY}`
    );
    const detailData = await data.json();
    setRecipe(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  return (
    <DetailWrapper>
      <ImageWrapper>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt="" />
      </ImageWrapper>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => settActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => settActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {activeTab === "instructions" && (
          <div>
            {/* rendering html from an api */}
            <h4 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h4>
            <h4 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h4>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((ingredients) => (
              <li key={ingredients.id}>{ingredients.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  height: 100vh;
  .active {
    background: linear-gradient(35deg, #7f7c82, #9d9d9d);
    color: white;
  }
  h4 {
    margin-bottom: 2rem;
    color: rgb(29, 29, 29);
  }
  
 

`;

const ImageWrapper = styled.div`
img {
  width: 100%;

  &:hover {
    width: 102%;
  }
}

h2 {
  margin-bottom: 2rem;
}
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #9d9d9d;
  background: white;
  border: 2px solid #7f7c82;
  margin: 0 2rem 2rem 0;
  font-weight: 600;
`;

const Info = styled.div`
ul {
  margin: 1rem 0 0 2rem;
}

li {
  font-size: 1.1rem;
  line-height: 2.5;
} 
`;

export default Recipe;
