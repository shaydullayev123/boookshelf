//Api dan keyin boshliman
import errorImg from "../images/404.png";
import errorStyle from "./Error404.module.css";
const Error404 = () => {
  return (
    <div className={errorStyle.errorstyle}>
      <img src={errorImg} alt="" />
    </div>
  );
};

export default Error404;
