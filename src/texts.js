import {buildPath} from './constants';
/// Avatar-kuvien haku, älä välitä tästä
const giveRandomAvatar = (function() {
  let counter = {
    male: 1,
    female: 1,
  };
  return function(sex) {
    const root =
      sex === 'female'
        ? 'https://randomuser.me/api/portraits/women/'
        : 'https://randomuser.me/api/portraits/men/';
    if (!sex) sex = 'male';
    counter[sex] += 1;
    return `${root}${counter[sex]}.jpg`;
  };
})();

/// TEKSTIT ALKAA
export const screen0 = {
  body:
    'Tämä juttu perustuu todellisiin esimerkkeihin ja saattaa sisältää ahdistavaa materiaalia',
  startButton: 'Aloita',
};

export const screen1 = {
  body:
    'Olet viime viikolla twiitannut ajankohtaisesta aiheesta. Tunnettu yhteiskunnallinen vaikuttaja on siitä lähtien pommittanut sinua viesteillä. Yritit ohittaa asian olankohautuksella, mutta meno vain pahenee.',
  startButton: 'Aloita',
};

export const screen2 = {};

export const screen3 = {
  userpic: `${buildPath}img/kansanedustaja.jpg`,
  username: 'Vaikuttaja',
  keskustelu: [
    {
      oikeavasen: 'vasen',
      viesti:
        'Oletko miettinyt ehdotustani? Voitaisiin jatkaa juttua naamatusten ☕️🍆',
      viive: 0,
    },
    {
      oikeavasen: 'vasen',
      viesti:
        'Vaikuttaja: Ehkä törmätään siellä sun nurkilla, näyt aika usein käyvän kulmakahvilassasi…',
      viive: 1200,
    },
    {
      oikeavasen: 'vasen',
      viesti: 'Voisin selittää kunnolla, miksi olet väärässä!!',
      viive: 1200,
    },
    {
      oikeavasen: 'vasen',
      viesti: 'Mitäs sanot?',
      viive: 1000,
      button1: 'HYI EI',
      button2: 'Ei',
    },
    {
      oikeavasen: 'oikea',
      viesti: "Haistappa kuule paska! <span class='utf'>&#x1F595;</span> ",
      viesti2: 'Ei kiitos',
      viive: 0,
    },
    {
      oikeavasen: 'vasen',
      viesti:
        'Noh, eiköhän tapaaminen kuitenkin järjesty ihan luontevia reittejä. Näinkin Facebookissa, että olet illalla menossa keikalle, ehkä tullaan parin kaverin kanssa moikkaamaan… 😉😉😉',
      viesti2:
        "Excepteur sint occaecat cupidatat non proident.<span class='utf'>&#x1F335;</span>",
      viive: 1200,
    },
    {
      oikeavasen: 'none',
      kysymys:
        'Viestit alkavat olla jo uhkaavia. Pitäisikö asialle tehdä jotain?',
      button1: 'Kysyt apua somessa',
      button2: 'Paljastat nilkin puuhat',
      viive: 3000,
    },
  ],
};
export const screen4 = {
  // Näissä ensimmäinen arrayssa on "pieleen menevä" kirjoitus
  textAOption: [
    '#metoo toddd,',
    '#metoo todellakin, viime viikon "kohun" jälkeen en ole saanut hetken rauhaa ahdistavilta viesteiltä. Mitä tehdä?',
  ],
  textBOption: [
    'Monille tuttu 2vaikutt',
    'Monille tuttu @vaikuttaja on pommittanut minua viesteillä monta päivää. Voitko lopettaa, tämä menee jo häirinnän puolelle!',
  ],
};
export const screen5 = {
  keskustelu: [
    {
      // Tämä eka viesti ei  näy
      meta: '1: kansanedustajan vastauspostaus syytöksiin',
      viesti: '@abc valehtelee! ',
      userpic: `${buildPath}img/kansanedustaja.jpg`,
      username: 'kansanedustaja',
      userhandle: '@handle',
      viive: 0,
    },
    {
      viesti:
        ' Itsehän sitä kerjäsit, kun avasit keskustelun niin naurettavalla mielipiteellä.... #eikömitäänsaaenääsana',
      userpic: giveRandomAvatar('female'),
      username: 'vapaa111sana',
      userhandle: '@vapaa111sana',
      viive: 1200,
    },
    {
      viesti: 'Minä sulle häirinnät näytän läski huomiohuora',
      userpic: giveRandomAvatar('male'),
      username: 'perapera55',
      userhandle: '@perapera55',
      viive: 1200,
    },
    {
      viesti:
        'Joopa joo, ihanku @vaikuttajalla olisi aikaa lähetellä jollekin viestejä. Kuka edes on tämä ihminen ja mistä kohusta se puhuu?',
      userpic: giveRandomAvatar('male'),
      username: 's4nonpav44n',
      userhandle: '@s4nonpav44n',
      viive: 1200,
    },
    {
      viesti:
        '#metoo-lynkkaajat taas liikenteessä eiköhän porukalla näytetä tälle mitä tapahtuu kun yrittää vetää kunnon kansalaisen lokaan.',
      userpic: giveRandomAvatar('female'),
      username: 'sotur191818',
      userhandle: '@sotur191818',
      viive: 1200,
    },
    {
      viesti:
        'Ihan sama, ämmä. Puhe tulee jatkumaan ja sen leimaaminen häirinnäksi tulee lisäämään energiaa puheelle mikä on tärkeää.',
      userpic: giveRandomAvatar(),
      username: 'H44haa',
      userhandle: '@H44haa',
      viive: 1200,
    },
  ],
  notification: {
    oikeavasen: 'vasen',
    viesti: 'Miksi menit julkaisemaan tuollaista paskaa?',
    viive: 0,
    userpic: `${buildPath}img/kansanedustaja.jpg`,
    username: 'kansanedustaja tms',
  },
};
export const screen6 = {
  userpic: `${buildPath}img/kansanedustaja.jpg`,
  username: 'Vaikuttaja',
  notificationMessage:
    'Täällä on taas joku @käyttäjä-rukka kuvitellut liikaa itsestään. En ole ollut...',
  keskustelu: [
    {
      oikeavasen: 'vasen',
      viesti: 'Miksi menit kirjoittamaan tuommoista paskaa??',
      viive: 0,
    },
    {
      oikeavasen: 'vasen',
      viesti: 'Jos tämä on häirintää niin JO ON AIKOIHIN ELETTY 🤬',
      viive: 1200,
    },
    {
      oikeavasen: 'vasen',
      viesti:
        'Minulla on paljon sinua isommat tukijoukot ja verkostot! Jos tällainen mustamaalaaminen jatkuu tulet huomaamaan etten ole ainoa joka haluaa keskustella kanssasi… Ja turha haaveillakaan mistään työpaikasta niinkuin olit kuukausi sitten twiitannut… Maalittajavalehtelijoille ei ole sijaa tässä maassa!!!',
      viive: 1200,
    },
    {
      oikeavasen: 'vasen',
      viesti:
        'Sovitaanko, ettet julkaise enää mitään minuun liittyvää somessa ja tunnustat valeesi?',
      viive: 1000,
      button1: 'Jätä minut rauhaan!',
      button2: 'Ei sovita',
    },
    {
      oikeavasen: 'oikea',
      viesti: 'Jätä minut rauhaan',
      viesti2: 'Ei sovita',
      viive: 0,
    },
    {
      oikeavasen: 'vasen',
      viesti: 'Tämä ei jää tähän',
      viesti2: 'Tämä ei jää tähän´',
      viive: 1200,
    },
  ],
};
export const screen7 = {
  keskustelu: [
    {
      meta: '1: kansanedustajan vastauspostaus syytöksiin',
      viesti:
        'Täällä on taas joku @käyttäjä-rukka kuvitellut liikaa itsestään. En ole ollut häneen missään yhteydessä viime viikon twiittini jälkeen. Ja kuka tahansa voi itse käydä katsomassa, oliko se "häirintää". #mustamaalaus #maalittaminen',
      userpic: 'img/kansanedustaja.jpg',
      username: 'kansanedustaja',
      userhandle: '@handle',
      viive: 0,
    },
    {
      viesti: `Jo on taas joillakin ongelmat. Ei hyvää päivää @käyttäjä. Mitenkähän noille lumihiutaleille käy, kun kohtaavat elämässä ihan oikeita ongelmia?`,
      userpic: giveRandomAvatar('female'),
      username: '65kansanasialla',
      userhandle: '@65kansanasialla',
      viive: 1200,
    },
    {
      viesti:
        'Huhhuh tsemppiä @vaikuttaja, älä alistu näiden #metoo-huorien vallan alle. @käyttäjä lle tekisi hyvää nähdä, millaista elämä on muualla kuin täällä hyysäys-Suomessa…',
      userpic: giveRandomAvatar(),
      username: 'Hyysaaja00',
      userhandle: '@Hyysaaja00',
      viive: 1200,
    },
    {
      viesti: '@käyttäjä Jos ei kestä kuumuutta, mee vittuun tulen ääreltä.',
      userpic: giveRandomAvatar(),
      username: 'killer1poliisi666',
      userhandle: '@killer1poliisi666',
      viive: 1200,
    },
    {
      viesti: '@käyttäjä Oisit hiljaa ruma läski',
      userpic: giveRandomAvatar(),
      username: 'xdxd1234',
      userhandle: '@xdxd1234',
      viive: 1200,
    },
  ],
};
export const screen8 = {
  // Tää on se notifikaatiotulva. Media kohtaan voit laittaa "WhatsApp", "Messenger", "Messages", tai "Twitter".
  notifications: [
    {
      media: 'Gmail',
      userName: 'harri.korhonen222@email.com',
      message: 'Minä voin kyllä häiritä sinua, jos sitä kerran kaipaat...',
    },
    {
      media: 'Gmail',
      userName: 'seppo.suosio222@luukku.com',
      message: 'saatanan huomionhakuinen huijari helvetti hevosenkyr...',
    },
    {
      media: 'Gmail',
      userName: 'jantteri.joinonen@msn.com',
      message: 'jonkun pitäisi näyttää sulle mitä valehtelusta seuraa...',
    },
    {
      media: 'Messages',
      userName: '04444444',
      message: 'ODOTAPA VAIN KUN KÄVELET PIMEÄLLÄ KOTIIN',
    },
    {
      media: 'Messages',
      userName: '05555',
      message: 'Tiedän osoitteesi!!!',
    },
    {
      media: 'Messages',
      userName: '066666',
      message: 'VALEHTELIJAHUORA',
    },
    {
      media: 'Messages',
      userName: '9999',
      message:
        'Nytkö meni pupu pöksyyn kun et enää vastaa viesteihin TTwitterissä????',
    },
  ],
  // Tässä käyttäjä reagoi eli puolustatuu tai luovuttaa
  question: 'Mitä teet?',
  optionA: 'Nyt saa riittää!',
  optionB: 'Asiallisuus maan perii',
};
export const screen9 = {
  // Näissä ensimmäinen arrayssa on "pieleen menevä" kirjoitus
  textAOption: [
    'Kun kerroin ahdistel',
    'Kun kerroin minuun kohdistuneesta häirinnästä, uhkasi @vaikuttaja vaientaa minut lopullisesti ja niin näyttää käyvän, ahdisteluviestien määrä on moninkertaistunut hänen twiittinsä jälkeen. Seuraavaksi poliisi-ilmoitus!!!',
  ],
  textBOption: [
    'Jättäkää minut rauh',
    'Eiköhän tämä ole mennyt jo kyllin pitkälle. Jätän keskustelun osaltani tähän ja toivon, että tekin siirrytte jo muihin puuhiin.',
  ],
};
export const screen10 = {
  keskustelu: [
    {
      // Tämä eka viesti ei  näy
      meta: '',
      viesti: '',
      userpic: '',
      username: '',
      userhandle: '@handle',
      viive: 0,
    },
    {
      viesti:
        'Tämä julkinen roustaus on vastenmielistä! Metoo kampanja saa jo oksettavan sairaita piirteitä. Kertoo ihmisistä melko paljon, jos ei osaa käsitellä väittelytappiota muuten kun julkisesti mustamaalaamalla.',
      userpic: giveRandomAvatar('female'),
      username: 'Randomavatarsuomi9876',
      userhandle: '@Randomavatarsuomi9876',
      viive: 1200,
    },
    {
      viesti:
        'Just just, epätoivoinen yritys muuttaa tarinaa tässä vaiheessa @vaikuttaja on jo kertonut totuuden ja vielä yrität ristiinnaulita häntä? Häpeäisit',
      userpic: giveRandomAvatar('male'),
      username: 'itsenäinentotuu5_',
      userhandle: '@itsenäinentotuu5_',
      viive: 1200,
    },
    {
      viesti:
        'Kaikki ovat jo saaneet tietää, millainen kusettaja olet http://uutisia.fi/uutinen232999709',
      userpic: giveRandomAvatar('male'),
      username: 'suomenäijinäij4',
      userhandle: '@suomenäijinäij4',
      viive: 1200,
    },
    {
      viesti: 'lÄski idiootti',
      userpic: giveRandomAvatar('female'),
      username: 'jaritapioerkki5959',
      userhandle: '@jaritapioerkki5959',
      viive: 1200,
    },
    {
      viesti: `ei sua kukaan enää usko ruma ihmissyöpä menisit vaan saunan taakse omatoimisesti tai tulispa sulle muutama vieras. <div class='twitterlinkki'><div class='linkkikuva'><img src='${buildPath}img/kansanedustaja.jpg'></div><div class='linkkitekstit'><strong>Vaikuttaja vastaa somesyytöksiin: "En ole tehnyt mitään väärää</strong><br>Tunnettu vaikuttaja on ollut iltapäivän sairaslomalla somekohun vuoksi.</div>`,
      userpic: giveRandomAvatar(),
      username: 'faragni4545',
      userhandle: '@faragni4545',
      viive: 1200,
    },
  ],
};
export const screen11 = {
  otsikko: 'Vaikuttaja vastaa somesyytöksiin: "En ole tehnyt mitään väärää"',
  ingressi:
    'Tunnettu vaikuttaja on ollut iltapäivän sairaslomalla somekohun vuoksi. Hänen mukaansa kyse on väärinkäsityksestä. Onko #metoo mennyt liian pitkälle?',
};
export const screen12 = {
  // Uutisen kommentit
  keskustelu: [
    {
      viesti:
        'Näköjään tällä mustamaalaajalla on verotietojen perusteella tarvetta ylimääräiselle julkisuudelle. Mitähän työnantaja sanoo, kun kuulee tästä valehtelusta???=?',
      username: 'UutistenSeuraaja',
      viive: '1200',
      userpic: '',
      userhandle: '',
    },
    {
      viesti:
        'Vaikuttaja on mukava mies ja joutuu kärsimään aivan täysin turhaan. Jättäkää jo rauhaan!!',
      username: 'MarjaLissu65',
      viive: '1200',
      userpic: '',
      userhandle: '',
    },
    {
      viesti:
        'Toivoisin tämän henkilön kohdalle sitä todellista häirintää vaikka suuremman joukon puolesta pimeällä kadulla',
      username: 'Yksvaan',
      viive: '1200',
      userpic: '',
      userhandle: '',
    },
    {
      viesti:
        'Rikosoikeudelliseen vastuuseen pitää tällaisesta paskapuheesta joutua. Vaikuttaja, tsempit sulle ja kunnianloukkaussyytettä vaan kehiin!',
      username: 'EntPoliisi',
      viive: '1200',
      userhandle: '',
      userpic: '',
    },
    {
      viesti: 'Kuka tää @käyttäjä muka on 🤣🤣🤣🤣🤣 menis kotiinsa kasvamaan',
      username: 'peräkyläläinen',
      viive: '1200',
      userpic: '',
      userhandle: '',
    },
  ],
};
export const screen13 = {
  // puhelut
  puhelinnro1: 'Tuntematon numero',
  puhelinnro2: 'Tuntematon numero',
  puhelinnro3: 'Tuntematon numero',
};
export const screen14 = {}; // ei kaiketi mitään;
export const eiKayttoa = {
  // mentionsit
  keskustelu: [
    {
      viesti:
        'Vaikuttaja on KUNNON MIES!! @käyttäjä kaipaa opetusta mitä käy metoovalehtelijoille...',
      userpic: giveRandomAvatar('female'),
      username: 'itsenäinentotuu5_',
      userhandle: '@itsenäinentotuu5_',
      viive: 1200,
    },
    {
      viesti:
        'Nyt sitten sanotaan että vasta minämyös-kampanjan vuoksi on uskallettu puhua. Tiedoksi @käyttäjä se ei takaa oikeutta syyttää jokaikistä miestä kaikesta keksitystä',
      userpic: giveRandomAvatar(),
      username: 'ssmaailma4300',
      userhandle: '@ssmaailma4300',
      viive: 1200,
    },
    {
      viesti: '@käyttäjä Ime munaa huora sut maalitettiin kun hankit huomiot',
      userpic: giveRandomAvatar(),
      username: 'elovenako612612',
      userhandle: '@elovenako612612',
      viive: 1200,
    },
    {
      viesti: '@käyttäjä oo hiljaa ruma läski',
      userpic: giveRandomAvatar(),
      username: 'sotajabaxd888',
      userhandle: '@sotajabaxd888',
      viive: 1200,
    },
  ],
};
export const screen15 = {
  keskustelu: [
    {
      viesti:
        ' Mitä ihmettä nyt taas jengi?! Eiköhän tämä somemestaus jo riitä? Meitsi on sun puolella @käyttäjä, kukaan ei ansaitse tällaista myllytystä. Tsemppiä!!!',
      userpic: `${buildPath}/img/rikurantala.jpg`,
      username: 'Riku Rantala',
      userhandle: '@rikurantala',
      viive: 1200,
    },
    {
      viesti:
        ' Tätä tapahtuu ihan liikaa ja erityisesti naisille, häirintä lähtee lapasista aivan mitättömistä jutuista. JOKU ROTI TÄHÄN TOUHUUN! EI ANNETA ÖYKKÄREIDEN MÖYHÖTTÄÄ RAUHASSA. Jos näet jonkun joutuneen paskamyrskyyn, PUUTU PELIIN ja asetu uhrin puolelle!',
      userpic: `${buildPath}/img/tunnamilonoff.png`,
      username: 'Tunna Milonoff',
      userhandle: '@TunnaMilonoff',
      viive: 1200,
    },
    {
      viesti: ' Ei liikaa näy jäbiä näissä puuhissa. ',
      userpic: `${buildPath}/img/rikurantala.jpg`,
      username: 'Riku Rantala',
      userhandle: '@rikurantala',
      viive: 1200,
    },
    {
      viesti:
        ' Jos taas olet kohdannut häirintää (kaikki sympatiat tyypille täältä!), niin esim. näistä jutuista voi olla hyötyä: https://twitter.com/vehkoo/status/927846892154884096 ja https://www.journalisti.fi/artikkelit/2018/13/vihakampanja-kynnistyy-toimi-nin/',
      userpic: `${buildPath}/img/tunnamilonoff.png`,
      username: 'Tunna Milonoff',
      userhandle: '@TunnaMilonoff',
      viive: 1200,
    },
    {
      viesti: `
Jutun tekijät:

teksti: Mari Uusivirta
grafiikka: Annukka Palmén-Väisänen & Tapio Kantele
konseptisuunnittelu: Tapio kantele & Mari Uusivirta
tekninen toteutus: Tapio Kantele & Antti Saarenpää
Tuottaja: Kaisa Kirves
	    `,
      userpic: `${buildPath}/img/ylelogo.png`,
      username: 'Yleisradio',
      userhandle: '@Yleisradio',
      viive: 1200,
    },
  ],
};
