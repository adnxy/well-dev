import brasilLiga from "../../public/brasil-flag.png";
import mexicoLiga from "../../public/mexico-flag.png";
import argentinaLiga from "../../public/argentina.png";
import honduras from "../../public/honduras.png";
import bolivia from "../../public/bolivia.png";
import aruba from "../../public/aruba.png";
import nicaragua from "../../public/nicaragua.png";
import salvador from "../../public/el-salvador.png";
import australia from "../../public/australia.png";
import japan from "../../public/japan.png";
import southKorea from "../../public/south-korea.png";
import hongKong from "../../public/hong-kong.png";
import columbia from "../../public/columbia.png";
import netherlands from "../../public/netherlands.png";
import poland from "../../public/poland.png";
import turkey from "../../public/turkey.png";
import indonesia from "../../public/indonesia.png";
import greece from "../../public/greece.png";
import portugal from "../../public/portugal.png";
import romania from "../../public/romania.png";
import belgium from "../../public/belgium.png";
import czechRepublic from "../../public/czech-republic.png";
import denmark from "../../public/denmark.png";
import egypt from "../../public/egypt.png";
import franceLeague from "../../public/france.png";
import premierLeagueImg from "../../public/england.png";
import laLigaImg from "../../public/spain.png";
import bundesligaImg from "../../public/germany.png";
import serieAImg from "../../public/italy.png";
import colombia from "../../public/colombia.png";
import costaRica from "../../public/costa-rica.png";
import bulgaria from "../../public/bulgaria.png";
import jordan from "../../public/jordan.png";
import india from "../../public/india.png";
import trinidad from "../../public/trinidad-and-tobago.png";
import guatemala from "../../public/guatemala.png";
export const getLeagueImage = (league: string) => {
  switch (league) {
    case "1":
    case "2":
    case "3":
      return premierLeagueImg;
    case "5":
    case "509":
    case "23":
      return laLigaImg;
    case "7":
      return bundesligaImg;
    case "8":
      return franceLeague;
    case "18":
      return franceLeague;
    case "68":
    case "375":
      return mexicoLiga;
    case "512":
    case "19":
      return argentinaLiga;
    case "20":
      return brasilLiga;
    case "6":
      return serieAImg;
    case "121":
      return honduras;
    case "111":
      return bolivia;
    case "357":
      return aruba;
    case "234":
    case "372":
      return nicaragua;
    case "145":
      return salvador;
    case "702":
      return australia;
    case "21":
      return japan;
    case "128":
      return southKorea;
    case "408":
      return hongKong;
    case "32":
      return indonesia;
    case "35":
    case "298":
    case "793":
      return greece;

    case "40":
      return romania;

    case "9":
    case "199":
    case "346":
      return turkey;

    case "25":
      return poland;

    case "17":
      return netherlands;

    case "26":
    case "127":
      return colombia;
    case "118":
      return costaRica;
    case "31":
      return bulgaria;

    case "416":
      return jordan;
    case "44":
      return india;
    case "391":
      return trinidad;
    case "142":
      return guatemala;
    default:
      return null;
  }
};
