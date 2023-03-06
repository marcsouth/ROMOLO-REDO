import Navigation from "../components/navigation"
import Newspaper from "../THE PRESS LOGOS/The-Art-Newspaper-Logo.jpeg"
import Provincetown from "../THE PRESS LOGOS/pti.png"
import Tribeca from "../THE PRESS LOGOS/Tribeca-Citizen-logo.jpeg"
import Overview from "../THE PRESS LOGOS/Screen+Shot+2022-10-31+at+11.45.23+AM.png"
import Harvard from "../THE PRESS LOGOS/Harvardwood-white-hi.png"
import Newaintbad from "../THE PRESS LOGOS/newaintbad-1.png"



export default function Press() {
  return (
    <>
    <Navigation />

    <div className="presswrapper">
      <div className="presscontainer">

      <img src={Newspaper} />

      <div className="presstext">

        <p><a href="https://www.theartnewspaper.ru/posts/20220628-zsrk/">Myths and Modernity: Venice Bienalle</a></p>
        <br />
        <p>Alisa Shavrina</p>

      </div>

      </div>


      <div className="presscontainer">

<img src={Newaintbad} />

<div className="presstext">

  <p><a href="https://aint-bad.com/article/2022/11/09/in-conversation-with-romolo-del-deo/">In Conversation With: Romolo Del Deo</a></p>
  <br />
  <p>Emerald Arguelles</p>

</div>

</div>

      <div className="presscontainer">

<img src={Overview} />

<div className="presstext">

  <p><a href="https://www.theartnewspaper.ru/posts/20220628-zsrk/">“I learned more about art by studying anthropology, sociobiology and philosophy, than I did in the studio”</a></p>
  <br />
  <p>The Overview</p>

</div>

</div>



<div className="presscontainer">

<img src={Tribeca} />

<div className="presstext">

  <p><a href="https://tribecacitizen.com/2022/10/10/romolo-del-deo-show-opens-on-jay-street-this-week/">Romolo Del Deo show opens on Jay Street this week</a></p>
  <br />
  <p>Tribeca Citizen</p>

</div>

</div>


<div className="presscontainer">

<img src={Harvard} />

<div className="presstext">

  <p><a href="https://www.harvardwood.org/romolo_del_deo">Romolo Del Deo</a></p>
  <br />
  <p>Rachel Levy</p>

</div>

</div>



<div className="presscontainer">

<img src={Provincetown} />

<div className="presstext">

  <p><a href="https://provincetownindependent.org/arts-minds/2022/07/06/arts-briefs-43/">Arts Briefs</a></p>
  <br />
  <p>The Provincetown Independent</p>

</div>

</div>


    </div>
    </>
  )
}
