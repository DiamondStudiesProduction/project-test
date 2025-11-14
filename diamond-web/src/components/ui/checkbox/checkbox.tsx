import styles from './checkbox.module.css'

const CheckboxUI = ({text, id} : {text: string, id: string}) => {
  return (
    <>
      <input type="checkbox" id={id} name="checkbox" className={styles.custom_cb}/>
      <label htmlFor={id}>{text}</label>
    </>
  );
};

export default CheckboxUI;
