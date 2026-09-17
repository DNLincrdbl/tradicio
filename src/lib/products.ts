export type CategoryId =
  | "erkado"
  | "kommerling"
  | "premium"
  | "door-panels"
  | "nagyker"
  | "kilincsek";

export type Spec = { label: string; value: string };

export type Product = {
  slug: string
  name: string
  category: CategoryId
  brand: string
  tag?: string
  excerpt: string
  description: string[]
  models?: string[]
  specs?: Spec[]
  extras?: string[]
  image: string
  catalogUrl: string
  catalogLabel: string
  featured?: boolean
  promo?: boolean
};

export const categories: {
  id: CategoryId
  title: string
  eyebrow: string
  description: string
  image: string
}[] = [
  {
    id: "erkado",
    title: "Erkado – Beltéri ajtók",
    eyebrow: "Beltéri ajtók",
    description:
      "Az Erkado 2026-os magyar katalógusa: STILE keretes, lakkozott, lemezelt, loft üvegajtók, intarziák és beltéri bejárati ajtók.",
    image: "/images/brand-erkado.jpg",
  },
  {
    id: "kommerling",
    title: "Kömmerling",
    eyebrow: "Nyílászáró profil",
    description:
      "Kömmerling PX fólia: hosszabb élettartam, erősebb UV-védelem és jobb színtartóság a műanyag nyílászárókon.",
    image: "/images/products/kommerling-px.jpg",
  },
  {
    id: "premium",
    title: "Prémium ablakrendszerek",
    eyebrow: "Ablak és bejárati ajtó",
    description:
      "Német alapanyagú Prémium 76MD, 88MD, ALU és HST rendszerek, bejárati ajtók, HPL és PVC ajtóbetétek.",
    image: "/images/brand-premium.jpg",
  },
  {
    id: "door-panels",
    title: "Door Panels",
    eyebrow: "Ajtópanelek",
    description: "Door Panels panel katalógus – bejárati ajtóbetétek és panelek.",
    image: "/images/brand-doorpanels.jpg",
  },
  {
    id: "kilincsek",
    title: "Kilincsek",
    eyebrow: "Vasalat",
    description:
      "Bussare kilincskatalógusok és hosszú címes kilincskollekció – STRICTO, CLASSICO, FINO.",
    image: "/images/products/hosszu-cimes.jpg",
  },
  {
    id: "nagyker",
    title: "Nagykereskedelem",
    eyebrow: "Segédanyagok",
    description:
      "Dr. Schenk, TKK, Tytan, extra párkány és tokrögzítő akciók, márvány és gránit kőpárkányok.",
    image: "/images/wholesale/termekek.jpg",
  },
];

const ERKADO_2026 =
  "https://tradicioablak.hu/wp-content/uploads/2020/08/erkado-2026-hu-belteri.pdf";
const ERKADO_2025 =
  "https://tradicioablak.hu/wp-content/uploads/2020/08/katalog-dw-2025ia-hu-www-20052025.pdf";
const PREMIUM_2025 =
  "https://tradicioablak.hu/wp-content/uploads/2018/09/premium_katalogus_web_2025.pdf";
const PREMIUM_DOORS =
  "https://tradicioablak.hu/wp-content/uploads/2018/09/premium-bejarati-ajtok-beta-ak-24v01-20240402-1-1.pdf";
const PREMIUM_HPL =
  "https://tradicioablak.hu/wp-content/uploads/2018/09/premium_ablakrendszerek_hpl_ajtobetet_katalogus.pdf";
const PREMIUM_PVC =
  "https://tradicioablak.hu/wp-content/uploads/2018/09/premium_ablakrendszerek_pvc_ajtobetet_katalogus.pdf";
const BUSSARE_A3 =
  "https://tradicioablak.hu/wp-content/uploads/2020/08/09-2024_bussare-a3.pdf";
const BUSSARE_CAT =
  "https://tradicioablak.hu/wp-content/uploads/2020/08/katalog_bussare_2024.pdf";
const DOOR_PANELS =
  "https://tradicioablak.hu/wp-content/uploads/2019/02/door_2022_01.pdf";

export const catalogs = [
  {
    group: "Erkado – Beltéri ajtók",
    items: [
      { title: "Beltéri ajtó – katalógus 2026 / Magyar /", href: ERKADO_2026 },
      { title: "Beltéri ajtó – katalógus 2025 / Magyar /", href: ERKADO_2025 },
    ],
  },
  {
    group: "Kilincsek",
    items: [
      { title: "Bussare – Kilincsek 2024", href: BUSSARE_A3 },
      { title: "Bussare – Katalógus – Kilincsek 2024", href: BUSSARE_CAT },
      { title: "Hosszú Címes – Kilincsek", href: "/catalogs/hosszu-cimes.pdf" },
    ],
  },
  {
    group: "Prémium ablakrendszerek",
    items: [
      { title: "Prémium katalógus 2025 ÚJ", href: PREMIUM_2025 },
      { title: "PRÉMIUM Bejárati ajtók 2024", href: PREMIUM_DOORS },
      {
        title: "Prémium Ablakrendszerek HPL ajtóbetét katalógus 2025 ÚJ",
        href: PREMIUM_HPL,
      },
      {
        title: "Prémium Ablakrendszerek PVC ajtóbetét katalógus 2025 ÚJ",
        href: PREMIUM_PVC,
      },
    ],
  },
  {
    group: "Kömmerling",
    items: [{ title: "Kömmerling PX fólia", href: "/catalogs/kommerling-px.pdf" }],
  },
  {
    group: "Door Panels",
    items: [{ title: "Panel katalógus 2022", href: DOOR_PANELS }],
  },
];

