import { useLocation } from "react-router-dom";

export const Objetivos = () => {
  const location = useLocation();

  const { name } = location.state;

  return (
    <>
      <main className="container">
        <section className="header ">
          <div className="content-2">
            <div className="photo">
              <p>Foto de ejemplo</p>
            </div>
            <div className="text">
              <h6 className="title">Nutrición</h6>
              <h3 className="name">Hola, {name}</h3>
              <p className="description">
                Para brindarte una mejor atención contesta las siguientes
                preguntas. La información es confidencial y esencial para crear
                tu perfil y que recibas la mejor atención.
              </p>
            </div>
          </div>
        </section>

        <section className="object-content">
          <form className="form">
            <h1 className="generic-title _row">
              <i className=" bi appleicon"></i>
              Objetivos
            </h1>
            <div className="first _row">
              <div className="input-div">
                <label className="label-input" htmlFor="">
                  ¿Cuál es tu peso ideal?
                </label>
                <input className="input" type="number" />
              </div>
              <div className="input-div">
                <label className="label-input" htmlFor="">
                  ¿Cuanto mides?
                </label>
                <input className="input" type="number" />
              </div>
              <div className="input-div">
                <label className="label-input" htmlFor="">
                  ¿Cuál es tu peso ideal?
                </label>
                <input className="input" type="number" />
              </div>
            </div>
            <div className="second _row">
              <h6 className="title">¿Qué buscas al mejorar tu alimentación?</h6>
              <ul className="options">
                <li className="option">
                  <i className="loose-icon"></i>
                  <label>Perdida de peso</label>
                  <input type="radio" />
                </li>
                <li className="option">
                  <i className="helthyfood-icon"></i>
                  <label>Alimentación saludable</label>
                  <input type="radio" />
                </li>
                <li className="option">
                  <i className="muscular-icon"></i>
                  <label>Aumento de masa muscular</label>
                  <input type="radio" />
                </li>
                <li className="option">
                  <i className="sickcontrol-icon"></i>
                  <label>Control de enfermedades</label>
                  <input type="radio" />
                </li>
              </ul>
            </div>
            <div className="third _row">
              <div className="input-div">
                <label className="label-input" htmlFor="">
                  ¿Cuál ha sido tu peso mínimo en los últimos 5 años?
                </label>
                <input className="input" type="text" />
              </div>
              <div className="input-div">
                <label className="label-input" htmlFor="">
                  ¿Cuál ha sido tu peso máximo en los últimos 5 años?
                </label>
                <input className="input" type="text" />
              </div>
            </div>
            <div className="save-section">
              <label>Deseo continuar después</label>
              <button>
                <i className="bi bi-floppy"></i>
                Guardar mi avance
              </button>
            </div>
            <input className="continue-btn content-page" type="submit" value={"Continuar"} />
          </form>
        </section>
      </main>
    </>
  );
};
