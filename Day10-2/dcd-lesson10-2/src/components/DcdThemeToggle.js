import { useTheme } from "../context/DcdThemeContext";
 
 export default function DcdThemeLoggle() {
   const { theme, toggleTheme } = useTheme();
 
   return (
     <button onClick={toggleTheme}>
       Chuyển sang {theme === "light" ? "Tối" : "Sáng"}
     </button>
   );
 }