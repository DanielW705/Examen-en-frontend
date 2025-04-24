import { useLocation } from "react-router-dom";

export const Objetivos = () => {
  const location = useLocation();

  const { name } = location.state;

  return (
    <>
      <main className="content">
        <section className="header">
          <div className="content">
            <div className="photo">
              <p>Foto de ejemplo</p>
            </div>
          </div>
          <h6>Nutrición</h6>
          <h3>Hola, {name}</h3>
          <p>
            Para brindarte una mejor atención contesta las siguientes preguntas.
            La información es confidencial y esencial para crear tu perfil y que
            recibas la mejor atención.
          </p>
        </section>

        <section className="object-content">
          <form>
            <h1>Objetivos</h1>
          </form>


        </section>
      </main>
    </>
  );
};