export const products: Product[] = [
  {
    slug: "werbena",
    name: "Werbena",
    category: "erkado",
    brand: "Erkado",
    tag: "Újdonság · TOP 9",
    excerpt:
      "Beltéri keretszerkezetes STILE ajtószárnyak falcos és falc nélküli kivitelben.",
    description: [
      "A Werbena az Erkado 2026-os katalógusának újdonsága: STILE keretes szerkezetű beltéri ajtószárny falcos és falc nélküli kivitelben.",
      "WERBENA 1 ZSÁLYA ST CPL dekorban, QUANTA FIT fekete matt kilinccsel.",
      "WERBENA 1, 2, 3: ferde léc 16 mm-es lemez mellett. WERBENA 4–9: mély ferde léc az üveg mellett. A 4, 5, 6 modelleknél a panel 3 mm vastag éle mindig fekete színű.",
    ],
    models: [
      "WERBENA 1",
      "WERBENA 2",
      "WERBENA 3",
      "WERBENA 4",
      "WERBENA 5",
      "WERBENA 6",
      "WERBENA 7",
      "WERBENA 8",
      "WERBENA 9",
    ],
    specs: [
      { label: "Szerkezet", value: "STILE keretes, falcos vagy falc nélküli" },
      {
        label: "Panel",
        value: "1–3: 16 mm MDF ferde léccel · 4–6: 3 mm HDF üvegre ragasztva",
      },
      { label: "Dekor példa", value: "Zsálya ST CPL" },
      { label: "Katalógus", value: "2026 · 6–7. oldal" },
    ],
    extras: [
      "Három ezüst 2-csapos pánt a falcos szárnyban, felár ellenében fekete",
      "Rejtett pántok a falc nélküli szárnyban (ezüst, opcionálisan fekete, arany, fehér)",
      "Ajtótok-szélesítő panelek, korona és pilaszterek",
      "Saját kezű lerövidítés lehetősége",
    ],
    image: "/images/products/werbena.jpg",
    catalogUrl: "/catalogs/werbena.pdf",
    catalogLabel: "Werbena adatlap (PDF)",
    featured: true,
    promo: true,
  },
  {
    slug: "laurencja",
    name: "Laurencja",
    category: "erkado",
    brand: "Erkado",
    tag: "TOP 9",
    excerpt:
      "STILE keretes beltéri ajtószárnyak – tiszta vonalak, opcionális fekete VSG üvegezés.",
    description: [
      "LAURENCJA 1 FEHÉR ST CPL dekorban, fekete VSG üvegezéssel, QUANTA FIT fekete matt kilinccsel.",
      "Beltéri keretszerkezetes STILE ajtószárnyak falcos és falc nélküli kivitelben.",
    ],
    models: [
      "LAURENCJA 1",
      "LAURENCJA 2",
      "LAURENCJA 3",
      "LAURENCJA 4",
      "LAURENCJA 5",
      "LAURENCJA 6",
    ],
    specs: [
      { label: "Szerkezet", value: "STILE keretes, falcos vagy falc nélküli" },
      { label: "Dekor példa", value: "Fehér ST CPL + fekete VSG" },
      { label: "Katalógus", value: "2026 · 8–9. oldal" },
    ],
    image: "/images/products/laurencja.jpg",
    catalogUrl: "/catalogs/laurencja.pdf",
    catalogLabel: "Laurencja adatlap (PDF)",
    featured: true,
    promo: true,
  },
  {
    slug: "frezja",
    name: "Frezja",
    category: "erkado",
    brand: "Erkado",
    tag: "TOP 9",
    excerpt:
      "STILE keretes kollekció tükör-, üveg- és fekete élű panelváltozatokkal.",
    description: [
      "FREZJA 9 CAPPUCCINO ST CPL dekorban, BELLA SLIM fényes sárgaréz kilinccsel.",
      "FREZJA 7 csak tükörrel rendelkező modell: a tükör a zsanérok oldalán található, a másik oldal a megfelelő dekorral borított.",
      "FREZJA 8: 8 mm vastag üveg, alsó szellőzőnyílással. A 2, 4, 6, 9 modelleknél a panel 3 mm vastag éle mindig fekete.",
    ],
    models: [
      "FREZJA 1",
      "FREZJA 2",
      "FREZJA 3",
      "FREZJA 4",
      "FREZJA 5",
      "FREZJA 6",
      "FREZJA 7",
      "FREZJA 8",
      "FREZJA 9",
    ],
    specs: [
      { label: "Szerkezet", value: "STILE keretes, falcos vagy falc nélküli" },
      { label: "Különlegesség", value: "Tükör modell, 8 mm üveg, fekete panelél" },
      { label: "Katalógus", value: "2026 · 10–11. oldal" },
    ],
    image: "/images/products/frezja.jpg",
    catalogUrl: "/catalogs/frezja.pdf",
    catalogLabel: "Frezja adatlap (PDF)",
    featured: true,
    promo: true,
  },
  {
    slug: "nemezja",
    name: "Nemezja",
    category: "erkado",
    brand: "Erkado",
    tag: "Újdonság · TOP 9",
    excerpt: "Fazettált és egyenes panelű STILE ajtók – széles modellválaszték.",
    description: [
      "NEMEZJA 14 ANTRACIT ST CPL dekorban, QUANTA FIT fekete matt kilinccsel.",
      "Újdonság a 2026-os katalógusban. Fazettált panel: NEMEZJA 16. Egyenes panel: NEMEZJA 6.",
    ],
    models: [
      "NEMEZJA 4",
      "NEMEZJA 6",
      "NEMEZJA 7",
      "NEMEZJA 8",
      "NEMEZJA 9",
      "NEMEZJA 10",
      "NEMEZJA 11",
      "NEMEZJA 12",
      "NEMEZJA 14",
      "NEMEZJA 15",
      "NEMEZJA 16",
    ],
    specs: [
      { label: "Szerkezet", value: "STILE keretes, falcos vagy falc nélküli" },
      { label: "Panel", value: "Fazettált vagy egyenes" },
      { label: "Katalógus", value: "2026 · 14–15. oldal" },
    ],
    image: "/images/products/nemezja.jpg",
    catalogUrl: "/catalogs/nemezja.pdf",
    catalogLabel: "Nemezja adatlap (PDF)",
    featured: true,
    promo: true,
  },
  {
    slug: "amarylis",
    name: "Amarylis",
    category: "erkado",
    brand: "Erkado",
    tag: "TOP 9",
    excerpt:
      "Keretes STILE ajtók ragasztott osztóléccel és opcionális relief dekorüveggel.",
    description: [
      "AMARYLIS 2 KŐSZÜRKE ST CPL dekorban, relief dekorüveggel, BELLA SLIM fényes sárgaréz kilinccsel, dekoratív koronával és pilaszterekkel.",
      "Kétoldalas, ragasztott osztóléc, 25 mm széles – az ajtószárny színében vagy fekete.",
    ],
    models: [
      "AMARYLIS 1",
      "AMARYLIS 2",
      "AMARYLIS 3",
      "AMARYLIS 4",
      "AMARYLIS 5",
      "AMARYLIS 6",
      "AMARYLIS 7",
      "AMARYLIS 8",
      "AMARYLIS 9",
    ],
    specs: [
      { label: "Szerkezet", value: "STILE keretes technológia" },
      { label: "Osztóléc", value: "Kétoldalas, 25 mm, szárnyszín vagy fekete" },
      {
        label: "Üvegezés",
        value: "4 mm edzett tejüveg / átlátszó, felár: VSG 221, relief, point",
      },
      { label: "Katalógus", value: "2026 · 18–19. oldal" },
    ],
    extras: [
      "Opcionálisan az osztóléc dekorja módosítható FEKETE ST CPL színre",
      "Üvegezés oldala megváltoztatható REWERS-re",
      "Korona, pilaszterek, ajtótok-szélesítők",
    ],
    image: "/images/products/amarylis.jpg",
    catalogUrl: "/catalogs/amarylis.pdf",
    catalogLabel: "Amarylis adatlap (PDF)",
    featured: true,
    promo: true,
  },
  {
    slug: "magnolia",
    name: "Magnolia",
    category: "erkado",
    brand: "Erkado",
    tag: "TOP 9",
    excerpt: "Klasszikus STILE vonal tölgy Premium dekorral és nyolc modellel.",
    description: [
      "MAGNOLIA 1 TÖLGY PREMIUM dekorban, TOPAZ inox kilinccsel.",
      "Beltéri keretszerkezetes STILE ajtószárnyak falcos és falc nélküli kivitelben.",
    ],
    models: [
      "MAGNOLIA 1",
      "MAGNOLIA 2",
      "MAGNOLIA 3",
      "MAGNOLIA 4",
      "MAGNOLIA 5",
      "MAGNOLIA 6",
      "MAGNOLIA 7",
      "MAGNOLIA 8",
    ],
    specs: [
      { label: "Szerkezet", value: "STILE keretes, falcos vagy falc nélküli" },
      { label: "Dekor példa", value: "Tölgy Premium" },
      { label: "Katalógus", value: "2026 · 22–23. oldal" },
    ],
    image: "/images/products/magnolia.jpg",
    catalogUrl: "/catalogs/magnolia.pdf",
    catalogLabel: "Magnolia adatlap (PDF)",
    featured: true,
    promo: true,
  },
  {
    slug: "daglezja",
    name: "Daglezja",
    category: "erkado",
    brand: "Erkado",
    tag: "TOP 9",
    excerpt: "Széles keresztlécű STILE ajtók – antracit ST CPL, CUBE kilincs.",
    description: [
      "DAGLEZJA 1 ANTRACIT ST CPL dekorban, CUBE fekete matt kilinccsel.",
      "4 mm vastag HDF lemezből készült betétek GREKO, CPL vagy PREMIUM furnérral, nagyon széles keresztléccel.",
    ],
    models: [
      "DAGLEZJA 1",
      "DAGLEZJA 2",
      "DAGLEZJA 3",
      "DAGLEZJA 4",
      "DAGLEZJA 5",
      "DAGLEZJA 6",
      "DAGLEZJA 7",
      "DAGLEZJA 8",
    ],
    specs: [
      { label: "Szerkezet", value: "STILE keretes, falcos vagy falc nélküli" },
      { label: "Betét", value: "4 mm HDF · GREKO / CPL / PREMIUM" },
      { label: "Katalógus", value: "2026 · 40–41. oldal" },
    ],
    extras: [
      "Rekuperációs rés sztenderd vagy mini, szellőzési alulvágás",
      "Fautánzatú műanyag vagy fém szellőzők",
      "VSG 221 ragasztott üveg",
    ],
    image: "/images/products/daglezja.jpg",
    catalogUrl: "/catalogs/daglezja.pdf",
    catalogLabel: "Daglezja adatlap (PDF)",
    featured: true,
    promo: true,
  },
  {
    slug: "altamura",
    name: "Altamura",
    category: "erkado",
    brand: "Erkado",
    tag: "TOP 9",
    excerpt:
      "Lemezelt ajtószárny falcos, falcnélküli és fordított kivitelben, kerek ablakkal.",
    description: [
      "ALTAMURA 1 RETRO CPL dekorban, QUANTA FIT fekete matt kilinccsel, fekete matt kerek ablakkal.",
      "Beltéri ajtószárnyak falcos, falcnélküli és fordított kivitelben. Belső MDF keret, két HDF lappal borítva, stabilizáló méhsejt betéttel.",
    ],
    models: [
      "ALTAMURA 1",
      "ALTAMURA 2",
      "ALTAMURA 3",
      "ALTAMURA 4",
      "ALTAMURA 5",
      "ALTAMURA 6",
      "ALTAMURA 7",
      "ALTAMURA 8",
    ],
    specs: [
      {
        label: "Szerkezet",
        value: "Falcos, fordított vagy falc nélküli · MDF keret + HDF",
      },
      { label: "Betét", value: "Méhsejt, felár ellenében teljes lemez" },
      {
        label: "Ablak",
        value: "Kerek rozsdamentes: belső 235 mm, külső 350 mm",
      },
      { label: "Katalógus", value: "2026 · 112–113. oldal" },
    ],
    extras: [
      "Alsó, középső és rácsos rozsdamentes acél panelek",
      "Automata küszöb, mágneszár, fekete pántok",
      "LUX intarzia az ALTAMURA 1 modellben",
      "Szabvány PL2112: +15% a szárny felár előtti árához",
    ],
    image: "/images/products/altamura.jpg",
    catalogUrl: "/catalogs/altamura.pdf",
    catalogLabel: "Altamura adatlap (PDF)",
    featured: true,
    promo: true,
  },
  {
    slug: "altamura-intarzia",
    name: "Altamura intarziák",
    category: "erkado",
    brand: "Erkado",
    tag: "TOP 9 · Újdonság",
    excerpt:
      "Dekoratív LUX intarzia, síkban marva a furnér felületével – 8 vagy 50 mm.",
    description: [
      "Az intarziák az ajtószárny mindkét oldalán elhelyezve és síkban marva annak felületével. Szélesség: 8 mm vagy 50 mm.",
      "LUX színek: kefélt acél LUX 100, fekete LUX 200, tölgy LUX 300, kefélt arany LUX 400, kefélt réz LUX 500, piros LUX 600, kék LUX 700, olíva LUX 800.",
      "Alkalmazható: UNO PREMIUM furnér, ALTAMURA 1, FORTECA RC2 és RC3, HERSE SET EKO 30 dB / 32 dB / AKUSTIC 39 dB, LEDA EI30 és EI60.",
    ],
    models: [
      "LUX 403",
      "LUX 404",
      "LUX 407",
      "LUX 412",
      "LUX 413",
      "LUX 414",
      "LUX 416",
      "LUX 417",
      "LUX 418",
      "LUX 419",
      "LUX 420",
      "LUX 421",
    ],
    specs: [
      { label: "Típus", value: "Síkbamarott dekoratív betét" },
      { label: "Szélesség", value: "8 mm vagy 50 mm" },
      { label: "Katalógus", value: "2026 · 106–107. oldal" },
    ],
    image: "/images/products/altamura-intarzia.jpg",
    catalogUrl: "/catalogs/altamura-intarzia.pdf",
    catalogLabel: "Intarzia adatlap (PDF)",
    featured: true,
    promo: true,
  },
  {
    slug: "jasmin",
    name: "Jasmin",
    category: "erkado",
    brand: "Erkado",
    tag: "Újdonság",
    excerpt: "2026-os újdonság – cappuccino ST CPL, BELLA SLIM kilincs.",
    description: [
      "JASMIN 3 CAPPUCCINO ST CPL dekorban, BELLA SLIM fekete matt kilinccsel.",
      "Beltéri keretszerkezetes STILE ajtószárnyak. A panel 3 mm vastag éle mindig fekete színű. Mintaoltalom alatt.",
    ],
    models: [
      "JASMIN 1",
      "JASMIN 2",
      "JASMIN 3",
      "JASMIN 4",
      "JASMIN 5",
      "JASMIN 6",
      "JASMIN 7",
      "JASMIN 8",
    ],
    specs: [
      { label: "Szerkezet", value: "STILE keretes" },
      { label: "Katalógus", value: "2026 · 12. oldal" },
    ],
    image: "/images/collections/jasmin.jpg",
    catalogUrl: ERKADO_2026,
    catalogLabel: "Erkado katalógus 2026 (PDF)",
    featured: true,
  },
  {
    slug: "peonia",
    name: "Peonia",
    category: "erkado",
    brand: "Erkado",
    excerpt: "STILE ajtók 25 mm-es osztóléccel, tejüveges betéttel.",
    description: [
      "PEONIA 2 ZSÁLYA ST CPL dekorban, tejüveges betéttel, BELLA SLIM fényes sárgaréz kilinccsel, dekoratív koronával és pilaszterekkel.",
    ],
    models: [
      "PEONIA 1",
      "PEONIA 2",
      "PEONIA 3",
      "PEONIA 4",
      "PEONIA 5",
      "PEONIA 6",
    ],
    image: "/images/collections/peonia.jpg",
    catalogUrl: ERKADO_2026,
    catalogLabel: "Erkado katalógus 2026 (PDF)",
  },
  {
    slug: "miskant",
    name: "Miskant",
    category: "erkado",
    brand: "Erkado",
    excerpt: "18 mm-es fekete szitanyomott vonalak a STILE szárnyon.",
    description: [
      "MISKANT 2 TÖLGY NATÚR PREMIUM dekorban, FEKETE ST CPL dekoros ajtótokkal, BELLA SLIM fekete matt kilinccsel.",
      "18 mm széles fekete vonalak szitanyomásos technológiával festve.",
    ],
    models: [
      "MISKANT 1",
      "MISKANT 2",
      "MISKANT 3",
      "MISKANT 4",
      "MISKANT 5",
      "MISKANT 6",
    ],
    image: "/images/collections/miskant.jpg",
    catalogUrl: ERKADO_2026,
    catalogLabel: "Erkado katalógus 2026 (PDF)",
  },
  {
    slug: "juka",
    name: "Juka",
    category: "erkado",
    brand: "Erkado",
    tag: "Ársláger",
    excerpt: "Ársláger STILE kollekció tölgy ST CPL dekorral.",
    description: [
      "JUKA 3 TÖLGY ST CPL dekorban, TOPAZ inox kilinccsel. Beltéri keretszerkezetes STILE ajtószárnyak falcos és falc nélküli kivitelben.",
    ],
    models: [
      "JUKA 1",
      "JUKA 2",
      "JUKA 3",
      "JUKA 4",
      "JUKA 5",
      "JUKA 6",
      "JUKA 7",
      "JUKA 8",
    ],
    image: "/images/collections/juka.jpg",
    catalogUrl: ERKADO_2026,
    catalogLabel: "Erkado katalógus 2026 (PDF)",
  },
  {
    slug: "forsycja",
    name: "Forsycja",
    category: "erkado",
    brand: "Erkado",
    tag: "Ársláger",
    excerpt: "Ársláger – fehér GREKO dekor, BELLA SLIM fekete matt kilincs.",
    description: [
      "FORSYCJA 1 FEHÉR GREKO dekorban, BELLA SLIM fekete matt kilinccsel.",
    ],
    models: [
      "FORSYCJA 1",
      "FORSYCJA 2",
      "FORSYCJA 3",
      "FORSYCJA 4",
      "FORSYCJA 5",
      "FORSYCJA 6",
      "FORSYCJA 7",
      "FORSYCJA 8",
    ],
    image: "/images/collections/forsycja.jpg",
    catalogUrl: ERKADO_2026,
    catalogLabel: "Erkado katalógus 2026 (PDF)",
  },
  {
    slug: "lawenda",
    name: "Lawenda",
    category: "erkado",
    brand: "Erkado",
    tag: "Ársláger",
    excerpt: "Ársláger STILE vonal tölgy GREKO dekorral.",
    description: ["LAWENDA 7 TÖLGY GREKO dekorban, DECO kilinccsel."],
    models: [
      "LAWENDA 1",
      "LAWENDA 2",
      "LAWENDA 3",
      "LAWENDA 4",
      "LAWENDA 5",
      "LAWENDA 6",
      "LAWENDA 7",
      "LAWENDA 8",
      "LAWENDA 9",
    ],
    image: "/images/collections/lawenda.jpg",
    catalogUrl: ERKADO_2026,
    catalogLabel: "Erkado katalógus 2026 (PDF)",
  },
  {
    slug: "irys",
    name: "Irys",
    category: "erkado",
    brand: "Erkado",
    excerpt: "Fehér ST CPL, CUBE fekete matt kilincs.",
    description: ["IRYS 1 FEHÉR ST CPL dekorban, CUBE fekete matt kilinccsel."],
    models: [
      "IRYS 1",
      "IRYS 2",
      "IRYS 3",
      "IRYS 4",
      "IRYS 5",
      "IRYS 6",
      "IRYS 7",
      "IRYS 8",
    ],
    image: "/images/collections/irys.jpg",
    catalogUrl: ERKADO_2026,
    catalogLabel: "Erkado katalógus 2026 (PDF)",
  },
  {
    slug: "loft",
    name: "Loft üvegajtók",
    category: "erkado",
    brand: "Erkado",
    tag: "Újdonság",
    excerpt: "Loft Basic, Classic és Art – fekete keret, edzett üveg.",
    description: [
      "LOFT BASIC 2 fekete színben, átlátszó edzett üveggel. 2026-os újdonság a katalógus 60–64. oldalán: Loft Basic, Loft Classic és Loft Art.",
    ],
    models: ["LOFT BASIC", "LOFT CLASSIC", "LOFT ART"],
    image: "/images/collections/loft-basic.jpg",
    catalogUrl: ERKADO_2026,
    catalogLabel: "Erkado katalógus 2026 (PDF)",
    featured: true,
  },
  {
    slug: "forteca",
    name: "Forteca RC2 / RC3",
    category: "erkado",
    brand: "Erkado",
    excerpt: "Betörésbiztos beltéri bejárati ajtók RC2 és RC3 osztályban.",
    description: [
      "FORTECA RC3 VILÁGOSSZÜRKE ST CPL dekorban, LUX 220 intarziával.",
      "Betörésbiztos falcos ajtók RC2 és RC3 osztályban, befelé vagy kifelé nyíló kivitelben.",
    ],
    models: ["FORTECA RC2", "FORTECA RC3"],
    image: "/images/collections/forteca.jpg",
    catalogUrl: ERKADO_2026,
    catalogLabel: "Erkado katalógus 2026 (PDF)",
  },
  {
    slug: "premium-76md",
    name: "Prémium 76 MD",
    category: "premium",
    brand: "Prémium Ablakrendszerek",
    tag: "Ablakrendszer",
    excerpt:
      "6 kamrás, középtömítéses rendszer, Uf = 1,0 W/m²K – német alapanyag.",
    description: [
      "A Prémium 76MD tok-szárny kapcsolatának hőátbocsátási mutatója eléri a 80 mm feletti profilrendszerekre jellemző Uf = 1.0 W/m²K értéket, mindezt 6 kamrás, középtömítéses kivitelben, világosszürke, standard gumiszínnel.",
      "Alapüvegezése Ug = 1.0 W/m²K, 24 mm-es, 2 rétegű üvegezéssel. Opcióban 44 mm-es, 3 rétegű üvegezés Ug = 0.6 W/m²K.",
      "A rendszer igazoltan eredeti, Németországban gyártott alapanyagból készül.",
    ],
    specs: [
      { label: "Beépítési mélység", value: "76 mm" },
      { label: "Kamrák", value: "6" },
      { label: "Uf", value: "1.0 W/m²K" },
      { label: "Ug alap", value: "1.0 W/m²K (2 réteg, 24 mm)" },
      { label: "Ug opció", value: "0.6 W/m²K (3 réteg, 44 mm)" },
      { label: "Tömítés", value: "Középtömítés" },
    ],
    image: "/images/systems/premium-76md.jpg",
    catalogUrl: PREMIUM_2025,
    catalogLabel: "Prémium katalógus 2025 (PDF)",
    featured: true,
  },
  {
    slug: "premium-88md",
    name: "Prémium 88 MD",
    category: "premium",
    brand: "Prémium Ablakrendszerek",
    tag: "Ablakrendszer",
    excerpt: "7 kamra, Uf = 0,95 W/m²K, THERMO betéttel akár 0,91 W/m²K.",
    description: [
      "A Prémium 88MD tok-szárny kapcsolatának hőátbocsátási értéke Uf = 0.95 W/m²K, mely THERMO betéttel még fokozható akár 0.91 W/m²K értékig.",
      "Alapüvegezése Ug = 0.5 W/m²K, 48 mm-es, 3 rétegű üvegezéssel. A dupla melegperemes távtartó az üvegezésben alapáras.",
      "Az alap fehér színen kívül további 28 faerezetes és homogén színben érhető el. Németországban gyártott alapanyag.",
    ],
    specs: [
      { label: "Beépítési mélység", value: "88 mm" },
      { label: "Kamrák", value: "7" },
      { label: "Uf", value: "0.95 W/m²K (THERMO: 0.91)" },
      { label: "Ug", value: "0.5 W/m²K · 48 mm, 3 réteg" },
      { label: "Melegperem", value: "Alapáras, dupla" },
    ],
    image: "/images/systems/premium-88md.jpg",
    catalogUrl: PREMIUM_2025,
    catalogLabel: "Prémium katalógus 2025 (PDF)",
    featured: true,
  },
  {
    slug: "premium-82-alu",
    name: "Prémium 82 ALU MD",
    category: "premium",
    brand: "Prémium Ablakrendszerek",
    tag: "Alu-blende",
    excerpt: "Külső alumínium borítás, Uf = 1,1 W/m²K, 6 kamra, középtömítés.",
    description: [
      "A Prémium 82 ALU MD tok-szárny kapcsolatának hőátbocsátási értéke Uf = 1.1 W/m²K, mely egyedülálló a külső alumínium borítású termék esetében.",
      "Alapüvegezése Ug = 1.0 W/m²K, opcióban 44 mm-es, 3 rétegű üvegezéssel Ug = 0.6 W/m²K. 6 kamra, extra középtömítés.",
    ],
    specs: [
      { label: "Uf", value: "1.1 W/m²K" },
      { label: "Kamrák", value: "6" },
      { label: "Ug alap / opció", value: "1.0 / 0.6 W/m²K" },
      { label: "Borítás", value: "Külső alumínium (alu-blende)" },
    ],
    image: "/images/systems/premium-82alu.jpg",
    catalogUrl: PREMIUM_2025,
    catalogLabel: "Prémium katalógus 2025 (PDF)",
  },
  {
    slug: "premium-94-alu",
    name: "Prémium 94 ALU",
    category: "premium",
    brand: "Prémium Ablakrendszerek",
    tag: "Alu-blende",
    excerpt: "Uf = 0,95 W/m²K, 7 kamra, selyemfényű alumínium borítás.",
    description: [
      "A Prémium 94 ALU tok-szárny kapcsolatának hőátbocsátási értéke Uf = 0.95 W/m²K, mely a PVC és alumínium borítás kombinációjánál kimagasló érték.",
      "Alapüvegezése Ug = 0.5 W/m²K, melegperemes körbezárással. 7 kamra, extra középtömítés.",
      "Seiden Glanzed (selyemfényű) alumínium borítás a külső oldalon, a RAL színskála bármelyik színében rendelhető.",
    ],
    specs: [
      { label: "Uf", value: "0.95 W/m²K" },
      { label: "Ug", value: "0.5 W/m²K" },
      { label: "Kamrák", value: "7" },
      { label: "Alu", value: "Selyemfényű, RAL színek" },
    ],
    image: "/images/systems/premium-94alu.jpg",
    catalogUrl: PREMIUM_2025,
    catalogLabel: "Prémium katalógus 2025 (PDF)",
  },
  {
    slug: "premium-hst",
    name: "Prémium HST",
    category: "premium",
    brand: "Prémium Ablakrendszerek",
    tag: "Emelő-toló",
    excerpt: "Emelő-toló erkélyajtó, 400 kg szárnyteher, Uf = 1,4 W/m²K.",
    description: [
      "A Prémium HST tok-szárny kapcsolatának hőátbocsátási értéke Uf = 1.4 W/m²K, mely az emelő-toló erkélyajtó kategóriában a legjobb értékek között szerepel.",
      "Alapüvegezése Ug = 1.0 W/m²K, opcióban 44 mm-es, 3 rétegű üvegezéssel Ug = 0.6 W/m²K.",
      "Mozgó szárny maximális teherbírása 400 kg. Az alap fehér mellett további 28 faerezetes és homogén szín. Német alapanyag.",
    ],
    specs: [
      { label: "Uf", value: "1.4 W/m²K" },
      { label: "Ug alap / opció", value: "1.0 / 0.6 W/m²K" },
      { label: "Szárnyteher", value: "max. 400 kg" },
      { label: "Színek", value: "Fehér + 28 dekor" },
    ],
    image: "/images/systems/premium-hst.jpg",
    catalogUrl: PREMIUM_2025,
    catalogLabel: "Prémium katalógus 2025 (PDF)",
    featured: true,
  },
  {
    slug: "futur-76-ad",
    name: "futur 76 AD",
    category: "premium",
    brand: "Prémium Ablakrendszerek",
    tag: "Bejárati ajtó",
    excerpt: "Biztonság extrákkal – 126 mm szárny, automata zár opció.",
    description: [
      "Bejárati ajtó: 126 mm-es ajtószárny, 85 mm-es ajtótok, 120 kg-os ajtópántok (3 db), hőhídmentes aluküszöb, alumínium vízvető.",
      "2 csap 2 görgős ajtózár, opcióban 2 csapos automata ajtózár és extra belső sarokmerevítők.",
    ],
    specs: [
      { label: "Ajtószárny", value: "126 mm" },
      { label: "Ajtótok", value: "85 mm" },
      { label: "Pántok", value: "3 × 120 kg" },
      { label: "Küszöb", value: "Hőhídmentes alu" },
    ],
    image: "/images/systems/futur-76ad.jpg",
    catalogUrl: PREMIUM_DOORS,
    catalogLabel: "PRÉMIUM Bejárati ajtók 2024 (PDF)",
  },
  {
    slug: "present-76-md",
    name: "present 76 MD",
    category: "premium",
    brand: "Prémium Ablakrendszerek",
    tag: "Bejárati ajtó",
    excerpt: "Középtömítéses bejárati ajtó, fokozott energiamegtakarítás.",
    description: [
      "110 mm-es ajtószárny, 92 mm-es ajtótok, 3 × 120 kg-os ajtópánt, hőhídmentes aluküszöb, alumínium vízvető, extra belső sarokmerevítők, középtömítéses rendszer, 2 csap 2 görgős ajtózár.",
    ],
    specs: [
      { label: "Ajtószárny", value: "110 mm" },
      { label: "Ajtótok", value: "92 mm" },
      { label: "Tömítés", value: "Középtömítés" },
    ],
    image: "/images/systems/present-76md.jpg",
    catalogUrl: PREMIUM_DOORS,
    catalogLabel: "PRÉMIUM Bejárati ajtók 2024 (PDF)",
  },
  {
    slug: "futur-88-md",
    name: "futur 88 MD",
    category: "premium",
    brand: "Prémium Ablakrendszerek",
    tag: "Bejárati ajtó",
    excerpt: "Amikor az extra az alap – 4 csapos automata zár.",
    description: [
      "126 mm-es ajtószárny, 92 mm-es ajtótok, 3 × 120 kg-os pánt, hőhídmentes aluküszöb, alumínium vízvető, extra belső sarokmerevítők, középtömítéses rendszer.",
      "2 csapos automata ajtózár, opcióban 4 csapos automata ajtózár.",
    ],
    specs: [
      { label: "Ajtószárny", value: "126 mm" },
      { label: "Ajtótok", value: "92 mm" },
      { label: "Zár", value: "2 / 4 csapos automata" },
    ],
    image: "/images/systems/futur-88md.jpg",
    catalogUrl: PREMIUM_DOORS,
    catalogLabel: "PRÉMIUM Bejárati ajtók 2024 (PDF)",
  },
  {
    slug: "premium-hpl",
    name: "HPL ajtóbetét",
    category: "premium",
    brand: "Prémium Ablakrendszerek",
    excerpt: "HPL ajtóbetét katalógus 2025 – bejárati ajtópanelek.",
    description: [
      "Prémium Ablakrendszerek HPL ajtóbetét katalógus 2025. A teljes mintaválaszték a letölthető katalógusban.",
    ],
    image: "/images/systems/premium-bejarati.jpg",
    catalogUrl: PREMIUM_HPL,
    catalogLabel: "HPL ajtóbetét katalógus 2025 (PDF)",
  },
  {
    slug: "premium-pvc-betet",
    name: "PVC ajtóbetét",
    category: "premium",
    brand: "Prémium Ablakrendszerek",
    excerpt: "PVC ajtóbetét katalógus 2025 – bejárati ajtópanelek.",
    description: [
      "Prémium Ablakrendszerek PVC ajtóbetét katalógus 2025. A teljes mintaválaszték a letölthető katalógusban.",
    ],
    image: "/images/brand-premium.jpg",
    catalogUrl: PREMIUM_PVC,
    catalogLabel: "PVC ajtóbetét katalógus 2025 (PDF)",
  },
  {
    slug: "kommerling-px",
    name: "Kömmerling PX fólia",
    category: "kommerling",
    brand: "Kömmerling",
    tag: "PX vs MX",
    excerpt:
      "Renolit PX fólia: 50%-kal hosszabb élettartam, 95% UV-elnyelés, SST hővédelem.",
    description: [
      "Az ablakok és nyílászárók hosszú távú teljesítménye és esztétikai megjelenése nagymértékben függ a felhasznált fóliától. Magyarországon a műanyag nyílászáró rendszerek kétféle fóliás kivitelt alkalmaznak: Renolit MX és Renolit PX.",
      "Mindkét fóliatípus három rétegből épül fel: PMMA bevonat (tartósság és UV-védelem), színmintalenyomat (színtartóság), SST technológia – Solar Shield Technology (hővédelem).",
      "A PX fólia akár 50%-kal hosszabb élettartamot biztosít, mint az MX típus. A PMMA bevonat az alaptestre káros UV-sugárzás 95%-át elnyeli. Sikeresen teljesítette a 22.000 órás xenotesztet, ami 22–23 éves öregedési ciklusnak felel meg.",
    ],
    specs: [
      { label: "Rétegek", value: "PMMA + színminta + SST" },
      { label: "UV-elnyelés", value: "95% (PMMA)" },
      { label: "Xenoteszt", value: "22.000 óra ≈ 22–23 év" },
      { label: "Élettartam vs MX", value: "akár +50%" },
    ],
    extras: [
      "Több UV-abszorbeáló pigment, mint az MX fólia",
      "Lágyító nélküli PVC bázisfólia: kisebb felmelegedés és deformáció",
      "Taszítja a légköri szennyeződéseket",
      "Nagyobb gyárthatósági tartomány a profiloknál",
    ],
    image: "/images/products/kommerling-px.jpg",
    catalogUrl: "/catalogs/kommerling-px.pdf",
    catalogLabel: "Kömmerling PX fólia (PDF)",
    featured: true,
  },
  {
    slug: "door-panels",
    name: "Door Panels",
    category: "door-panels",
    brand: "Door Panels",
    excerpt: "Panel katalógus 2022 – bejárati ajtópanelek.",
    description: [
      "A Door Panels panel katalógus 2022 a bejárati ajtóbetétek teljes kínálatát tartalmazza. A részletes minták a letölthető PDF-ben találhatók.",
    ],
    image: "/images/brand-doorpanels.jpg",
    catalogUrl: DOOR_PANELS,
    catalogLabel: "Panel katalógus 2022 (PDF)",
  },
  {
    slug: "bussare",
    name: "Bussare kilincsek",
    category: "kilincsek",
    brand: "Bussare",
    excerpt: "Bussare kilincs katalógus 2024 – A3 és teljes katalógus.",
    description: [
      "Bussare – Kilincsek 2024 és Bussare – Katalógus – Kilincsek 2024. A teljes kollekció a letölthető PDF-ekben.",
    ],
    image: "/images/collections/kilincsek.jpg",
    catalogUrl: BUSSARE_CAT,
    catalogLabel: "Bussare katalógus 2024 (PDF)",
  },
  {
    slug: "hosszu-cimes",
    name: "Hosszú címes kilincsek",
    category: "kilincsek",
    brand: "Hosszúcímes",
    excerpt: "STRICTO, CLASSICO és FINO – BB, WC, PZ és átjáró zártípusok.",
    description: [
      "Hosszúcímes kilincs kollekció. Megfelelő zártípusok: BB, WC, PZ és átjáró. Tengelytávolság: 55 mm, 72 mm, 90 mm. Egyéb méret külön kérésre elérhető.",
    ],
    models: [
      "STRICTO A-67 Chrome–Satin Chrome",
      "CLASSICO A-01 Satin Gold",
      "CLASSICO A-01 Satin Chrome",
      "CLASSICO A-01 Antique Bronze",
      "FINO A-13 Graphite–Antique Bronze",
      "FINO A-13 Chrome–Satin Chrome",
    ],
    specs: [
      { label: "Zártípusok", value: "BB · WC · PZ · átjáró" },
      { label: "Tengelytávolság", value: "55 / 72 / 90 mm" },
    ],
    image: "/images/products/hosszu-cimes.jpg",
    catalogUrl: "/catalogs/hosszu-cimes.pdf",
    catalogLabel: "Hosszú címes kilincsek (PDF)",
  },
  {
    slug: "dr-schenk",
    name: "Dr. Schenk",
    category: "nagyker",
    brand: "Nagykereskedelem",
    excerpt: "Dr. Schenk vegyi áru – nagykereskedelmi kínálat.",
    description: [
      "Dr. Schenk termékek a nagykereskedelmi kínálatból. Részletek a termékfotón és a bemutatóteremben.",
    ],
    image: "/images/wholesale/dr-schenk.jpg",
    catalogUrl: "https://tradicioablak.hu/wp-content/uploads/2024/01/dok1-2.jpg",
    catalogLabel: "Dr. Schenk adatlap",
  },
  {
    slug: "tkk",
    name: "TKK",
    category: "nagyker",
    brand: "Nagykereskedelem",
    excerpt: "TKK vegyi áru – nagykereskedelmi kínálat.",
    description: [
      "TKK termékek a nagykereskedelmi kínálatból. Részletek a termékfotón és a bemutatóteremben.",
    ],
    image: "/images/wholesale/tkk.jpg",
    catalogUrl: "https://tradicioablak.hu/wp-content/uploads/2024/01/dok1-2-1.jpg",
    catalogLabel: "TKK adatlap",
  },
  {
    slug: "tytan",
    name: "Tytan",
    category: "nagyker",
    brand: "Nagykereskedelem",
    excerpt: "Tytan vegyi áru – nagykereskedelmi kínálat.",
    description: [
      "Tytan termékek a nagykereskedelmi kínálatból. Részletek a termékfotón és a bemutatóteremben.",
    ],
    image: "/images/wholesale/tytan.jpg",
    catalogUrl: "https://tradicioablak.hu/wp-content/uploads/2024/01/dok1-2-2.jpg",
    catalogLabel: "Tytan adatlap",
  },
  {
    slug: "extra-parkany",
    name: "Extra párkány akció",
    category: "nagyker",
    brand: "Nagykereskedelem",
    tag: "Akció",
    excerpt: "Extra párkány akció a nagykereskedelmi kínálatból.",
    description: [
      "Extra Párkány Akció. Az aktuális feltételek a termékfotón és a bemutatóteremben.",
    ],
    image: "/images/wholesale/extra-parkany.jpg",
    catalogUrl: "https://tradicioablak.hu/wp-content/uploads/2024/01/extra.jpg",
    catalogLabel: "Akciós adatlap",
    promo: true,
  },
  {
    slug: "tokrogzito",
    name: "Tokrögzítő csavar akció",
    category: "nagyker",
    brand: "Nagykereskedelem",
    tag: "Akció",
    excerpt: "Tokrögzítő csavar akció a beépítéshez.",
    description: [
      "Tokrögzítő csavar Akció. Az aktuális feltételek a termékfotón és a bemutatóteremben.",
    ],
    image: "/images/wholesale/tokrogzito.jpg",
    catalogUrl:
      "https://tradicioablak.hu/wp-content/uploads/2024/01/tokrogzito1-1.jpg",
    catalogLabel: "Akciós adatlap",
    promo: true,
  },
  {
    slug: "ko-parkany-marvany",
    name: "Kő párkányok (márvány)",
    category: "nagyker",
    brand: "Nagykereskedelem",
    excerpt: "Márvány ablakpárkányok.",
    description: [
      "Kő Párkányok (Márvány). A minták és méretek a bemutatóteremben és a termékfotón tekinthetők meg.",
    ],
    image: "/images/wholesale/parkany-marvany.jpg",
    catalogUrl: "https://tradicioablak.hu/wp-content/uploads/2024/01/ablakp1.jpg",
    catalogLabel: "Márvány párkány",
  },
  {
    slug: "ko-parkany-granit",
    name: "Kő párkányok (gránit)",
    category: "nagyker",
    brand: "Nagykereskedelem",
    excerpt: "Gránit ablakpárkányok.",
    description: [
      "Kő Párkányok (Gránit). A minták és méretek a bemutatóteremben és a termékfotón tekinthetők meg.",
    ],
    image: "/images/wholesale/parkany-granit.jpg",
    catalogUrl:
      "https://tradicioablak.hu/wp-content/uploads/2024/01/20250325_092634-scaled.jpg",
    catalogLabel: "Gránit párkány",
  },
];

