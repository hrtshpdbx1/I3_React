import './App.css'
import { Demo1Component } from './demos/1_Base_Component/Demo1Component'
import { Demo2 } from './demos/2_Conditionnel/Demo2'
import { Demo3 } from './demos/3_Collections/Demo3'
import { Demo4 } from './demos/4_Events/Demo4'
import { Demo5 } from './demos/5_State/Demo5'
import { Demo6 } from './demos/6_Les_Formulaires/Demo6'
import { Demo6bis } from './demos/6_Les_Formulaires/Demo6bis'
import { Demo6Lib } from './demos/6_Les_Formulaires/Demo6Lib'
import { Demo7 } from './demos/7_Interaction/Demo7'
import { Lavie } from './demos/8_Cycle_de_vie/LaVie'
import { Demo9 } from './demos/9_API/Demo9'

import { Exo1 } from './exos/1_Creation_Composant/Exo1'
import { Produit } from './exos/2_Conditionnel/Produit'
import { Exo3 } from './exos/3_Collections/Exo3'
import { Exo5 } from './exos/5.Exo_Formulaire/Exo5'
import { Exo6 } from './exos/6_Interactions/Exo6'
import { Exo7 } from './exos/7_Cycle_de_vie/Exo7'

function App() {

  return (
    <>
      {/* <p>{new Date().toLocaleDateString('fr')}</p> */}

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

      {/* ---- version Aude ----  */}

      {/* <h1>🧶 Tendi'Knit 🧶</h1>
      <h2>Parce que vos vêtements méritent que nos poignets y passent.</h2>
      <p>Découvrez nos produits :</p>
      <div className='flex flex-row justify-center items-center gap-3'> */}

      {/* <Produit isAvailable={false} name='Le Over' /> */}

      {/* <Produit isAvailable={true} name='Le Lavan-doux' image='/src/assets/images/Lavandoux.png' description='Un pull aussi doux que les bisous de ta mamy, couleur lavande' price={200}/> */}

      {/* <Produit isAvailable={true} name='Le Varicelle' image='/src/assets/images/Varicelle.png' price={250} /> */}

      {/* <Produit isAvailable={true} name='Go Touch Grass' image='/src/assets/images/GoTouchGrass.png' description="Parce qu'il est important de se reconnecter à Dame Nature" price={300} promoPrice={225} /> */}

      {/* </div> */}


{/*  ---- version Moi ----- */}
      {/* <div className="containerCards"> 
 
        <Exo2Coponant isAvailable={false} name="Leopard Furby" image="https://static.wikia.nocookie.net/official-furby/images/8/81/E68654e241989841ec8e339a4b781dd6.jpg" description="No two Leopard Furbys are identical, as each one has unique spots in different locations — some even have none at all." price={50} promoPrice={null} />
  */}


      {/* Cas où le produit possède une description : on l’affiche dans un <p> par exemple sinon, on affiche rien */}
{/*    
        <Exo2Coponant isAvailable={true} name="Witch's Cat Furby" image="https://static.wikia.nocookie.net/official-furby/images/d/d1/Furby7.jpg" description="This Furby was officially referred to as the Black Cat (クロネコ) Furby in Japan." price={50} promoPrice={null} /> */}
     

      {/* Cas où  le produit possède un promoPrice :  affichez le promoPrice sinon afficher le price tout court */}
     
        {/* <Exo2Coponant isAvailable={true} name="Pink Flamingo Furby" image="https://static.wikia.nocookie.net/official-furby/images/6/6a/D17a10e065_36010496_o2_%281%29.gif" description="This Furby was later re-released with the Fresh New Look! sticker on its box, however, had no changes." price={50} promoPrice={20} />
    */}

      {/* Cas où le produit possède un promoPrice : affichez la card du produit un peu différemment (le contour en rouge, jsp, faites ce que vous voulez */}
{/*      
        <Exo2Coponant isAvailable={true} name="Fresh Owl" image="https://static.wikia.nocookie.net/official-furby/images/3/3b/Owl_Furby_1998.jpg" description="" price={50} promoPrice={null} /> */}


    {/* </div > */}

 {/* -------------- DEMO 3 -------------- */}

      {/* <Demo3 /> */}

      {/* -------------- EXO 3 -------------- */}

      {/* <Exo3 /> */}

      {/* -------------- DEMO 4 -------------- */}
      
      {/* <Demo4 /> */}

      {/* -------------- DEMO 5 -------------- */}

      {/* <Demo5 /> */}

      {/* -------------- DEMO 6-------------- */}

      {/* <Demo6/>
      <Demo6bis/>

      <Demo6Lib/>

      <Exo5/> */}
{/* 
      <Demo7/> */}
      {/* <Exo6/> */}
      {/* <Lavie/>  */}
      {/* <Exo7 /> */}
      < Demo9/>
      </>

      
  
  )
}

export default App
