import AboutItemGallery from "../../../about-item-gallery/about-item-gallery";
import PanelItem from "../../../panel-item/panel-item";
import styles from './about-item.module.css'
const AboutItemUI = () => {
  return (
    <main className="btn">
      <div className={styles.container}>
        <AboutItemGallery />
        <PanelItem />
      </div>
    </main>
  );
};

export default AboutItemUI;
