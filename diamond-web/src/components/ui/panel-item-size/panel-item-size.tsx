import type { TPanelItemSize } from "../../../utils/types/types";
import style from "./panel-item-size.module.css";

const PanelItemSizeUI = ({ text }: TPanelItemSize) => {
  return <div className={style.container}>{text}</div>;
};

export default PanelItemSizeUI;
