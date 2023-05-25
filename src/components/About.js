import React, { useState } from "react";
import "./About.css";
import appLogo from "../components/konjski-tramvaj.jpg";



const About = () => {


  return (
    <div className="container">

      <div className="naslov">
        <h1>GPP nekad i sad</h1>

      </div>
      <div className="tekst-gore">
        <p >
          Kada je 10. rujna danas već jako davne 1884. godine,
          Osijekom počeo prometovati konjski tramvaj,
          bio je to prvorazredan događaj za grad i njegove građane. Osijek je toga dana dobio
          najsuvremeniji oblik javnog prijevoza, prvi između hrvatskih gradova.
        </p>
      </div>



      <div className="slika">

        <div>
        <img  src={appLogo} alt="Oprostaj od konjskih tramvaja" />
        </div >
        <div ><p>
                        Od tada pa do danas promijenilo se dosta toga. Tramvaj više ne vozi Tvrđom, od 1926.
                        godine Osijekom prometuje električni tramvaj, kasnije se širi gradska mreža kroz Retfalu,
                        Industrijsku četvrt, Jug II, Višnjevac, modernizira se vozni park.
                        No, jedna je stvar u više od 135 godina ostala nepromijenjena: tramvaj je bio i ostao sastavni
                        dio osječke svakodnevice.
                    </p>
                    <p>
                        Tramvajem smo od mladosti putovali svakodnevno u školu,
                        na sastanke s dragim ljudima,
                        na posao. Za tramvajem smo trčali, tramvajem smo žurili, u tramvaju se gužvali.
                        Tramvaj je iznimno važan i za povijest grada kao ključni čimbenik koji je pomogao
                        prometno integrirati svojedobno još nepovezane gradske cjeline, Tvrđu, Gornji,
                        Donji i Novi grad, bez čega modernizacija i ekonomski razvoj Osijeka ne bi bili mogući.
                    </p>
                    <p>
                        Konačno, tramvaj je dio identiteta grada, tradicija koju smo uspjeli održati,
                        simbol po kojem je Osijek prepoznatljiv. Zapravo teško je uopće zamisliti Osijek
                        bez tramvaja na njegovim ulicama.
                    </p>
                    <p>
                        Danas grad Osijek ima 30 km pruge, te ukupno 25 tramvaja u službi javnog prijevoza.
                        Samo Zagreb i Osijek u Hrvatskoj imaju organiziran tramvajski promet, s tim da je Osijek
                        jedan od najmanjih gradova u svijetu čiji građani imaju privilegiju svakodnevno koristiti
                        ovaj iznimno ekološki prihvatljiv oblik javnog prijevoza.
                    </p>
                    <p>
                        Uz tramvajski, u Osijeku je organiziran i autobusni prijevoz. GPP-ova autobusna flota
                        sastoji se od ukupno 36 vozila. Zadnji puta je obnovljena 2019. godine, s 12 novih niskopodnih
                        autobusa, koji su bili financirani sredstvima EU fondova.
                        No, to je tek početak ulaganja u modernizaciju javnog gradskog
                        prijevoza u Osijeku. 
                    </p></div>
        
       
      

      </div>


    </div>
  );
}

export default About;

/*<div id="red">
    <div id="blue">Some text</div>
</div> */

/*
 <div className="tekst">
      <p>
                        Od tada pa do danas promijenilo se dosta toga. Tramvaj više ne vozi Tvrđom, od 1926.
                        godine Osijekom prometuje električni tramvaj, kasnije se širi gradska mreža kroz Retfalu,
                        Industrijsku četvrt, Jug II, Višnjevac, modernizira se vozni park.
                        No, jedna je stvar u više od 135 godina ostala nepromijenjena: tramvaj je bio i ostao sastavni
                        dio osječke svakodnevice.
                    </p>
                    <p>
                        Tramvajem smo od mladosti putovali svakodnevno u školu,
                        na sastanke s dragim ljudima,
                        na posao. Za tramvajem smo trčali, tramvajem smo žurili, u tramvaju se gužvali.
                        Tramvaj je iznimno važan i za povijest grada kao ključni čimbenik koji je pomogao
                        prometno integrirati svojedobno još nepovezane gradske cjeline, Tvrđu, Gornji,
                        Donji i Novi grad, bez čega modernizacija i ekonomski razvoj Osijeka ne bi bili mogući.
                    </p>
                    <p>
                        Konačno, tramvaj je dio identiteta grada, tradicija koju smo uspjeli održati,
                        simbol po kojem je Osijek prepoznatljiv. Zapravo teško je uopće zamisliti Osijek
                        bez tramvaja na njegovim ulicama.
                    </p>
                    <p>
                        Danas grad Osijek ima 30 km pruge, te ukupno 25 tramvaja u službi javnog prijevoza.
                        Samo Zagreb i Osijek u Hrvatskoj imaju organiziran tramvajski promet, s tim da je Osijek
                        jedan od najmanjih gradova u svijetu čiji građani imaju privilegiju svakodnevno koristiti
                        ovaj iznimno ekološki prihvatljiv oblik javnog prijevoza.
                    </p>
                    <p>
                        Uz tramvajski, u Osijeku je organiziran i autobusni prijevoz. GPP-ova autobusna flota
                        sastoji se od ukupno 36 vozila. Zadnji puta je obnovljena 2019. godine, s 12 novih niskopodnih
                        autobusa, koji su bili financirani sredstvima EU fondova.
                        No, to je tek početak ulaganja u modernizaciju javnog gradskog
                        prijevoza u Osijeku. Slijede radovi na infrastrukturi, novi tramvaji,
                        nova remiza, nabavka još novih autobusa…
                    </p>
      </div>
*/
//