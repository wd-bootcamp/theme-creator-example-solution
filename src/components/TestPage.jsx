import "./TestPage.css";

export default function TestPage({ theme, onLeave }) {
  return (
    <main
      className="testpage"
      style={{
        "--primary": theme.colors[0].value,
        "--secondary": theme.colors[1].value,
        "--surface": theme.colors[2].value,
        "--surface-on": theme.colors[3].value,
      }}
    >
      <button onClick={onLeave} className="testpage__return-button">
        Close Test Page
      </button>
      <h1 className="testpage__title">{theme.name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis
        rem adipisci obcaecati impedit perferendis dolore cupiditate, inventore,
        illo eum est. Facilis eaque voluptate odio obcaecati at possimus amet
        soluta incidunt officiis ipsum perspiciatis, similique cupiditate labore
        neque ut commodi quas maxime repudiandae magnam officia animi optio. Eos
        officia dolorum reprehenderit quibusdam quo quisquam, deserunt obcaecati
        voluptate incidunt. Quibusdam, eius vitae officiis esse laborum alias et
        ipsum dolore quam ut praesentium, rem, dolorum hic ipsa. A non voluptate
        suscipit, perspiciatis nesciunt sunt distinctio ullam aut nobis libero
        dolorem ipsa obcaecati odio eaque inventore itaque, corrupti unde. Ipsam
        iusto quis maiores?
      </p>
      <article className="testpage__highlight">
        <h2>Test Title</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia esse
          aspernatur officia saepe quod, ea dolorem neque ducimus, assumenda
          facilis iusto est incidunt rerum ut error, veritatis ipsa in?
          Officiis.
        </p>
      </article>
      <button className="testpage__button testpage__button--primary">
        Primary
      </button>
      <button className="testpage__button testpage__button--secondary">
        Secondary
      </button>
      <button className="testpage__button testpage__button--outlined">
        Outlined
      </button>
    </main>
  );
}
