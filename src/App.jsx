import './App.css'
import { Demo1Component } from './demos/1_Base_Component/Demo1Component'
import { Demo2 } from './demos/2_Conditionnel/Demo2'
import { Exo1Coponent } from './exos/1_Creation_Composant/Exo1Coponent'

function App() {

  return (
    <>
      {/** ------- DEMO 1 --------------- */}
      {/* <p>{ new Date().toLocaleDateString('fr') }</p> */}

      {/* Si vous souhaitez envoyer une chaine dans les props "". Si vous souhaitez envoyer autre chose, il faudra mettre les {} */}
      {/* <Demo1Component name="HTML" type="Front-End" difficulty={1} />

      <Demo1Component name="Express" type="Back-End" difficulty={5} />

      <Demo1Component /> */}

      {/** ------------ EXO 1 --------------- */}
      {/* <Exo1Coponent />

      <Exo1Coponent name="Gilberte" age={99} image="../public/dame.jpg"  />
      
      <Exo1Coponent name="Marceau" age={5} image="../public/garcon.jpg" /> */}

      {/** ---------- DEMO 2 --------------- */}
      {/* Cas où la personne n'a pas d'animal */}
      <Demo2 owner="Gilberte" havePet={false} />

      {/* Cas où la personne a toute les infos */}
      <Demo2 owner="Marceau" havePet={true} name="Banane" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLotgvh-VyqjfBDqpY7f-VohCHgPk1Ub1Fg&s" />

      {/* Cas où l'animal n'a pas de nom */}
      <Demo2 owner="Mohamed" havePet={true} name="Saispas" image="https://blog.justfoodfordogs.com/wp-content/uploads/2024/06/types-of-dogs-with-wrinkles.jpg" type="chien" />

      {/* Cas où l'animal n'a pas d'image */}
      <Demo2 owner="Ines" havePet={true} image="" type="chat" />
    </>
  )
}

export default App
