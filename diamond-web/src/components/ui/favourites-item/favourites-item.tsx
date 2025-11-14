import styles from "./favourites-item.module.css";

const FavouritesItemUI = () => {
  return (
    <li className={styles.item}>
      <a className={styles.item_container}>
        <div className={styles.image_container}>
          <img src="././././public/images/footbolka.png" />
          <div className={styles.button_minus_container}>
            <button className={`${styles.button_minus} button_reset_styles`}>
              <svg
                width="26"
                height="21"
                viewBox="0 0 26 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                    d="M18.9444 10.5H7.38888C7.19733 10.5 7.01363 10.5615 6.87819 10.6709C6.74275 10.7803 6.66666 10.9286 6.66666 11.0833C6.66666 11.238 6.74275 11.3864 6.87819 11.4958C7.01363 11.6052 7.19733 11.6667 7.38888 11.6667H18.9444C19.136 11.6667 19.3197 11.6052 19.4551 11.4958C19.5906 11.3864 19.6667 11.238 19.6667 11.0833C19.6667 10.9286 19.5906 10.7803 19.4551 10.6709C19.3197 10.5615 19.136 10.5 18.9444 10.5Z"
                    fill="black"
                  />
                <defs>
                  <clipPath id="clip0_39_207">
                    <rect width="26" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <span className={styles.title}>Футбока DIAMONDS Белая</span>
        </div>
      </a>
    </li>
  );
};

export default FavouritesItemUI;