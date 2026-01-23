import './App.css'
import { Demo1Component } from './demos/1_Base_Component/Demo1Component'
import { Demo2 } from './demos/2_Conditionnel/Demo2'
import { Exo1Coponent } from './exos/1_Creation_Composant/Exo1Coponent'
import { Exo2Coponant } from './exos/2_Boutique/Exo2Coponant'

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
      {/* <Demo2 owner="Gilberte" havePet={false} /> */}

      {/* Cas où la personne a toute les infos */}
      {/* <Demo2 owner="Marceau" havePet={true} name="Banane" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLotgvh-VyqjfBDqpY7f-VohCHgPk1Ub1Fg&s" /> */}

      {/* Cas où l'animal n'a pas de nom */}
      {/* <Demo2 owner="Mohamed" havePet={true} name="Saispas" image="https://gtamobilevets.com/wp-content/uploads/2024/02/6c893687856697d175dc35f5d65a4dce.jpg" type="chien" /> */}

      {/* Cas où l'animal n'a pas d'image */}
      {/* <Demo2 owner="Ines" havePet={true} image="" type="chat" /> */}

      {/* ----- EXO2 ------  */}
      <div className="containerCards"> 
 
        <Exo2Coponant isAvailable={false} name="Leopard Furby" image="https://static.wikia.nocookie.net/official-furby/images/8/81/E68654e241989841ec8e339a4b781dd6.jpg" description="No two Leopard Furbys are identical, as each one has unique spots in different locations — some even have none at all." price={50} promoPrice={null} />
 


      {/* Cas où le produit possède une description : on l’affiche dans un <p> par exemple sinon, on affiche rien */}
   
        <Exo2Coponant isAvailable={true} name="Witch's Cat Furby" image="https://static.wikia.nocookie.net/official-furby/images/d/d1/Furby7.jpg" description="This Furby was officially referred to as the Black Cat (クロネコ) Furby in Japan." price={50} promoPrice={null} />
     

      {/* Cas où  le produit possède un promoPrice :  affichez le promoPrice sinon afficher le price tout court */}
     
        <Exo2Coponant isAvailable={true} name="Pink Flamingo Furby" image="https://static.wikia.nocookie.net/official-furby/images/6/6a/D17a10e065_36010496_o2_%281%29.gif" description="This Furby was later re-released with the Fresh New Look! sticker on its box, however, had no changes." price={50} promoPrice={20} />
   

      {/* Cas où le produit possède un promoPrice : affichez la card du produit un peu différemment (le contour en rouge, jsp, faites ce que vous voulez */}
     
        <Exo2Coponant isAvailable={true} name="Fresh Owl" image="https://static.wikia.nocookie.net/official-furby/images/3/3b/Owl_Furby_1998.jpg" description="" price={50} promoPrice={null} />

      </div>
      
    </>
  )
}

export default App
