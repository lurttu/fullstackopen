import React, { useState, useEffect } from "react";
import axios from "axios";
import Numbers from "./components/Numbers";
import NewPersonForm from "./components/NewPersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const person = {
      name: newName,
      number: newNumber,
    };

    if (
      persons.map((person) => person.name).indexOf(person.name) === -1 && //name of person is not on the persons list (index is -1) and
      person.name !== "" //name is not empty
    ) {
      setPersons(persons.concat(person));
      setNewName("");
      document.getElementById("name").value = "";
      document.getElementById("number").value = "";
    }
    if (person.name === "") {
      window.alert("name can't be empty");
    }
    if (persons.map((person) => person.name).indexOf(person.name) !== -1)
      window.alert(`${person.name} is on the list already`);
  };

  const updateNewName = (event) => {
    setNewName(event.target.value);
  };

  const updateNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const updateFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterHandler={updateFilter} />
      <h3>Add a new number</h3>
      <NewPersonForm
        nameHandler={updateNewName}
        numberHandler={updateNewNumber}
        addHandler={addPerson}
      />
      <Numbers persons={persons} filter={filter} />
    </div>
  );
};

export default App;
