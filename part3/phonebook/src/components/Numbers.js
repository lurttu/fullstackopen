import React from 'react'
import Person from './Person'

const filterNumbers = (array, query) => {
  return array.filter(el => {
    return (
      el.props.person.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
  })
}

const Numbers = ({ persons, filter, deleteHandler }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filterNumbers(
        persons.map(person => (
          <Person
            key={person.id}
            person={person}
            deleteHandler={deleteHandler}
          />
        )),
        filter
      )}
    </div>
  )
}

export default Numbers
