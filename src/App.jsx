import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailboxData])
    console.log(mailboxes)
  }

  return (
    <>

    <h1>test</h1>
    <Router>
    <NavBar/>
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>}/>
        <Route path='/new-mailbox' element={<MailboxForm addMailbox = {addMailbox}/>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}/>
      </Routes>
      </Router>
    </>
  );
};
export default App;
