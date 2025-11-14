import UserDataForm from "../../../user-data-form/user-data-form";

const ProfileUI = () => {
  return (
    <UserDataForm
      title="Профиль"
      text1="Телефон"
      text2="Пароль"
      buttonText="Сохранить"
      linkText="Выйти"
    />
  );
};

export default ProfileUI;
