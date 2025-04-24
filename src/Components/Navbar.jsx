export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="items">
          <li className="logo">
            <p>logo</p>
          </li>
          <li className="title">
            <h1>Nutrición</h1>
          </li>
          <li className="exit">
            <button>
              Salir
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
