import { createContext, useState } from "react";

// const NavContext = createContext();

// const Context = ({ children }) => {
//   const [color, setColor] = useState("green");

//   const aluga = (text) => {
//     console.log(text);
//   };

//   console.log(color);

//   return (
//     <NavContext.Provider value={{ aluga, setColor }}>
//       {children}
//     </NavContext.Provider>
//   );
// };

// export { Context };
// export default NavContext;

const ColorContext = createContext();

const Context = ({ children }) => {
  const [color, setColor] = useState("Blue");
  const [user, setUser] = useState({
    name: {
      firstName: "Usama",
      lastName: "Aslam",
    },
  });

  return (
    <ColorContext.Provider value={{ color, setColor, user }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
export { Context };
