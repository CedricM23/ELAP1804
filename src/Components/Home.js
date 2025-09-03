import React from "react";
import HaitiFlag from "../Images/HaitiFlag.png";
import "../home.css";
import "../App.css";
import HaitiMap from "../Images/HaitiMap.jpg";
import HaitiWaterfall from "../Images/HaitiWaterfall.jpg";
import HaitiBoat from "../Images/HaitiBoat.webp";
import HaitiCitadell from "../Images/HaitiCitadelle.webp";
import Haitifj from "../Images/Haitifj.webp";
import HaitiAbricot from '../Images/HaitiAbricot.jpg';
import HaitiSiwel from '../Images/HaitiSiwel.jpeg';
import HaitiKachiman from '../Images/HaitiKachiman.jpeg';
import Haitikalbasik from '../Images/Haitikalbasik.jpg';
import HaitiLamVeritab from '../Images/HiaitiLamVertiab.webp';
import HaitiGrenadine from '../Images/HaitiGrenadin.jpg';
import HaitiLalo from '../Images/HaitiLalo.png';
import HaitiRiceandBeans from '../Images/HaitiRiceandBeans.jpg';
import HaitiBouyon from '../Images/HaitiBouyon.jpg';
import HaitiSoupJumou from '../Images/HaitiSoupJomou.webp';

function Home() {
  return (
    <div>
      <img src={HaitiFlag} alt="" />
      <h1> The First Flag of Hayti(Ayiti)</h1>

      <article style={{ color: "red" }}>
        OUT OF GOVERNMENTS, POLITICS AND RELIGIONS IN HAITI, THERE IS UNITY! IN
        THE NAME OF OUR ANCESTORS, WE SHALL RISE AGAIN!
      </article>

      <article>
        For Haiti, For the Ewo Lakay, For the children of 1804, We are pleased
        to launch ELAP 1804 which we are hoping will constitute our First
        Virtual Haitian Global Village.
      </article>

      <article style={{ color: "red" }}>
        ELAP1804 will house:
        <br />
        1. Haitians born in Haiti and abroad; <br />
        2. Children of Haitians born abroad.
      </article>

      <article>
        The time has come for Haiti to be re-introduced to the world! Scattered
        over the world, ELAP1804 will be the common platform for Haitians born
        in and out of Haiti outside of all{" "}
        <span style={{ color: "red" }}>
          GOVERNMENTS, POLITICS, POLITICAL PARTIES AND RELIGIONS.
        </span>
      </article>

      <article>
        ELAP1804 is the website where Haitians will be listed in a manner as to
        keep all of us informed about our achievements in Haiti and around the
        world. ELAP1804 celebrates Haiti and Haitians only. Haiti and Haitians
        will regain respect and dignity as a people because individual victories
        will be gathered there to represent us in a juster and verifiable
        manner. ELAP 1804 aims at utilizing our resources - human and financial
        - to touch the lives of Haitians in Haiti and abroad by bringing
        together all the children of Haiti around what matters most to us: Haiti
        for and with{" "}
        <span style={{ color: "red", fontSize: "20px" }}>HAITIANS ONLY</span>.
      </article>

      <div className="geography">
        <img src={HaitiMap} alt="map of haiti" />
        <section className="infographic1">
          <h1>Population</h1>
          <p>11.8 M</p>
          <h1>Religion</h1>
          <p>Catholic</p>
          <h1>National Bird</h1>
          <p>Hispaniolan Trogon (Kanson Wouj)</p>
          <h1>National Flower</h1>
          <p>Hibiscus (Choublak)</p>
          <h1>National Tree</h1>
          <p>The Royal Palm (Palmis)</p>
          <h1>National Foods</h1>
          <p>Soup Joumou</p>
          <p>Rice and Kidney Beans (Diri ak Pwa Kole)</p>
          <p>Griots</p>
        </section>
      </div>

      <img src={HaitiWaterfall} alt="" />
      <caption style={{ marginBottom: "20px" }}>
        <strong>
          Bassin Bleu waterfall near Jacmel <br />
          Photo: Franck Fontain
        </strong>
      </caption>

      <div>
        <h1 className="PhotoGridTitle">The Natural Beauty of Haiti</h1>

        <div className="Image1">
          <a href="https://visithaiti.com/destinations/photo-journal-cayes-jacmel/">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={HaitiBoat}
              alt=""
            />
            <h4>Cayes-Jacmel</h4>
          </a>

          <a href="https://visithaiti.com/destinations/citadelle-laferriere/">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={HaitiCitadell}
              alt=""
            />
            <h4>Citadelle Laferriere</h4>
          </a>

          <a href="https://visithaiti.com/things-to-do/fort-jacques/">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={Haitifj}
              alt=""
            />
            <h4>Fort Jacques</h4>
          </a>

          <a href="https://www.azmartinique.com/en/all-to-know/fruits-vegetables/mammee-apple#google_vignette">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={HaitiAbricot}
              alt=""
            />
            <h4>Abricot (Apricot)</h4>
          </a>

          <a href="https://stock.adobe.com/search?k=siwel&asset_id=77111805">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={HaitiSiwel}
              alt=""
            />
            <h4>Siwèl</h4>
          </a>

          <a href="https://stock.adobe.com/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cachiman&order=relevance&limit=100&search_page=1&search_type=usertyped&acp=&aco=cachiman&get_facets=0&asset_id=661024973">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={HaitiKachiman}
              alt=""
            />
            <h4>Kachiman (Custard Apple)</h4>
          </a>

          <a href="https://tchakayiti.com/home/kalbasik/">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={Haitikalbasik}
              alt=""
            />
            <h4>kalbasik</h4>
          </a>

          <a href="https://tchakayiti.com/home/lame-veritable-lam-veritab-haiti/">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={HaitiLamVeritab}
              alt=""
            />
            <h4>Lam Veritab (Bread Fruit)</h4>
          </a>

          <a href="https://www.raindanceseeds.com/plantsandseeds/badea-tumbo-passiflora-quadrangularis">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={HaitiGrenadine}
              alt=""
            />
            <h4>Grenadin (Giant Passionfruit)</h4>
          </a>

          <a href="https://m.haitiopen.com/culture/cuisine/lalo-haitian-food/">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={HaitiLalo}
              alt=""
            />
             <h4>Legume Lalo</h4>
          </a>

          <a href="https://www.chichilicious.com/recipes/rice-and-beans/">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={HaitiRiceandBeans}
              alt=""
            />
            <h4>Rice and Beans</h4>
          </a>

          <a href="http://www.suzonspice.com/bouyon-bef.html">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={HaitiBouyon}
              alt=""
            />
            <h4>Bouyon</h4>
          </a>

          <a href="http://www.suzonspice.com/bouyon-bef.html">
            <img
              style={{
                height: "300px",
                width: "500px",
                borderRadius: "10px",
              }}
              src={HaitiSoupJumou}
              alt=""
            />
            <h4>Soup Joumou (Independance Day Soup)</h4>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Home;
