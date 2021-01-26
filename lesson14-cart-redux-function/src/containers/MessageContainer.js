import React, { useState } from "react";
import Message from "../components/Message";
import { useSelector } from "react-redux";

function MessageContainer(props) {
  const message = useSelector((state) => state.message);
  return <Message message={message} />;
}

export default MessageContainer;
