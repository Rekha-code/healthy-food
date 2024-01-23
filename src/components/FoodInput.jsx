import css from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Items Here"
        className={css.foodInput}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
export default FoodInput;
