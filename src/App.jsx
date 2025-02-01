import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

  const contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

function App() {
  const [searchFriend, setSearchFriend] = useState("");

  const filteredFriends = contacts.filter(contact => contact.name.toLowerCase().includes(searchFriend.toLowerCase()));

  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchFriend} onChange={ setSearchFriend } />
      <ContactList contacts={ filteredFriends } />
      
    </div>
  )
}

export default App
