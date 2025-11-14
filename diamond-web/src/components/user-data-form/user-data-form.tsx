import type { TUserDataComponent } from "../../utils/types/types";
import UserDataUI from "../ui/user-data-form/user-data-form";

const UserDataForm = ({
  title,
  text1,
  text2,
  buttonText,
  linkText,
  linkText2
}: TUserDataComponent) => {
  return (
    <UserDataUI
      title={title}
      text1={text1}
      text2={text2}
      buttonText={buttonText}
      linkText={linkText}
      linkText2={linkText2}
    />
  );
};

export default UserDataForm;
