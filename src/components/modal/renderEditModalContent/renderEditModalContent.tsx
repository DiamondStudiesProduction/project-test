import { useState } from "react";
import { RenderEditModalContentUI } from "../../ui/modal/editModalContent/editModalContent";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../services/store";
import { editSeminar } from "../../../services/seminarsSlice";
import { Seminar } from "../../../utils/types";
import { closeEditModal } from "../../../services/modalSlice";
interface RenderEditModalContentProps {
  seminar: Seminar;
}
export const RenderEditModalContent = ({
  seminar,
}: RenderEditModalContentProps) => {
  const [title, setTitle] = useState<string>(seminar.title);
  const [photo, setPhoto] = useState<string>(seminar.photo);
  const [description, setDescription] = useState<string>(seminar.description);
  const [date, setDate] = useState<string>(seminar.date);
  const [time, setTime] = useState<string>(seminar.time);
  const dispatch = useDispatch<AppDispatch>();
  const setTitleCallBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const setPhotoCallBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto(e.target.value);
  };
  const setDescriptionCallBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const setDateCallBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const setTimeCallBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };
  if (!seminar) return null;
  return (
    <RenderEditModalContentUI
      seminar={seminar}
      title={title}
      photo={photo}
      description={description}
      date={date}
      time={time}
      setTitleCallBack={setTitleCallBack}
      setPhotoCallBack={setPhotoCallBack}
      setDescriptionCallBack={setDescriptionCallBack}
      setDateCallBack={setDateCallBack}
      setTimeCallBack={setTimeCallBack}
      onClick={() => {
        dispatch(
          editSeminar({
            id: seminar.id,
            title: title,
            photo: photo,
            description: description,
            date: date,
            time: time,
          })
        );
        dispatch(closeEditModal());
      }}
    />
  );
};
