import './App.css';
import Card from './components/Card.js';
import anime from 'animejs/lib/anime.es.js';
import Simulador from './components/Simulador';


const supervivientes = [
  {
    id: 1,
    nombre: "Claudette",
    rol: "Superviviente",
    habilidades: [
      "Conocimientos de Botánica",
      "Auto-curación",
      "Empatia"
    ],
  },
  {
    id: 2,
    nombre: "Bill",
    rol: "Superviviente",
    habilidades: [
      "Inquebrantable",
      "Tiempo Prestado",
      "Dejado atras"
    ],
  },
  {
    id: 3,
    nombre:"Lauri",
    rol: "Superviviente",
    habilidades: [
      "Ultimo Superviviente",
      "Golpe Decisivo",
      "Objeto de obsesion"
    ],
  }
]

const killers = [
  {
    id: 1,
    nombre: "The Hillbilly",
    img: "https://deadbydaylight.com/static/27e766516d2935990054cb51a23bc207/1f375/killer_thehillbilly_headshot_848632fc4e.png",
    category: "Base Game",
    color: "rgb(125, 25, 25)",
    description: "The sound of a revving motor, followed by a bloodthirsty scream of rage. The Hillbilly isnt exactly subtle, but he makes up for it in brutal efficiency. Capable of traversing great distances at a rapid pace, those in his path will be rudely introduced to one-hundred gnashing chainsaw blades."
  },
  {
    id: 2,
    nombre: "The Shape",
    img: "https://deadbydaylight.com/static/9d89f1255a64ac66ad4c718c9ff6e709/1f375/killer_thedoctor_headshot_0a6c6a9169.png",
    category: "Franchise DLC",
    color: "rgb(175, 100, 0)",
    description: "The Shape lurks in the distance, patiently biding his time. His evil builds while stalking Survivors, fueling him with malevolent power. As the trial progresses, The Shape evolves from a quiet menace to an unstoppable juggernaut capable of shredding through even the most resilient teams."
  },
  {
    id: 3,
    nombre: "The Cannibal",
    img: "https://deadbydaylight.com/static/5e931981e39e25732fd4b95b5b86795e/1f375/killer_thecannibal_headshot_c784f23cc7.png",
    category: "Franchise DLC",
    color: "rgb(175, 100, 0)",
    description: "Leatherface knows a thing or two about chainsaw massacres. Any Survivor in his path will be instantly cut down, and his presence alone is enough to instill sheer panic. Capable of hitting multiple targets with a single swing, Leatherface is an unstoppable force with an insatiable appetite."
  },
  {
    id: 4,
    nombre: "The Doctor",
    img: "https://deadbydaylight.com/static/9d89f1255a64ac66ad4c718c9ff6e709/1f375/killer_thedoctor_headshot_0a6c6a9169.png",
    category: "Original DLC",
    color: "rgb(125, 125, 125)",
    description: "Even the simplest tasks become exceedingly difficult in the clutches of madness. The Doctors disturbing methods drive Survivors deep into insanity, filling the air with their deranged screams and revealing their locations. Nothing stops a window vault in its tracks like a healthy dose of Shock Therapy."
  }
]

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-item"><a href="#">inicio</a></li>
            <li className="nav-item"><a href="#">menu</a></li>
            <li className="nav-item"><a href="#">carrito</a></li>
            <li className="nav-item"><a href="#">Nuevas Actualizaciones</a></li>
            <li className="nav-item"><a href="#">Personajes</a></li>
          </ul>
        </nav>
      </header>
      <div className="dbd_title">
        <svg className="dbd" xmlns="http://www.w3.org/2000/svg" width="484.305" height="166.887" version="1.1" viewBox="0 0 128.139 44.155">
          <g fill="none" stroke="#fff" strokeWidth="0.6" fontFamily="Lucida Calligraphy" fontSize="50.8">
          <path d="M.175 43.285l3.646-3.67.372-.05q.149-.025.645.024.248.025.546.025 2.704 0 4.068-1.637 1.389-1.662 2.232-5.928l4.688-23.54q-5.11 0-8.26 2.753-3.15 2.729-3.15 7.144v.546L.15 21.284q1.29-14.71 21.183-14.71h7.169q8.285 0 11.956 3.101 3.67 3.076 3.67 10.07 0 11.336-7.838 17.76-7.813 6.4-21.604 6.4-.571 0-2.307-.074zm8.954-3.125l4.416.744q3.596.62 7.317.62 5.11 0 7.962-1.389 2.853-1.414 5.284-5.134 4.29-6.549 4.29-14.56 0-12.354-13.642-12.354h-3.1L17.86 27.113q-1.017 5.184-2.803 7.838T9.129 40.16z"></path>
          <path d="M49.689 43.608l1.76-7.342 3.424-17.14q1.786-8.98 6.722-13.965Q66.555.15 73.65.15q2.456 0 4.465.52l-3.423 3.548q-2.878-1.315-4.961-1.315-3.944 0-5.928 2.878-1.96 2.852-3.547 10.889l-2.68 13.469h.422q2.853-6.25 6.772-10.145 3.944-3.92 7.392-3.92 5.258 0 5.258 6.549 0 7.243-5.73 14.164-5.903 7.118-14.411 7.118-1.265 0-3.2-.074zm5.903-3.498q3.076 1.365 6.201 1.365 4.49 0 7.194-5.705 3.2-6.747 3.2-12.13 0-3.894-2.307-3.894-2.109 0-6.127 4.49-3.994 4.464-7.045 10.244z"></path>
          <path d="M83.7 43.285l3.646-3.67.372-.05q.149-.025.645.024.248.025.546.025 2.703 0 4.068-1.637 1.389-1.662 2.232-5.928l4.688-23.54q-5.11 0-8.26 2.753-3.15 2.729-3.15 7.144v.546l-4.812 2.332q1.29-14.71 21.183-14.71h7.169q8.284 0 11.955 3.101 3.672 3.076 3.672 10.07 0 11.336-7.839 17.76-7.813 6.4-21.605 6.4-.57 0-2.306-.074zm8.954-3.125l4.415.744q3.597.62 7.318.62 5.11 0 7.962-1.389 2.853-1.414 5.283-5.134 4.292-6.549 4.292-14.56 0-12.354-13.643-12.354h-3.1l-3.796 19.026q-1.017 5.184-2.803 7.838-1.785 2.654-5.928 5.209z"></path>
          </g>
        </svg>
      </div>

      <section className="cards">

        {supervivientes.map(elem => {
          return (
          <figure key={elem.id} className="card">
            <h3>{elem.nombre}</h3>
            <h4>{elem.rol}</h4>
            <p className="habi">Habilidades</p>
            <ul>
              <li>{elem.habilidades[0]}</li>
              <li>{elem.habilidades[1]}</li>
              <li>{elem.habilidades[2]}</li>
            </ul>
          </figure>
          )
        })}

      </section>

      <section className="killers">
        <h1 style={{
            color: "white",
            backgroundColor: "hsla(0, 0%, 10%, 0.2)"
          }} className="titulocard">KILLERS</h1>
        {killers.map(killer => 
        <div className="card-container">
          <Card key={killer.id} title={killer.nombre} img={killer.img} category={killer.category} color={killer.color} desc={killer.description}></Card>
          <h2 style={{
            color: "white",
            textAlign: "center",
            marginTop: "10px",
            fontWeight: "normal",
            backgroundColor: "hsla(0, 0%, 10%, 0.4)"
          }}>{killer.nombre}</h2>
        </div>
        )}
      </section>
      <section className="simulator">
        <div>
          <Simulador/>
        </div>
      </section>
    </>
  );
}

window.addEventListener("load", function(){
  anime({
    targets: '.dbd path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
})


export default App;
