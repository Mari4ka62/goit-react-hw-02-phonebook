export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
