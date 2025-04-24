import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export const WelcomeForm = ({ name = "Adrian" }) => {
  const navigate = useNavigate();

  const inputRef = {
    username: useRef(null),
    useremail: useRef(null),
    userworkplace: useRef(null),
    userbirthday: useRef(null),
    userphone: useRef(null),
  };

  const [error, setError] = useState({
    username: false,
    useremail: false,
    userworkplace: false,
    userbirthday: false,
    userphone: false,
  });

  const [UserData, setUserData] = useState({
    username: "Oscar Adan Reyes Lozada",
    useremail: "osadan12@gmail.com",
    userworkplace: "Mega Serviplaza El Rosario Cdmx",
    userbirthday: "38",
    userphone: "01555530367508",
  });

  const onTextChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...UserData, [name]: value });
  };

  const validateForm = () => {
    let output = true;
    Object.entries(UserData).forEach(([name, value]) => {
      if (!value) {
        setError({ ...error, [name]: true });
        output = false;
      }
    });
    return output;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let isValid = validateForm(UserData);
    if (isValid) {
      const words = UserData.username.split(" ").slice(0, 2);
      const nombre = Array.prototype.concat(
        words[0],
        " ",
        words[words.length - 1]
      );
      navigate("/objetivos", {
        state: { name: nombre },
      });
    }
  };

  useEffect(() => {
    Object.entries(error).forEach(([name, value]) => {
      if (value) {
        const input = inputRef[name].current;

        input.classList.remove("error");

        input.classList.add("error");
      }
    });
  }, [error]);

  return (
    <>
      <main className="container">
        <section className="header">
          <div className="content">
            <div className="photo">
              <p>Foto ejemplo</p>
            </div>
            <p className="welcome-title">¡Bienvenida</p>
            <p className="user-name">{name}</p>
          </div>
        </section>
        <section className="form-data">
          <h5 className="instructions">
            Para comenzar, ayúdanos a verificar tus datos
          </h5>
          <form className="user-data" onSubmit={onSubmit}>
            <div className="input-div" ref={inputRef.username}>
              <label className="label-input" htmlFor="username">
                <i className="bi bi-person"></i>
                Nombre
              </label>
              <input
                className="input"
                name="username"
                type="text"
                placeholder="Nombre"
                value={UserData.username}
                onChange={onTextChange}
              />
            </div>
            <div className="input-div" ref={inputRef.useremail}>
              <label className="label-input" htmlFor="useremail">
                <i className="bi bi-envelope"></i>
                Correo eléctronico
              </label>
              <input
                className="input"
                name="useremail"
                type="email"
                placeholder="Correo electronico"
                value={UserData.useremail}
                onChange={onTextChange}
              />
            </div>
            <div className="input-div" ref={inputRef.userworkplace}>
              <label className="label-input" htmlFor="userworkplace">
                <i className="bi bi-geo-alt"></i>
                Lugar de trabajo
              </label>
              <input
                className="input"
                name="userworkplace"
                type="text"
                placeholder="Lugar de trabajo"
                value={UserData.userworkplace}
                onChange={onTextChange}
              />
            </div>
            <div className="input-div" ref={inputRef.userbirthday}>
              <label className="label-input" htmlFor="userbirthday">
                <i className="bi bi-cake"></i>
                Edad
              </label>
              <input
                className="input"
                name="userbirthday"
                type="number"
                placeholder="Dia de nacimiento"
                value={UserData.userbirthday}
                onChange={onTextChange}
              />
            </div>
            <div className="input-div" ref={inputRef.userphone}>
              <label className="label-input" htmlFor="userphone">
                <i className="bi bi-phone"></i>
                Teléfono celular
              </label>
              <input
                className="input"
                name="userphone"
                type="number"
                placeholder="Numero de telefono"
                value={UserData.userphone}
                onChange={onTextChange}
              />
            </div>
            <input type="submit" className="continue-btn login" value={"Continuar"} />
          </form>
        </section>
      </main>
    </>
  );
};
