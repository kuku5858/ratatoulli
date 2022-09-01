import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Search() {
    
    const [input, setInput] = useState("");
    const  navigate = useNavigate();

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input);
    };

    

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input onChange={handleInput} type="text" value={input} />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 2rem 10rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #7f7c82, #9d9d9d);
    font-size: 1rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
