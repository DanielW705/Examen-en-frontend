import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import "./Styles/site.css";
import { WelcomeForm , Objetivos} from "./Components/Forms";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomeForm />}></Route>
        <Route path="/objetivos" element={<Objetivos/>}></Route>
      </Routes>
    </>
  );
}
