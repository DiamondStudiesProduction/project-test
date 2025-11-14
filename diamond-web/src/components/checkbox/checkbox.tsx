import CheckboxUI from "../ui/checkbox/checkbox";

type checkboxProps = {
    text: string
    id: string
}

const Checkbox = (props: checkboxProps) => {
  return <CheckboxUI text={props.text} id={props.id}/>;
};

export default Checkbox;
