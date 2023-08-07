import { customHook } from "./Context";

// const App = () => {
//   const { aluga, setColor } = useContext(NavContext);

//   const handleClick = (color, text) => {
//     aluga(text);
//     setColor(color);
//   };

//   return <div onClick={() => handleClick("green", "bonga")}>App</div>;
// };

// export default App;

// const App = () => {
//   const { color, setColor, user } = useContext(ColorContext);

//   const newColor = "Black";

//   return (
//     <>
//       <button onClick={() => setColor(newColor)}>{color}</button>
//       <button>{user.name.firstName}</button>
//       <button>{user.name.lastName}</button>
//     </>
//   );
// };

const App = () => {
  const { value, console, name, setName } = customHook();

  return (
    <h2
      onClick={() => {
        setName("Yallah");
        console(name);
      }}
    >
      Hello
    </h2>
  );
};

export default App;
