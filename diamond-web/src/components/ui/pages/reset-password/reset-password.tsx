import UserDataForm from "../../../user-data-form/user-data-form";

const RestPasswordUI = () => {
  return (
    <UserDataForm
      title="Восстановление пароля"
      text1="Телефон"
      text2={false}
      buttonText="Восстановить"
      linkText="Войти"
    />
  );
};

export default RestPasswordUI;
