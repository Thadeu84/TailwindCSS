import { TestmonialItem } from './components/TestmonialItem';

function App() {
  return (
    <div className="p-10">
      <TestmonialItem />

      <a
       className=" block shadow bg-green-600 text-white text-center p-4 mt-5 rounded-xl hover:bg-green-500"
       href="https://b7web.com.br/fullsatck">
        Clique aqui para se inscrever no curso
        </a>
    </div>
     
 );
}

export default App;