import UserDataForm from "../../../user-data-form/user-data-form";

const LoginUI = () => {
  return (
    <UserDataForm
      title="Вход"
      text1="Телефон"
      text2="Пароль"
      buttonText="Войти"
      linkText="У меня нет аккаунта"
      linkText2="Забыл пароль"
    />
  );
};

export default LoginUI;
