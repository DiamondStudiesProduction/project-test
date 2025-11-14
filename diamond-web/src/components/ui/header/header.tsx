import type { IHeaderUI } from "../../../utils/types/types";
import styles from "./header.module.css";
const HeaderUI: React.FC<IHeaderUI> = ({mobileAsideIsOpen, handleToggleMobileAside}) => {
  return (
    <header className={`btn ${styles.header}`}>
      <nav className={styles.menu}>
        <div className={styles.menu_left}>
          <label htmlFor="menu_toggle" className={`${styles.chamburger} ${mobileAsideIsOpen ? styles.open : ''}`} onClick={handleToggleMobileAside}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </label>
          <div className={styles.man}>Мужское</div>
          <div
            className={`${styles.dropdown_content} ${styles.dropdown_content_man}`}
          >
            <a className="a_hover_opacity">футболки</a>
            <a className="a_hover_opacity">трусы</a>
            <a className="a_hover_opacity">носки</a>
          </div>
          <div className={styles.woman}>Женское</div>
          <div
            className={`${styles.dropdown_content} ${styles.dropdown_content_woman}`}
          >
            <a className="a_hover_opacity">футболки</a>
            <a className="a_hover_opacity">трусы</a>
            <a className="a_hover_opacity">носки</a>
          </div>
        </div>
        <div className={styles.menu_center}>
          <a href="#">
            <img
              src="../../../../public/images/logo.png"
              alt="logo"
              className={styles.image_logo}
            />
          </a>
        </div>
        <div className={styles.menu_right}>
          <a className="a_hover_opacity">
            <svg
              width="45"
              height="43"
              viewBox="0 0 45 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.fav}
            >
              <path
                d="M22.5 34.142L21.96 33.712C10.35 24.682 7.19995 21.5 7.19995 16.34C7.19995 12.04 10.8 8.6 15.3 8.6C18.99 8.6 21.06 10.578 22.5 12.126C23.94 10.578 26.01 8.6 29.7 8.6C34.2 8.6 37.8 12.04 37.8 16.34C37.8 21.5 34.65 24.682 23.04 33.712L22.5 34.142ZM15.3 10.32C11.79 10.32 8.99995 12.986 8.99995 16.34C8.99995 20.726 11.88 23.65 22.5 31.906C33.12 23.65 36 20.726 36 16.34C36 12.986 33.21 10.32 29.7 10.32C26.55 10.32 24.84 12.126 23.49 13.588L22.5 14.706L21.51 13.588C20.16 12.126 18.45 10.32 15.3 10.32Z"
                fill="black"
              />
            </svg>
          </a>
          <a className={`a_hover_opacity ${styles.menu_basket_container}`}>
            <svg
              width="35"
              height="30"
              viewBox="0 0 35 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.basket}
            >
              <path
                d="M32.8641 27.2864L31.65 8.4147H25.5843V6.89115C25.5843 3.0912 21.9779 0 17.5448 0C13.1117 0 9.50532 3.09135 9.50532 6.89115V8.4147H3.17715L2.13258 27.368L2.13152 27.4008C2.12294 28.0829 2.43917 28.7523 2.99865 29.2367C3.5583 29.7216 4.33582 30 5.1319 30H29.8683C30.6887 30 31.4832 29.7071 32.0476 29.196C32.6118 28.685 32.9095 27.989 32.8641 27.2864ZM11.6022 6.89115C11.6022 4.0824 14.2679 1.7973 17.5448 1.7973C20.8215 1.7973 23.4875 4.0824 23.4875 6.89115V8.4147H11.602V6.89115H11.6022ZM30.5246 27.9603C30.3543 28.1142 30.1152 28.2026 29.8681 28.2026H5.13173C4.89198 28.2026 4.65799 28.1188 4.48912 27.9724C4.32427 27.8299 4.2296 27.6339 4.22802 27.4329L5.17705 10.212H9.50497V12.4879C9.50497 12.9843 9.97432 13.3866 10.5534 13.3866C11.1325 13.3866 11.6018 12.9843 11.6018 12.4879V10.212H23.4873V12.4879C23.4873 12.9843 23.9566 13.3866 24.5357 13.3866C25.1148 13.3866 25.584 12.9843 25.584 12.4879V10.212H29.6651L30.7699 27.3855C30.7841 27.597 30.6945 27.8065 30.5246 27.9603Z"
                fill="black"
              />
            </svg>
            <div className={styles.container_basket_number}>
              <span className={styles.basket_number}>0</span>
            </div>
          </a>
          <a className="a_hover_opacity">
            <svg
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.profile}
            >
              <path
                d="M17.5 18C19.0143 18 20.4945 17.5381 21.7536 16.6728C23.0126 15.8075 23.994 14.5776 24.5735 13.1386C25.1529 11.6997 25.3046 10.1163 25.0091 8.58866C24.7137 7.06106 23.9845 5.65787 22.9138 4.55653C21.843 3.4552 20.4788 2.70517 18.9937 2.40132C17.5085 2.09746 15.9691 2.25341 14.5701 2.84945C13.1711 3.44549 11.9753 4.45485 11.1341 5.74988C10.2928 7.04492 9.84375 8.56747 9.84375 10.125C9.84375 12.2136 10.6504 14.2166 12.0862 15.6935C13.522 17.1703 15.4694 18 17.5 18ZM17.5 4.5C18.5816 4.5 19.6389 4.8299 20.5383 5.44798C21.4376 6.06607 22.1385 6.94457 22.5525 7.9724C22.9664 9.00024 23.0747 10.1312 22.8637 11.2224C22.6527 12.3135 22.1318 13.3158 21.367 14.1025C20.6022 14.8891 19.6277 15.4249 18.5669 15.6419C17.5061 15.859 16.4065 15.7476 15.4072 15.3218C14.4079 14.8961 13.5538 14.1751 12.9529 13.2501C12.352 12.3251 12.0312 11.2375 12.0312 10.125C12.0313 8.63316 12.6074 7.20242 13.633 6.14752C14.6586 5.09263 16.0496 4.5 17.5 4.5Z"
                fill="black"
              />
              <path
                d="M18.5938 20.25H16.4062C13.2154 20.25 10.1552 21.5538 7.89887 23.8746C5.64257 26.1953 4.375 29.3429 4.375 32.625C4.375 32.9234 4.49023 33.2095 4.69535 33.4205C4.90047 33.6315 5.17867 33.75 5.46875 33.75H29.5312C29.8213 33.75 30.0995 33.6315 30.3046 33.4205C30.5098 33.2095 30.625 32.9234 30.625 32.625C30.625 29.3429 29.3574 26.1953 27.1011 23.8746C24.8448 21.5538 21.7846 20.25 18.5938 20.25ZM6.62812 31.5C6.89707 29.0257 8.0429 26.7401 9.84668 25.0799C11.6505 23.4196 13.9857 22.5012 16.4062 22.5H18.5938C21.0143 22.5012 23.3495 23.4196 25.1533 25.0799C26.9571 26.7401 28.1029 29.0257 28.3719 31.5H6.62812Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderUI;
