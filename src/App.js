import './App.css';
import contactData from "./contacts.json";
import React, { useState } from "react";



function App() {

  const initialContacts = contactData.slice(0,5)
  

  const [contacts, setContact] = useState(initialContacts)

  const addContact = () => {
      let x = Math.floor(Math.random() * contactData.length) + 5;
      let newArr = [...contacts]
      newArr.push(contactData[x]) 
      setContact(newArr)
    }

  const sortContactByPopulatity = () => {
      const newArr = [...contacts]
      newArr.sort((a,b) => b.popularity - a.popularity) 
      setContact(newArr)
    }

  const sortContactByName = () => {
      const newArr = [...contacts]
      newArr.sort((a,b) => a.name.localeCompare(b.name))
      setContact(newArr)
    } 
  
  const deleteContact = (contactId) => {
      const newArr = contacts.filter(contacts => {
        return contacts.id !== contactId
      })
      setContact(newArr)
  }


  return (
    <div className="App">
      <h1>IronContacts</h1>
     <button onClick={addContact} >Add Random Contact</button>
     <button onClick={sortContactByPopulatity} >Sort by Populatity</button>
     <button onClick={sortContactByName} >Sort by Name</button>
     <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map(contact => {
          return (
            <tr key={contact.id}>
              <td className="img-container"><img className="img" src={contact.pictureUrl} alt="Contact"></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>
                  {contact.wonOscar? '🏆' : ''}
              </td>
              <td>
                  {contact.wonEmmy? '🏆' : ''}
              </td>
              <td><button onClick={() => deleteContact(contact.id)} >Delete</button></td>
            </tr>)
            
          })
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
