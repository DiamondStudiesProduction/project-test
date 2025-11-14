import styles from './about-item-gallery.module.css'

const AboutItemGalleryUI = () => {
  return (
    <section className={styles.main}>
      <div className={styles.gallery_container}>
        <div className={styles.main_image_container}><img src='../../../../public/images/footbolka.png' alt='изображение товара' className={styles.main_image}/></div>
        <ul className={styles.mini_gallery_container}>
          <li className={styles.mini_gallery_container_item}><img src='../../../../public/images/footbolka.png' alt='изображение товара' className={styles.mini_gallery_container_item_image}/></li>
          <li className={styles.mini_gallery_container_item}><img src='../../../../public/images/footbolka.png' alt='изображение товара' className={styles.mini_gallery_container_item_image}/></li>
          <li className={styles.mini_gallery_container_item}><img src='../../../../public/images/footbolka.png' alt='изображение товара' className={styles.mini_gallery_container_item_image}/></li>
        </ul>
      </div>
    </section>
  );
};

export default AboutItemGalleryUI;
