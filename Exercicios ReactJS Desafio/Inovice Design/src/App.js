import './App.css';
import Button from './components/button'
import Table from './components/table'
import Total from './components/total'
import Invoice from './components/invoice'

function App() {

  return (
    <function>
      <div>
        <div className="container">
          <Invoice>Invoice</Invoice>
          <Table />
          <Total />
          <Button>PAY NOW</Button>
        </div>
      </div>
    </function>
  );
}

export default App;
