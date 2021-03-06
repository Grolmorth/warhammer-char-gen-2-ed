export interface BohaterOgolne {

  imie?: string;
  rasatitle?: string;
  profesjatitle?: string;
  title?:string;
  opis?: string;
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
  umiejetnosci?: Array<any>;
  wyborUmiejetnosciProfesji?: Array<Array<any>>;
  wyborUmiejetnosciRasy?: Array<Array<any>>;
  zdolnosci?: Array<any>;
  wyborZdolnosciProfesji?: Array<Array<any>>;
  wyborZdolnosciRasy?: Array<Array<any>>;
  doswiadczenie?: number;
  wyposazenie?:string;
  inne?: any;
  uwagi?: string;
  importowane?: boolean;
  shallya?:boolean;
}

