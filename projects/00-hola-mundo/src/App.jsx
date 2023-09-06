import "./App.css";
export function App() {
  return (
    <article className="tw-followCard">
      <header>
        <img
          src="https://unavatar.io/instagram/willsmith"
          alt="un avatar random"
        />
        <div>
          <strong>avatar</strong>
          <span>@avatar</span>
        </div>
      </header>

      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  );
}
