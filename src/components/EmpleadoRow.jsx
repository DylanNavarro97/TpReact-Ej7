import { EmpleadoAvatar } from "./EmpleadoAvatar";

export const EmpleadoRow = ({ empleado }) => {
  return (
    <div className="d-flex gap-3 p-2 border">
      <EmpleadoAvatar empleado={empleado} />
      <div className="d-flex flex-column gap-2 justify-content-center">
        <h5>{empleado.fullName}</h5>
        <div className="d-flex gap-2">
          <p className="m-0">{empleado.title}</p>
          <p className="m-0 bg-info rounded-1 text-white px-1">{empleado.department}</p>
        </div>
      </div>
    </div>
  );
};
