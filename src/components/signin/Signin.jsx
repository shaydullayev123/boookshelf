import styled from "styled-components";
import google from "../images/googleIcon.svg";
import facebook from "../images/faceBookIcon.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const enterBtn = () => {
    axios.get("https://0001.uz/myself").then((res) => console.log(res));
  };
  return (
    <Wrapper>
      <div className="Container">
        <h1>Sign in</h1>

        <button className="google">
          {" "}
          <img src={google} alt="" /> Continue with Google
        </button>
        <button className="facebook">
          <img src={facebook} alt="" /> Continue with FaceBook
        </button>
        <div className="line">
          <span>OR</span>
        </div>
        <div className="post">
          <div className="input-name">
            <label>Your username</label>
            <input type="text" name="name" placeholder="Enter your username" />
          </div>
          <div className="input-email">
            <label>Your email</label>
            <input type="text" name="name" placeholder="Enter your email" />
          </div>
          <div className="input-user">
            <label>Your username</label>
            <input type="text" name="name" placeholder="Enter your username" />
          </div>
          <div className="input-user">
            <label>Your password</label>
            <input
              type="password"
              name="name"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button className="addBtn" onClick={enterBtn}>
          Enter
        </button>
        <p>
          Yet signed up?
          <span>
            <Link to="/signup">Go to sign up.</Link>
          </span>
        </p>
      </div>
    </Wrapper>
  );
};

export default Signin;
const Wrapper = styled.div`
  padding: 9vw;
  display: flex;
  justify-content: center;
  .Container {
    width: 31vw; //430px
    top: 165px;
    left: 505px;
    padding: 3vw 2vw;
    border-radius: 12px;
    gap: 36px;
    background-color: #fff;
    text-align: center;
    box-shadow: 0px 4px 32px 0px #3333332b;

    h1 {
      font-family: "Mulish", sans-serif;
      font-size: 3vw;
      font-weight: 700;
      line-height: 45px;
      margin-bottom: 36px;
    }
    button {
      width: 26vw;
      height: 44px;
      display: flex;
      align-items: center;
      gap: 6px;
      text-align: start;
      font-family: "Mulish", sans-serif;
      font-size: 1.1vw;
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid black;
      padding: 10px 0;
      text: center;
      padding-left: 5vw;
    }
    .google {
      margin-bottom: 16px;
    }
    .facebook {
      margin-bottom: 28px;
    }
    .line {
      position: relative;
      border-bottom: 1px solid black;
      span {
        width: 48px;
        height: 15px;
        position: absolute;
        background-color: white;
        font-size: 1vw;
        top: -13px;
        left: 40%;
      }
    }
    .input-name,
    .input-email,
    .input-user {
      position: relative;
      margin-top: 28px;
      label {
        display: block;
        text-align: start;
        font-size: 1vw;
      }
      input {
        width: 26vw;
        height: 47px;
        padding: 14px 16px;
        border-radius: 6px;
        border: 1px solid #ebebeb;
        font-family: "Mulish", sans-serif;
        font-size: 1.2vw;
        &:focus {
          outline: none;
        }
      }
    }
    .addBtn {
      width: 100%;
      height: 40px;
      display: block;
      color: #fff;
      background-color: #6200ee;
      border-radius: 4px;
      font-size: 1vw;
      text-align: center;
      padding: 10px 24px;
      margin: 36px 0 12px 0;
    }
    p {
      font-family: "Mulish", sans-serif;
      text-align: center;
      font-size: 1vw;
      span {
        color: #6200ee;
      }
    }
  }
`;
