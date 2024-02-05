export const EmpleadoAvatar = ({empleado}) => {
  return (
    <div className="avatarContainer">
      <img
        src={empleado.pic}
        alt={empleado.fullName + " avatar"}
        className="img-fluid"
      />
    </div>
  );
};
