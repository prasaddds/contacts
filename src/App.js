import React from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import contacts from "./Contacts";
function createCard(contact)
{
  return <Card abc={contact.id} name={contact.name} img={contact.imgURL} tel={contact.phone} email={contact.email}/>
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar
        img="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
      />
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
