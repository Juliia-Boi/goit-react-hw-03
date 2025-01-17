import css from "../Contact/Contact.module.css";
import { BsTelephonePlus } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa6";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  const renderContactInfo = () => (
    <div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <BsTelephonePlus size={18} />
        <p>{name}</p>
      </div>
      <a href={`tel:${number}`} className={css.contact}>
        <FaUserCheck size={18} />
        <p>{number}</p>
      </a>
    </div>
  );
  return (
    <div className={css.container}>
      {renderContactInfo()}
      <button type="button" className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
