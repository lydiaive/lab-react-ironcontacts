import './App.css';
import contactData from "./contacts.json";
import { useState } from "react";



function App() {

  const initialContacts = contactData.slice(0,5)

  const [contacts, setContact] = useState(initialContacts)

  const clickHandler = () => {

     const contacts = [...initialContacts]
      let x = Math.floor(Math.random() * contactData.length) + 5;
      contacts.unshift(contactData[x]) 
      setContact(contacts)
    }
    

  return (
    <div className="App">
      <h1>IronContacts</h1>
     <button onClick={clickHandler} >Add Random Contact</button>
     <table className="table">
        <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
        </tr>
        {contacts.map(contact => {
          return (
            <tr>
              <td className="img-container"><img className="img" src={contact.pictureUrl} alt="Contact"></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>
                  {contact.wonOscar? '🏆' : ''}
              </td>
              <td>
                  {contact.wonEmmy? '🏆' : ''}
              </td>
            </tr>)
          })
        }
      </table>
    </div>
  );
}

export default App;
