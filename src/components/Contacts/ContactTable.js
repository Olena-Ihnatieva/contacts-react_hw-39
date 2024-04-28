import ContactItem from './ContactItem';
import styles from './contacts.module.css';

export default function ContactTable({
                        contacts,
                        deleteContact,
                        showForm,
                        setShowForm,
                        name,
                        setName,
                        username,
                        setUserName,
                        phone,
                        setPhone,
                        saveContact
                      }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
        <tr>
          <th>Name</th>
          <th>User name</th>
          <th>Phone</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
        </tbody>
      </table>
      {!showForm && (
        <div>
          <div
            className={styles.add_btn}
            onClick={() => setShowForm(true)}
          >
            Add new contact
          </div>
        </div>
      )}
      {showForm && (
        <div className={styles.form}>
          <h3 className={styles.form_title}>New contact</h3>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={e => setName(e.target.value)}
            />
          <input
              type="text"
              value={username}
              placeholder="User name"
              onChange={e => setUserName(e.target.value)}
          />
          <input
              type="text"
              value={phone}
              placeholder="Phone"
              onChange={e => setPhone(e.target.value)}
          />
          <div className={styles.form_btn}>
            <div
              className={styles.btn_save}
              onClick={saveContact}
            >
              Save
            </div>
            <div
              className={styles.btn_cancel}
              onClick={() => setShowForm(false)}
            >
              Cancel
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
