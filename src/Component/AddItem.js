import React from "react";

function AddItem(props) {
  return (
    <div>
      <h1> My Todo list </h1>{" "}
      <form>
        <input type="text" id="myInput" />
        <button className="addBtn"> Add </button>{" "}
      </form>{" "}
    </div>
  );
}

export default AddItem;
