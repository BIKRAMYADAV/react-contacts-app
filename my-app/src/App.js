import React, { useEffect } from "react";
import './styles.css'
import { useState } from "react";

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setContacts(data.results);
    });
  },[])
 

  return (
    <>
    {contacts.map(contact => (
  <ContactCard  avatar= {contact.picture.large}
  name={contact.name.first + " " + contact.name.last}
  email= {contact.email}
  age={contact.dob.age}/>
    ))}
</>
  );
}

const ContactCard = props => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div className="user-details">
      <p>{props.name}</p>
        <p>{props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>
	Toggle Age 
</button>

        {showAge === true ? <p>Age: {props.age}</p> : null}

      </div>
    </div>
  );
};


export default App;
