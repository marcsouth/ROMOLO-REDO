import Navigation from "../components/navigation"
import Venice from "../ROMOLO RECENT PICTURES/venice art bienniaL/veniceart22.jpg"
import Gigantic from "../ROMOLO RECENT PICTURES/gigantic NY/gigantichome.jpg"

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






























      </div>

    </>
  )
}
