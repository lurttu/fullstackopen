import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import NewPersonForm from './components/NewPersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = event => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber,
      id: persons[persons.length - 1].id + 1
    }

    if (
      persons.map(person => person.name).indexOf(person.name) === -1 && //name of person is not on the persons list (index is -1) and
      person.name !== '' //name is not empty
    ) {
      personService
        .create(person)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
        })
        .catch(error => console.log(error))

      document.getElementById('name').value = ''
      document.getElementById('number').value = ''
    }
    if (person.name === '') {
      window.alert("name can't be empty")
    }
    if (persons.map(person => person.name).indexOf(person.name) !== -1) {
      window.confirm(
        `${person.name} is already added to the phonebook, replace the old number with a new one?`
      )
      const oldPerson = persons.find(p => p.name === person.name)
      const changedPerson = { ...oldPerson, number: person.number }

      personService.update(oldPerson.id, changedPerson).then(returnedPerson => {
        setPersons(
          persons.map(p => (p.id !== oldPerson.id ? p : returnedPerson))
        )
      })
    }
  }

  const updateNewName = event => {
    setNewName(event.target.value)
  }

  const updateNewNumber = event => {
    setNewNumber(event.target.value)
  }

  const updateFilter = event => {
    setFilter(event.target.value)
  }

  const deleteHandler = person => {
    window.confirm(`Delete ${person.name}?`)
    personService.deleteByID(person.id)
    setPersons(persons.filter(n => n.id !== person.id))
  }

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
      <Numbers
        persons={persons}
        filter={filter}
        deleteHandler={deleteHandler}
      />
    </div>
  )
}

export default App
