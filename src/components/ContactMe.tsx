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
      <SectionTitle>Inquire</SectionTitle>
      <SubHeader>Like what you see? Shoot me a message.</SubHeader>
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
              placeholder="Name"
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
              placeholder="Email"
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
            placeholder="Coffee?"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </InputWrapper>
      </ContactForm>
      <SubmitButton onClick={submitForm}>
        <p>Send</p>
      </SubmitButton>
    </ContactMeWrapper>
  );
});

export default ContactMe;

const ContactMeWrapper = styled(VerticalWrapper)`
  position: relative;
  background-color: ${(props) => props.theme.colors.opaque1};
  border-radius: 3px;
  padding: 30px;
  align-items: center;

  h1 {
    font-size: 35px;
    color: #d0cae6;
    margin-bottom: 10px;
    text-align: center;
    font-family: Cardo;
  }
  h2 {
    font-size: 18px;
    text-align: center;
    color: ${(props) => props.theme.colors.grey};
    font-family: Cardo;
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
  max-width: 100%;
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
      /* color: #e64848; */
    }
    input {
      border: 1px solid #e64848;
      animation: shake 0.2s ease-in-out 0s 2;
    }
    textarea {
      border: 1px solid #e64848;
      animation: shake 0.2s ease-in-out 0s 2;
    }
    &::after {
      font-family: Cardo;
      font-size: 14px;
      position: absolute;
      bottom: -25px;
      left: 0px;
      color: #e64848;
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
    transition: all 300ms ease-in-out;
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    font-family: Cardo;
    margin-bottom: 10px;
  }
  :focus-within label {
    transition: all 300ms ease-in-out;
  }
`;

const Input = styled.input`
  display: block;
  font-size: 16px;
  font-family: Cardo;
  height: 30px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.opaque2};
  border: 1px solid transparent;
  border-radius: 6px;
  /* border-bottom: 1px solid #e64848; */
  caret-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.grey};
  padding: 10px;
  position: relative;
  transition: all 300ms ease-in-out;
  ::placeholder {
    color: #918da1;
  }
  :focus {
    background-color: ${(props) => props.theme.colors.opaque4};
    color: ${(props) => props.theme.colors.white};
    outline: none;
    /* border-bottom: 1px solid #f6f7f8; */
    ::placeholder {
      color: #918da1;
    }
  }
  @media screen and (max-width: 700px) {
    width: 385px;
  }
`;

const MessageInput = styled.textarea`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Cardo;
  background-color: transparent;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.colors.opaque2};
  padding: 10px;
  caret-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.white};
  line-height: 25px;
  min-height: 60px;
  resize: none;
  transition: all 300ms ease-in-out;
  ::placeholder {
    color: #918da1;
  }
  :focus {
    background-color: ${(props) => props.theme.colors.opaque4};
    outline: none;
    ::placeholder {
      color: #a6a1b8;
    }
  }
`;

const SubmitButton = styled.button`
  position: relative;
  padding: 5px 50px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.opaque3} !important;
  border: 2px solid ${(props) => props.theme.colors.opaque3} !important;
  background-color: transparent;

  p {
    position: relative;
    z-index: 2;
    margin: 0px;
    font-size: 18px;
    width: auto;
    font-family: Cardo;
    color: ${(props) => props.theme.colors.white} !important;
    line-height: 40px;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) => props.theme.colors.opaque4};
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
