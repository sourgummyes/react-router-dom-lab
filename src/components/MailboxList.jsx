import { Link } from "react-router-dom";
import './MailboxList.css'

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>Mailboxes</h2>
      <div className="mail-box">
        {mailboxes.map((mailbox) => (
          <Link
            key={mailbox._id}
            to={`/mailboxes/${mailbox._id}`}
            className="mailbox-square"
          >
            {mailbox._id}
          </Link>
        ))}
      </div>
    </>
  );
};

export default MailboxList;