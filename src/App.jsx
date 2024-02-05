import "./App.css";
import { EmpleadoList } from "./components/EmpleadoList";
import { EmpleadoRow } from "./components/EmpleadoRow";

function App() {
  let empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "https://avatar.iran.liara.run/public/42",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "https://avatar.iran.liara.run/public/41",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "https://avatar.iran.liara.run/public/40",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "https://avatar.iran.liara.run/public/39",
    },
  ];

  return (
    <>
      <section className="container">
        <EmpleadoList empleados={empleados} />
      </section>
    </>
  );
}

export default App;
