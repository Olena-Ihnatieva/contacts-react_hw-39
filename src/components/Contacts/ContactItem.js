import styles from './contacts.module.css';

export default function ContactItem({ contact, deleteContact }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.username}</td>
      <td>{contact.phone}</td>
      <td style={{ textAlign: 'center' }}><div
        className={styles.delete_btn}
        onClick={() => deleteContact(contact.id)}
      >
        X
      </div></td>
    </tr>
  );
}