export interface ExportPostac {

  imie?: string;
  rasatitle?: string;
  profesjatitle?: string;
  opis?: string;
  // statystyki rasy
  WW?: number;
  US?: number;
  K?: number;
  Odp?: number;
  Zr?: number;
  Int?: number;
  SW?: number;
  Ogd?: number;
  A?: number;
  Zyw?: number;
  S?: number;
  Wt?: number;
  Sz?: number;
  Mag?: number;
  PO?: number;
  PP?: number;
  // statystyki profesji wykupione
  WW1?: number;
  US1?: number;
  K1?: number;
  Odp1?: number;
  Zr1?: number;
  Int1?: number;
  SW1?: number;
  Ogd1?: number;
  A1?: number;
  Zyw1?: number;
  Sz1?: number;
  Mag1?: number;
  // maxymalne statystyki profesji
  WW2?: number;
  US2?: number;
  K2?: number;
  Odp2?: number;
  Zr2?: number;
  Int2?: number;
  SW2?: number;
  Ogd2?: number;
  A2?: number;
  Zyw2?: number;
  Sz2?: number;
  Mag2?: number;
  // sumowane statystyki
  WW3?: number;
  US3?: number;
  K3?: number;
  Odp3?: number;
  Zr3?: number;
  Int3?: number;
  SW3?: number;
  Ogd3?: number;
  A3?: number;
  Zyw3?: number;
  S3?: number;
  Wt3?: number;
  Sz3?: number;
  Mag3?: number;
  PO3?: number;
  PP3?: number;
  // statystyki ze zdolnosci rasy
  WW4?: number;
  US4?: number;
  K4?: number;
  Odp4?: number;
  Zr4?: number;
  Int4?: number;
  SW4?: number;
  Ogd4?: number;
  A4?: number;
  Zyw4?: number;
  Sz4?: number;
  // statystyki ze zdolnosci profesji
  WW5?: number;
  US5?: number;
  K5?: number;
  Odp5?: number;
  Zr5?: number;
  Int5?: number;
  SW5?: number;
  Ogd5?: number;
  A5?: number;
  Zyw5?: number;
  Sz5?: number;

  umiejetnosciRasowe?: Array<string>;
  umiejetnosciProfesji?: Array<string>;
  zdolnosciRasowe?: Array<string>;
  zdolnosciProfesji?: Array<string>;
  doswiadczenie?: number;
  wyposazenie?: Array<string>;
  inne?: any;
  uwagi?: string;
}

