import React from 'react';
import './App.css';
import Card from './components/Card'
import ImgFirenze from './images/firenze.jpg'
import ImgVerona from './images/verona.jpg'
import ImgBologna from './images/bologna.jpg'
import ImgSiena from './images/siena.jpg'

function App() {
  return (
    <div className="App">
      <div className="card">
        <Card image={ImgFirenze} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit aliquam felis, vel faucibus diam placerat quis. Ut lacinia orci dapibus, efficitur lorem fringilla, bibendum nisi." header='firenze' btn="Learn More" link="https://www.tripadvisor.com/Tourism-g187895-Florence_Tuscany-Vacations.html"/>  
        
        <Card image={ImgVerona} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit aliquam felis, vel faucibus diam placerat quis. Ut lacinia orci dapibus, efficitur lorem fringilla, bibendum nisi." header='verona' btn="Learn More" link="https://www.tripadvisor.com/Tourism-g187871-Verona_Province_of_Verona_Veneto-Vacations.html"/>
        
        <Card image={ImgBologna} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit aliquam felis, vel faucibus diam placerat quis. Ut lacinia orci dapibus, efficitur lorem fringilla, bibendum nisi." header='bologna' btn="Learn More" link="https://www.tripadvisor.com/Tourism-g187801-Bologna_Province_of_Bologna_Emilia_Romagna-Vacations.html"/>
        
        <Card image={ImgSiena} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit aliquam felis, vel faucibus diam placerat quis. Ut lacinia orci dapibus, efficitur lorem fringilla, bibendum nisi." header='siena' btn="Learn More" link="https://www.tripadvisor.com/Tourism-g187902-Siena_Tuscany-Vacations.html"/>

      </div>
    </div>
  );
}

export default App;
