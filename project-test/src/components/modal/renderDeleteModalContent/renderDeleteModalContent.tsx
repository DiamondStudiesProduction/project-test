import { useDispatch } from "react-redux";
import { Seminar } from "../../../utils/types";
import { RenderDeleteModalContentUI } from "../../ui/modal/deleteModalContent/deleteModalContent";
import { AppDispatch } from "../../../services/store";
import { closeDeleteModal } from "../../../services/modalSlice";
import { deleteSeminar } from "../../../services/seminarsSlice";
interface RenderDeleteModalContentProps {
  seminar: Seminar | null;
}

export const RenderDeleteModalContent = ({
  seminar,
}: RenderDeleteModalContentProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const onDelete = () => {
    dispatch(deleteSeminar(seminar?.id));
    dispatch(closeDeleteModal());
    /*
    ----------
    Так-как seminars.json не обрабатывает никакие запросы по типу DELETE, а просто хранит данные,
    то пришлось закоментировать код, который бы применялся если бы обрабатывались запросы.
    ----------
    dispatch(deleteSeminarApiThunk(seminar.id))
      .then(() => {
        dispatch(closeDeleteModal());
      })
      .catch((error) => {
        // обработка ошибки...
      });
      */
  };
  if (!seminar) return null;
  return <RenderDeleteModalContentUI seminar={seminar} onClick={onDelete} />;
};
