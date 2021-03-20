import React, { useState, useRef } from "react";

export const TodoForm: React.FC = () => {
  //   const [title, setTitle] = useState<string>("");
  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };
  //   const keyPressHandlerTest = (event: React.KeyboardEvent) => {
  //       if (event.key === "enter") {
  //           console.log(title)
  //           setTitle('')
  //       }
  //   };

  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "enter") {
      console.log(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-fiels mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        onKeyPress={keyPressHandler}
        type="text"
        id="title"
        placeholder="Enter your task here"
      />
      <label htmlFor="title" className="active">
        Enter your task here
      </label>
    </div>
  );
};
