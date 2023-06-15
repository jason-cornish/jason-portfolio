import { useEffect, useState, useMemo, forwardRef } from "react";
import styled from "styled-components";
import CurveContainer from "./reusable/CurveContainer";
import LinkButton from "./reusable/LinkButton";
import {
  HorizontalWrapper,
  SectionTitle,
  SubHeader,
  VerticalWrapper,
} from "./reusable/styled-components";
import emailjs from "@emailjs/browser";

type ErrorStateType = string | boolean;

const ContactMe = forwardRef((props, contactRef: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameErrorState, setNameErrorState] = useState<ErrorStateType>(false);
  const [emailErrorState, setEmailErrorState] = useState<ErrorStateType>(false);
  const [messageErrorState, setMessageErrorState] =
    useState<ErrorStateType>(false);

  const validEmailRegex = useMemo(() => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  }, []);

  const submitForm = () => {
    let errorCounter: boolean = false;

    if (name === "") {
      setNameErrorState("empty");
      errorCounter = true;
    }
    if (email === "") {
      setEmailErrorState("empty");
      errorCounter = true;
    }
    if (email !== "" && !email.match(validEmailRegex)) {
      setEmailErrorState("invalid");
      errorCounter = true;
    }
    if (message === "") {
      setMessageErrorState("empty");
      errorCounter = true;
    }

    if (!errorCounter) {
      const payload = {
        to_name: "Jason Cornish",
        from_name: name,
        message: message,
        reply_to: email,
      };

      emailjs.send(
        "service_5bmj0c9",
        "template_9iqjfyd",
        payload,
        "qY_Y-yqa5N6cCxYBa"
      );
    }
  };

  useEffect(() => {
    if (nameErrorState && name !== "") {
      setNameErrorState(false);
    }
    if (emailErrorState) {
      if (emailErrorState === "empty" && email) {
        setEmailErrorState(false);
      } else if (
        emailErrorState === "invalid" &&
        email.match(validEmailRegex)
      ) {
        setEmailErrorState(false);
      }
    }
    if (messageErrorState && message !== "") {
      setMessageErrorState(false);
    }
  }, [
    name,
    email,
    message,
    nameErrorState,
    emailErrorState,
    messageErrorState,
    validEmailRegex,
  ]);

  return (
    <ContactMeWrapper ref={contactRef}>
      {/* <CurveContainer inverted={true} fill={"#1b1236"} aligned={"top"} /> */}
      <SectionTitle>Let's get in touch.</SectionTitle>
      <SubHeader>
        Interested in working together or just have some questions? Lets chat.
      </SubHeader>
      <ContactForm noValidate>
        <HorizontalWrapper className="horizontal-wrapper">
          <InputWrapper
            className={nameErrorState ? `error ${nameErrorState}` : "default"}
          >
            <label htmlFor="name" className="name-label">
              Your Name
            </label>
            <Input
              id="name"
              className="name-input error"
              placeholder="Enter your name."
              required={true}
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </InputWrapper>
          <InputWrapper
            className={emailErrorState ? `error ${emailErrorState}` : "default"}
          >
            <label htmlFor="email" className="email-label">
              Email Address
            </label>
            <Input
              id="email"
              className="email-input"
              type="email"
              required={true}
              placeholder="Enter your email address."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputWrapper>
        </HorizontalWrapper>
        <InputWrapper
          className={
            messageErrorState ? `error ${messageErrorState}` : "default"
          }
        >
          <label htmlFor="message" className="message-label">
            Your Message
          </label>
          <MessageInput
            id="message"
            className="messageInput"
            required={true}
            placeholder="I am interested in discusssing your work to see if you might be a good fit for a position that just opened up."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </InputWrapper>
      </ContactForm>
      <SubmitButton onClick={submitForm}>
        <p>Send it</p>
      </SubmitButton>
    </ContactMeWrapper>
  );
});

export default ContactMe;

const ContactMeWrapper = styled(VerticalWrapper)`
  position: relative;
  width: 100%;
  padding: 100px 0 100px 0;
  align-items: center;
  h1 {
    font-size: 50px;
    color: #e0e3e7;
    margin-bottom: 15px;
    text-align: center;
  }
  h2 {
    font-size: 20px;
    text-align: center;
    color: #e0e3e7;

    max-width: 400px;
    font-weight: 400;
  }
  .horizontal-wrapper {
    column-gap: 30px;
    @media screen and (max-width: 700px) {
      row-gap: 40px;
      flex-direction: column;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  row-gap: 40px;
  margin-bottom: 40px;
  .error {
    @keyframes shake {
      0% {
        margin-left: 0rem;
      }
      25% {
        margin-left: 0.5rem;
      }
      75% {
        margin-left: -0.5rem;
      }
      100% {
        margin-left: 0rem;
      }
    }
    position: relative;
    :focus-within label {
      color: #f6f7f8;
    }
    label {
      color: red;
    }
    input {
      border-bottom: 1px solid red;
      animation: shake 0.2s ease-in-out 0s 2;
    }
    textarea {
      border-bottom: 1px solid red;
      animation: shake 0.2s ease-in-out 0s 2;
    }
    &::after {
      position: absolute;
      bottom: -25px;
      left: 0px;
      color: red;
    }
  }

  .invalid {
    &::after {
      content: "Invalid email address.";
    }
  }

  .empty {
    &::after {
      content: "This field is required.";
    }
  }
`;

const InputWrapper = styled(VerticalWrapper)`
  box-sizing: border-box;
  label {
    color: #b7b9bc;
    font-size: 20px;
    font-family: Archivo;
    margin-bottom: 10px;
  }
  :focus-within label {
    color: #f6f7f8;
  }
`;

const Input = styled.input`
  display: block;
  font-size: 18px;
  font-family: Archivo;
  height: 30px;
  width: 300px;
  background-color: transparent;
  border: 0px;
  border-bottom: 1px solid #b7b9bc;
  caret-color: #e0e3e7;
  color: #e0e3e7;
  padding-bottom: 10px;
  padding-left: 0px;
  position: relative;
  :focus {
    outline: none;
    border-bottom: 1px solid #f6f7f8;
    ::placeholder {
      color: transparent;
    }
  }
  @media screen and (max-width: 700px) {
    width: 385px;
  }
`;

const MessageInput = styled.textarea`
  width: 100%;
  font-size: 18px;
  font-family: Archivo;
  background-color: transparent;
  border: 0px;
  border-bottom: 1px solid #e0e3e7;
  caret-color: #e0e3e7;
  color: #e0e3e7;
  padding-bottom: 5px;
  padding-left: 0px;
  line-height: 25px;
  resize: none;
  :focus {
    outline: none;
    border-bottom: 1px solid #f6f7f8;
    ::placeholder {
      color: transparent;
    }
  }
`;

const SubmitButton = styled.button`
  position: relative;
  padding: 10px 100px;
  border-radius: 3px;
  background-color: #432d83 !important;
  border: 2px solid #432d83;
  background-color: transparent;

  p {
    position: relative;
    z-index: 2;
    margin: 0px;
    font-size: 22px;
    width: auto;
    font-family: Archivo;
    color: #e0e3e7 !important;
    line-height: 40px;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #4831d4;
    width: 0px;
    height: 100%;
    transition: all 0.3s;
  }

  :hover {
    &:before {
      width: 100%;
    }
    border: 2px solid #4831d4;
    color: #e0e3e7 !important;
    cursor: pointer;
  }
`;
