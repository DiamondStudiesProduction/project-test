/*
----
В данном проекте использовано минимум стилей, акцент был сделан на реализации кода.
В качестве хранилища использован Redux.
----
*/

import { Provider } from "react-redux";
import { Seminars } from "../seminars/Seminars";
import { store } from "../../services/store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Seminars />
      </Provider>
    </>
  );
};
