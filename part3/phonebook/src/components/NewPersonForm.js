import React from "react";

const NewPersonForm = ({ nameHandler, numberHandler, addHandler }) => {
  return (
    <form>
      <div>
        name: <input id="name" onChange={nameHandler} />
      </div>
      <div>
        number: <input id="number" onChange={numberHandler} />
      </div>
      <div>
        <button type="submit" onClick={addHandler}>
          add
        </button>
      </div>
    </form>
  );
};

export default NewPersonForm;
