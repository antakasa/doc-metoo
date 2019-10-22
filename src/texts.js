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
export const cover = {
  header: 'Miltä nettihäirintä tuntuu?',
  body: 'Pelaa Docventuresin Angry Boysia!',
  startButton: 'Aloita',
};
export const screen0 = {
  body:
    'Tämä juttu perustuu todellisiin esimerkkeihin ja saattaa sisältää ahdistavaa materiaalia.',
  startButton: 'Eteenpäin',
};

export const screen1 = {
  body:
    'Olet viime viikolla twiitannut ajankohtaisesta aiheesta. Tunnettu yhteiskunnallinen vaikuttaja on siitä lähtien pommittanut sinua viesteillä. Yritit ohittaa asian olankohautuksella, mutta meno vain pahenee.',
  startButton: 'Eteenpäin',
};

export const screen2 = {};

export const screen3 = {
  userpic: `${buildPath}img/kansanedustaja_pyorea.jpg`,
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
        'Ehkä törmätään siellä sun nurkilla, näyt aika usein käyvän kulmakahvilassasi…',
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
        'Viestit alkavat vähitellen tuntua uhkaavilta. Mitä teet asialle?',
      button1: 'Kysyn apua somessa',
      button2: 'Paljastan nilkin puuhat',
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
      userpic: `${buildPath}img/kansanedustaja_pyorea.jpg`,
      username: 'vaikuttaja',
      userhandle: '@vaikuttaja',
      viive: 0,
    },
    {
      viesti:
        ' Itsehän sitä kerjäsit, kun avasit keskustelun niin naurettavalla mielipiteellä.... #eikömitäänsaaenääsanoa',
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
        'Joopa joo, ihanku @vaikuttaja lla olisi aikaa lähetellä jollekin viestejä. Kuka edes on tämä ihminen ja mistä kohusta se puhuu?',
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
    username: 'Vaikuttaja',
  },
};
export const screen6 = {
  userpic: `${buildPath}img/kansanedustaja_pyorea.jpg`,
  username: 'Vaikuttaja',
  userhandle: '@vaikuttaja',
  notificationMessage:
    'Täällä on taas joku @kayttaja rukka kuvitellut liikaa itsestään. En ole ollut...',
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
      button1: 'Jätä mut rauhaan!',
      button2: 'Ei!',
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
        'Täällä on taas joku @käyttajä parka kuvitellut liikaa itsestään. En ole ollut häneen missään yhteydessä viime viikon twiittini jälkeen. Ja kuka tahansa voi itse käydä katsomassa, oliko se "häirintää". #mustamaalaus #maalittaminen',
      userpic: `${buildPath}img/kansanedustaja_pyorea.jpg`,
      username: 'vaikuttaja',
      userhandle: '@handle',
      viive: 0,
    },
    {
      viesti: `Jo on taas joillakin ongelmat. Ei hyvää päivää @kayttajäa. Mitenkähän noille lumihiutaleille käy, kun kohtaavat elämässä ihan oikeita ongelmia?`,
      userpic: giveRandomAvatar('female'),
      username: '65kansanasialla',
      userhandle: '@65kansanasialla',
      viive: 1200,
    },
    {
      viesti:
        'Huhhuh tsemppiä @vaikuttaja, älä alistu näiden #metoo-huorien vallan alle. @kayttaja lle tekisi hyvää nähdä, millaista elämä on muualla kuin täällä hyysäys-Suomessa…',
      userpic: giveRandomAvatar(),
      username: 'Hyysaaja00',
      userhandle: '@Hyysaaja00',
      viive: 1200,
    },
    {
      viesti:
        '@kayttaja Jos ei kestä kuumuutta, voi mennä vittuun tulen ääreltä.',
      userpic: giveRandomAvatar(),
      username: 'killer1poliisi666',
      userhandle: '@killer1poliisi666',
      viive: 1200,
    },
    {
      viesti: '@kayttaja Oisit hiljaa ruma läski',
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
      userName: 'seppo.suosio111@luukku.com',
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
      userName: '050555',
      message: 'Tiedän osoitteesi!!!',
    },
    {
      media: 'Messages',
      userName: '0466666',
      message: 'VALEHTELIJAHUORA',
    },
    {
      media: 'Messages',
      userName: '0509999',
      message:
        'Nytkö meni pupu pöksyyn kun et enää vastaa viesteihin TTwitterissä????',
    },
  ],
  // Tässä käyttäjä reagoi eli puolustatuu tai luovuttaa
  question: 'Mitä teet?',
  optionA: 'Nyt saa riittää!',
  optionB: 'Asiallisuus maan perii!',
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
      viesti: 'Kaikki ovat jo saaneet tietää, millainen kusettaja olet',
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
    'Tunnettu vaikuttaja on ollut iltapäivän sairaslomalla somekohun vuoksi. Hänen mukaansa kyse on väärinkäsityksestä. Vaikuttaja on saanut tukea monilta julkisuuden henkilöiltä, joiden mukaan #metoo-liike syyllistää miehiä.',
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
      viesti: 'Kuka tää @kayttaja muka on 🤣🤣🤣🤣🤣 menis kotiinsa kasvamaan',
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
  puhelinnro2: '04123456',
  puhelinnro3: 'Tuntematon numero',
};
export const screen14 = {}; // ei kaiketi mitään;
export const eiKayttoa = {
  // mentionsit
  keskustelu: [
    {
      viesti:
        'Vaikuttaja on KUNNON MIES!! @kayttaja kaipaa opetusta mitä käy metoovalehtelijoille...',
      userpic: giveRandomAvatar('female'),
      username: 'itsenäinentotuu5_',
      userhandle: '@itsenäinentotuu5_',
      viive: 1200,
    },
    {
      viesti:
        'Nyt sitten sanotaan että vasta minämyös-kampanjan vuoksi on uskallettu puhua. Tiedoksi @kayttaja se ei takaa oikeutta syyttää jokaikistä miestä kaikesta keksitystä',
      userpic: giveRandomAvatar(),
      username: 'ssmaailma4300',
      userhandle: '@ssmaailma4300',
      viive: 1200,
    },
    {
      viesti: '@kayttaja Ime munaa huora sut maalitettiin kun hankit huomiot',
      userpic: giveRandomAvatar(),
      username: 'elovenako612612',
      userhandle: '@elovenako612612',
      viive: 1200,
    },
    {
      viesti: '@kayttaja oo hiljaa ruma läski',
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
      viesti: ' Nyt vihellys pilliin ja peli poikki!',
      userpic: `${buildPath}img/rikurantala.jpg`,
      username: 'Riku Rantala',
      userhandle: '@rikurantala',
      viive: 1200,
    },
    {
      viesti:
        ' AIVAN liian harvoin puutumme häirintään. Aivan. Liian. Harvoin. ',
      userpic: `${buildPath}img/rikurantala.jpg`,
      username: 'Riku Rantala',
      userhandle: '@rikurantala',
      viive: 1200,
    },
    {
      viesti:
        ' Tätä tapahtuu ihan liikaa ja erityisesti naisille, häirintä lähtee lapasista aivan mitättömistä jutuista. Ja miksi me ei puututa? Ei ole aikaa, ei koske juuri nyt juuri minua, ulkopuolelta ei tajua koko ongelman laajuutta, eikä jaksaisi itse joutua suohon. Sellaisiako me ollaan? ',
      userpic: `${buildPath}img/tunnamilonoff.png`,
      username: 'Tunna Milonoff',
      userhandle: '@TunnaMilonoff',
      viive: 1200,
    },
    {
      viesti:
        ' Osallistut #metoohon ehkä parhaiten, kun puolustat häirinnän kohteeksi joutuneita ihmisiä – myös täällä somen rinnakkaistodellisuudessa! Jos taas olet kohdannut häirintää (kaikki sympatiat täältä!), niin esim. näistä jutuista voi olla hyötyä: <a href="https://www.journalisti.fi/artikkelit/2018/13/vihakampanja-kynnistyy-toimi-nin/">https://www.journalisti.fi/artikkelit/2018/13/vihakampanja-kynnistyy-toimi-nin/</a>',
      userpic: `${buildPath}img/tunnamilonoff.png`,
      username: 'Tunna Milonoff',
      userhandle: '@TunnaMilonoff',
      viive: 1200,
    },
    {
      viesti: `
teksti: Mari Uusivirta
grafiikka: Tapio Kantele & Annukka Palmén-Väisänen
toteutus: Tapio Kantele, Antti Saarenpää & Mari Uusivirta
tuottaja: Kaisa Kirves
	    `,
      userpic: `${buildPath}img/ylelogo.png`,
      username: 'Yleisradio',
      userhandle: '@Yleisradio',
      viive: 1200,
    },
  ],
};
