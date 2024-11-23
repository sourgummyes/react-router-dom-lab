import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
    console.log(props)
    const { mailboxId } = useParams()
    const singleMailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
    console.log(mailboxId)
    if (!singleMailbox) {
        return <h3>Mailbox not found</h3>;
    }
    return (
        
        <div>
          <h2>Mailbox Details</h2>
          <dl>
            <dt>Id</dt>
            <dd>{ mailboxId }</dd>
          <dt>Box Size:</dt>
          <dd>{ singleMailbox.boxSize }</dd>
          <dt>Box Holder:</dt>
          <dd>{ singleMailbox.boxholder }</dd>
        </dl>
        </div>
    )
}

export default MailboxDetails