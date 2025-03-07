import { useCallback, useEffect } from "react";
import { PreloaderUI } from "../ui/preloader/Preloader";
import { SeminarUI } from "../ui/seminar/seminar";
import { SeminarsUI } from "../ui/seminars/seminars";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../services/store";
import { getSeminarsApiThunk } from "../../services/seminarsSlice";
import {
  closeDeleteModal,
  closeEditModal,
  openDeleteModal,
  openEditModal,
} from "../../services/modalSlice";
import { Seminar } from "../../utils/types";
import { Modal } from "../modal/modal";
import { RenderDeleteModalContent } from "../modal/renderDeleteModalContent/renderDeleteModalContent";
import { RenderEditModalContent } from "../modal/renderEditModalContent/renderEditModalContent";
export const Seminars = () => {
  const seminars = useSelector((state: RootState) => state.seminars.seminars);
  const isLoading = useSelector((state: RootState) => state.seminars.isLoading);
  const deleteModalIsOpen = useSelector(
    (state: RootState) => state.modal.delete.isOpen
  );
  const editModalIsOpen = useSelector(
    (state: RootState) => state.modal.edit.isOpen
  );
  const deleteSeminar = useSelector(
    (state: RootState) => state.modal.delete.seminar
  );
  const editSeminar = useSelector(
    (state: RootState) => state.modal.edit.seminar
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = useCallback(
    (seminar: Seminar) => {
      dispatch(openDeleteModal(seminar));
    },
    [dispatch]
  );

  const handleEdit = useCallback(
    (seminar: Seminar) => {
      dispatch(openEditModal(seminar));
    },
    [dispatch]
  );

  const handleCloseDeleteModal = useCallback(() => {
    dispatch(closeDeleteModal());
  }, [dispatch]);

  const handleCloseEditModal = useCallback(() => {
    dispatch(closeEditModal());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSeminarsApiThunk());
  }, []);

  return (
    <>
      {isLoading ? (
        <PreloaderUI />
      ) : (
        <SeminarsUI>
          {seminars?.map((seminar) => (
            <SeminarUI
              key={seminar.id}
              onClickDelete={() => handleDelete(seminar)}
              onClickEdit={() => handleEdit(seminar)}
              seminar={seminar}
            />
          ))}
        </SeminarsUI>
      )}
      {deleteModalIsOpen && (
        <Modal title="Удалить семинар" onClose={handleCloseDeleteModal}>
          <RenderDeleteModalContent seminar={deleteSeminar} />
        </Modal>
      )}
      {editModalIsOpen && (
        <Modal title="Редактировать семинар" onClose={handleCloseEditModal}>
          <RenderEditModalContent seminar={editSeminar} />
        </Modal>
      )}
    </>
  );
};
