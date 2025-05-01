function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <img className="d-inline-block align-text-top"
            src="/logo-sem-fundo.png"
          />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Página Inicial</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Cuidadores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Login.jsx" id="cadastro">Cadastrar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
  
  export default Navbar;