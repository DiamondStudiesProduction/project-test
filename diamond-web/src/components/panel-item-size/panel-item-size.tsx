import type { TPanelItemSize } from "../../utils/types/types";
import PanelItemSizeUI from "../ui/panel-item-size/panel-item-size";

const PanelItemSize = ({text}: TPanelItemSize) => {
    return <PanelItemSizeUI text={text}/>
}

export default PanelItemSize;