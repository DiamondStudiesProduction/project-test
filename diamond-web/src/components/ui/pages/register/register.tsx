import UserDataForm from "../../../user-data-form/user-data-form";

const RegisterUI = () => {
  return (
    <UserDataForm
      title="Регистрация"
      text1="Телефон"
      text2="Пароль"
      buttonText="Зарегестрироваться"
      linkText="У меня есть аккаунт"
    />
  );
};

export default RegisterUI;
