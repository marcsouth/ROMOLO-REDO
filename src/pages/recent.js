import Navigation from "../components/navigation"

import { Link } from "react-router-dom"

export default function Recent() {
  return (
    <>
    <Navigation />

      <div className="recentwrap">

      <div className="recentcontainer">

      <Link  to="/Venice">

      <img src="../ROMOLO RECENT PICTURES/venice art bienniaL/photo1.jpg" alt="venice main sculpture"/>

      </Link>

      <ul>
        <li><h2>Venice Art Biennial 22 </h2></li>
        <li>Palazzo Mora, Venice, Italy</li>
        <li>Romolo Del Deo: Farewell Concert for</li>
        <li>“The Tree of Life Which Is Ours” </li>
        <li>November 27, 2022, 16:00-17:00 CET</li>
      </ul>

      </div>


      <div className="recentcontainer">

      <Link to="/Gigantic">

        <img src="../ROMOLO RECENT PICTURES/gigantic NY/photo5.jpg" alt="venice main sculpture"/>

      </Link>
<ul>
  <li><h2>Gigantic NY </h2></li>
  <li>Tribeca, NYC</li>
  <li>Romolo Del Deo: A Touch of Time </li>
  <li>October 13 - November 12, 2022</li>
</ul>

</div>


<div className="recentcontainer">

      <Link to="/Idealspaces">

        <img src="../ROMOLO RECENT PICTURES/ideal spaces/recentidealhead.jpeg" alt="Romolo Del Deo drawing"/>

    </Link>
<ul>
  <li><h2>Ideal Spaces </h2></li>
  <li>Karlsruhe, Germany</li>
  <li>Romolo Del Deo: “Creature Celeste” </li>
  <li>(Celestial Creatures)</li>
  <li>August 31 - September 8, 2022</li>
</ul>

</div>

<div className="recentcontainer">

<Link to="/Venice2">

      <img src="../ROMOLO RECENT PICTURES/venice2/photo1.jpg" alt="Romolo Del Deo drawing"/>

</Link>

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

<Link to="/Bertawalker">

  <img src="../ROMOLO RECENT PICTURES/berta walker gallery/photo1.jpg" alt="Romolo Del Deo drawing"/>

</Link>

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
