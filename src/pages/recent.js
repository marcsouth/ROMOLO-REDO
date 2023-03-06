import Navigation from "../components/navigation"
import Venice from "../ROMOLO RECENT PICTURES/venice art bienniaL/veniceart22.jpg"
import Gigantic from "../ROMOLO RECENT PICTURES/gigantic NY/gigantichome.jpg"
import Ideal from "../ROMOLO RECENT PICTURES/ideal spaces/DSC09888.jpg"
import Venice2 from "../ROMOLO RECENT PICTURES/venice2/DSC07573.jpg"
import Berta from "../ROMOLO RECENT PICTURES/berta walker gallery/IMG_0006.jpg"

export default function Recent() {
  return (
    <>
    <Navigation />

      <div className="recentwrap">

      <div className="recentcontainer">

      <img src={Venice} alt="venice main sculpture"/>

      <ul>
        <li><h2>Venice Art Biennial 22 </h2></li>
        <li>Palazzo Mora, Venice, Italy</li>
        <li>Romolo Del Deo: Farewell Concert for “The Tree of Life Which Is Ours” </li>
        <li>November 27, 2022, 16:00-17:00 CET</li>
      </ul>

      </div>


      <div className="recentcontainer">

<img src={Gigantic} alt="venice main sculpture"/>

<ul>
  <li><h2>Gigantic NY </h2></li>
  <li>Tribeca, NYC</li>
  <li>Romolo Del Deo: A Touch of Time </li>
  <li>October 13 - November 12, 2022</li>
</ul>

</div>


<div className="recentcontainer">

<img src={Ideal} alt="Romolo Del Deo drawing"/>

<ul>
  <li><h2>Ideal Spaces </h2></li>
  <li>Karlsruhe, Germany</li>
  <li>Romolo Del Deo: “Creature Celeste” </li>
  <li>(Celestial Creatures)</li>
  <li>August 31 - September 8, 2022</li>
</ul>

</div>

<div className="recentcontainer">

<img src={Venice2} alt="Romolo Del Deo drawing"/>

<ul>
  <li><h2>Venice Art Biennial 22</h2></li>
  <li>Venice, Italy</li>
  <li>Romolo Del Deo: “The Tree of Life  </li>
  <li>Which Is Ours” Personal Structures </li>
  <li>Installation</li>
  <li>April 21- November 27, 2022</li>
</ul>

</div>


<div className="recentcontainer">

<img src={Berta} alt="Romolo Del Deo drawing"/>

<ul>
  <li><h2> Berta Walker Gallery</h2></li>
  <li>Provincetown, MA</li>
  <li>Romolo Del Deo: The Constallation of   </li>
  <li>Which Is Ours” Personal Structures </li>
  <li>Cassiopeia </li>
  <li>July 1 - July 23, 2022</li>
</ul>

</div>



      </div>

    </>
  )
}
