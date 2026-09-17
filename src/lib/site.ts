export const company = {
  name: "Tradíció",
  legalName: "Tradíció nyílászáró szalon és beltéri ajtó stúdió",
  short: "Tradíció Miskolc",
  founded: 2004,
  tagline: "Nyílászáró szalon és beltéri ajtó stúdió",
  addressLine: "Miskolc, 3527 Fonoda utca 2.",
  addressExtra: "Parketta Technika Udvar",
  hoursWeekday: "Hétfő–Péntek: 8:00 – 16:00",
  hoursSaturday: "Szombat: 8:00 – 12:00",
  mapEmbed:
    "https://maps.google.com/maps?q=Miskolc%203527%20Fonoda%20utca%202&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Miskolc+3527+Fonoda+utca+2",
};

export const phones = [
  { label: "Tel.", value: "30/685 4129", href: "tel:+36306854129" },
  { label: "Tel.", value: "30/685 4127", href: "tel:+36306854127" },
  { label: "Tel.", value: "46/320 055", href: "tel:+3646320055" },
];

export const emails = [
  "info@tradicioablak.hu",
  "szabolcs@tradicioablak.hu",
  "palko@tradicioablak.hu",
  "gabortradicioablak@gmail.com",
];

export const nav = [
  { href: "/", label: "Főoldal" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/termekek", label: "Termékek" },
  { href: "/akciok", label: "Akciók" },
  { href: "/referenciak", label: "Referenciák" },
  { href: "/kapcsolat", label: "Kapcsolat" },
] as const;

export const megaProducts = [
  {
    name: "Ablakok",
    href: "/termekek?kat=premium",
    image: "/navbar/nav_ablak.jpeg",
  },
  {
    name: "Ajtók",
    href: "/termekek?kat=erkado",
    image: "/navbar/nav_ajto.jpeg",
  },
  {
    name: "Ajtópanelek",
    href: "/termekek?kat=door-panels",
    image: "/navbar/nav_ajtopanelek.jpeg",
  },
  {
    name: "Fólia",
    href: "/termekek?kat=kommerling",
    image: "/navbar/nav_folia.jpeg",
  },
  {
    name: "Kilincsek",
    href: "/termekek?kat=kilincsek",
    image: "/navbar/nav_kilincs.jpeg",
  },
] as const;

export const homeIntro = {
  title: "Tradíció nyílászáró szalon és beltéri ajtó stúdió",
  paragraphs: [
    "Cégünk már 2004 óta kínálja termékeit és nyújt szolgáltatást a lakossági vásárlók, és a mikro- és középvállalkozások felé.",
    "Tevékenységi körünket folyamatosan bővítjük, hogy minél teljesebb és komplexebb szolgáltatást tudjunk nyújtani, a meglévő- és a leendő partnereink számára.",
    "Fő tevékenységünk a műanyag nyílászáró- és a beltéri ajtó forgalmazása, ami kiegészül a beépítéshez szükséges segédanyagok értékesítésével.",
  ],
};

export const about = {
  intro: [
    "Cégünk már 2004 óta kínálja termékeit és nyújt szolgáltatást a lakossági vásárlók, és a mikro- és középvállalkozások felé.",
    "Tevékenységi körünket folyamatosan bővítjük, hogy minél teljesebb és komplexebb szolgáltatást tudjunk nyújtani, a meglévő- és a leendő partnereink számára.",
    "Fő tevékenységünk a műanyag nyílászáró- és a beltéri ajtó forgalmazása.",
    "Ez a tevékenységi formánk kiegészült a beépítéshez szükséges segédanyagok értékesítésével is.",
  ],
  services: [
    "Nagy- és Kis- Kereskedelmi értékesítés",
    "Műanyag Nyílászárok és Tartozékok értékesítése",
    "Beltéri ajtók értékesítése",
    "Vegyi áruk értékesítése",
  ],
  activities: [
    "4673 Fa-, építőanyag-, szaniteráru-nagykereskedelem",
    "4647 Bútor, szőnyeg, világítóberendezés nagykereskedelme",
    "4759 Bútor, világítási eszköz, egyéb háztartási cikk kiskereskedelme",
    "4649 Egyéb háztartási cikk nagykereskedelme m.n.s.",
    "4399 Egyéb speciális szaképítés m.n.s.",
    "4332 Épületasztalos-szerkezet szerelése",
    "4674 Fémáru, szerelvény, fűtési berendezés nagykereskedelme",
    "8230 Konferencia, kereskedelmi bemutató szervezése",
    "8299 M.n.s. egyéb kiegészítő üzleti szolgáltatás",
    "7490 M.n.s. egyéb szakmai, tudományos, műszaki tevékenység",
    "4753 Takaró, szőnyeg, fal-, padlóburkoló kiskereskedelme",
    "4752 Vasáru-, festék-, üveg-kiskereskedelem",
    "4690 Vegyestermékkörű nagykereskedelem",
  ],
};

export const cookieCopy = {
  message:
    "Ez az oldal cookie-kat használ. A böngészés folytatásával jóváhagyja, hogy cookie-kat használjunk.",
  dismiss: "Értettem",
  link: "Adatkezelési tájékoztató",
};

export const footerCopy =
  "Minden jog fenntartva – Tradíció nyílászáró szalon és beltéri ajtó stúdió";