export const references = [
  { src: "/images/elotte.jpg", alt: "Nyílászáró csere előtt", wide: true },
  { src: "/images/utana.jpg", alt: "Nyílászáró csere után", wide: true },
  { src: "/images/refs/studio-1.jpg", alt: "Referencia 1" },
  { src: "/images/refs/studio-2.jpg", alt: "Referencia 2" },
  { src: "/images/refs/studio-3.jpg", alt: "Referencia 3" },
  { src: "/images/refs/studio-4.jpg", alt: "Referencia 4" },
  { src: "/images/refs/studio-5.jpg", alt: "Referencia 5" },
  { src: "/images/refs/ref-01.jpeg", alt: "Beépített nyílászáró" },
  { src: "/images/refs/ref-02.jpeg", alt: "Beltéri ajtó referencia" },
  { src: "/images/refs/ref-03.jpeg", alt: "Ablakbeépítés" },
  { src: "/images/refs/ref-04.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-05.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-06.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-07.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-08.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-09.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-10.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-11.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-12.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-13.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-14.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-15.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-16.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-17.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-18.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-19.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-20.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-21.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-22.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-23.jpeg", alt: "Referencia fotó" },
  { src: "/images/refs/ref-24.jpg", alt: "Referencia fotó" },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(id: CategoryId) {
  return products.filter((p) => p.category === id);
}
