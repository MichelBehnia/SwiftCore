
import Main from "./components/Main";
import Info from "./components/Info";
import Order from "./components/Order";
import Contact from "./components/Contact";
import {Link} from 'react-scroll'

function App() {
  return (
    <div className="bg-slate-950">
      {/* maybe put all the code below in a navbar component along with the import up top */}
      <div className="z-10 bg-slate-950 sticky top-0 border-b rounded-lg flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-violet-400">SwiftCore</h1>
        <ul className="text-white font-bold flex">
          <li className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link activeClass="active" smooth spy to="Info">
              Info
            </Link>
              
          </li>
          <li className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link activeClass="active" smooth spy to="Order">
              Purchase
            </Link>
          </li>
          <li className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link activeClass="active" smooth spy to="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* code ends here */}
      <div className="z-0">
        <Main />
      </div>
      <div className="z-0">
        <section className="pt-5" id="Info"></section>
        <Info />
      </div>
      <div className="z-0">
        <section className="pt-5" id="Order"></section> 
        <Order />
      </div>
      <div className="z-0">
        <section className="pt-5" id="Contact"></section>
        <Contact />
      </div>
    </div>
  );
}

export default App;
