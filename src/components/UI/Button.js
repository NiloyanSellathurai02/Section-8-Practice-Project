import styles from "./Button.module.css";

const Button = (props) => {
  const addUserSubmitHandler = () => {
    console.log("ik werk a mattie");
  };
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
