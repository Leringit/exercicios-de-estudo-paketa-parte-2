import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Leonardo Salatiel',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Beatriz Alves',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Millene Oliveira',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'Vitor Malvino',
    skills: ['Reason']
  }
]

const App = () => {

  const handleClick = (e, id) => {
    console.log('deletar cliente')
    alert(`ID do cliente: ${id}`)
  }

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}  <button onClick={(e) => handleClick(e, customer.id)}>Deletar Cliente x</button></li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Zurc's S/A</p>
      <p>Bem vindos.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;