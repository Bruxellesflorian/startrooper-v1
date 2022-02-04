import grotte from '../sprites/event/grotte.png'
import atk2 from '../sprites/event/atk2.png'
import atk4 from '../sprites/event/atk4.png'
import combat from '../sprites/event/combat.png'
import meteorite from '../sprites/event/meteorite.png'
import paysage from '../sprites/event/paysage.png'
import biere from '../sprites/event/biere.png'



export const list_event = [
  {
    //-----------------------------------------------------------------------------------------
    story: 'Vos soldats découvrent une grotte',
    choice_A: 'Entrer dans la grotte',
    choice_B: 'Décider de rebrousser chemin, la grotte est trop sombre',
    result_A: {
      answer: "Vous entrez dans la grotte et vous trouvez des minerais d'or !",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Vous prenez le chemin de votre base !',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: true, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 50 },
      { name: 'iron', value: 0 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0},
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 0 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : grotte}
    //-----------------------------------------------------------------------------------------
  },
  {
    //-----------------------------------------------------------------------------------------
    story: 'Une météorite tombe à proximitée de la base',
    choice_A: 'Partir en expédition',
    choice_B: 'Retourner se coucher la nuit a été assez agitée',
    result_A: {
      answer: "Vous ne trouvez rien, ce n'est qu'un tas de pierre... :(",
      action: false, // si true alors lance l'action
    },
    result_B: {
      answer: 'Pendant la nuit deux civils ce sont retrouvé',
      action: true, 
    },
    //_____________________ACTION__________________________________________________
    payed: true, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 0 },
      { name: 'iron', value: 0 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0 },
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 0 },
    population: { name: 'civil', value: 1 },
    imageEvent : {img  : meteorite}

    //-----------------------------------------------------------------------------------------
  },
  {
    //-----------------------------------------------------------------------------------------

    story: 'Une météorite tombe à proximitée de la base',
    choice_A: 'Partir en expédition',
    choice_B: 'Retourner se coucher la nuit a été assez agité',
    result_A: {
      answer:
        "Vous trouvez des minerais radio actif, un travailleur c'est approché malgrés tout",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Vous ne tentez pas votre chance',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: false, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 0 },
      { name: 'iron', value: 0 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 1 },
      { name: 'Iron worker', value: 0 },
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 0 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : meteorite}

    //-----------------------------------------------------------------------------------------
  },
  {
    //-----------------------------------------------------------------------------------------
    story: 'Vos soldats découvrent une grotte',
    choice_A: 'Entrer dans la grotte',
    choice_B: 'Décider de rebrousser chemin, la grotte est trop sombre',
    result_A: {
      answer: "Vous entrez dans la grotte et vous trouvez des minerais de fer !",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Vous prenez le chemin de votre base !',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: true, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 0 },
      { name: 'iron', value: 50 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0},
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 0 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : grotte}

    //-----------------------------------------------------------------------------------------
  },
  {
    //-----------------------------------------------------------------------------------------
    story: 'Vos soldats découvrent une grotte',
    choice_A: 'Entrer dans la grotte',
    choice_B: 'Décider de rebrousser chemin, la grotte est trop sombre',
    result_A: {
      answer: "Vous entrez dans la grotte et vous trouvez un gisement de gaz !",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Vous prenez le chemin de votre base !',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: true, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 0 },
      { name: 'iron', value: 0 },
      { name: 'GAS', value: 50 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0},
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 0 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : grotte}

    //-----------------------------------------------------------------------------------------
  },
  {
    //-----------------------------------------------------------------------------------------

    story: 'Une météorite tombe à proximitée de la base',
    choice_A: 'Partir en expédition',
    choice_B: 'Retourner se coucher la nuit a été assez agité',
    result_A: {
      answer:
        "Vous arrivez sur place et vous trouvez un gisement de fer immense !!",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Vous ne tentez pas votre chance',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: true, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 0 },
      { name: 'iron', value: 100 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0 },
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 0 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : meteorite}

    //-----------------------------------------------------------------------------------------
  }
  ,
  {
    //-----------------------------------------------------------------------------------------

    story: "Un soldat c'est perdu en dehors de la base",
    choice_A: 'Organiser un groupe de recherche',
    choice_B: "Ne rien faire, s'est beaucoup trop dangereux",
    result_A: {
      answer:
        "Vous retrouver le soldat, entouré de minerais d'or !",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Vous restez dans la base.',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: true, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 100 },
      { name: 'iron', value: 0 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0 },
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 1 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : paysage}

    //-----------------------------------------------------------------------------------------
  }
  ,
  {
    //-----------------------------------------------------------------------------------------

    story: "Un soldat c'est perdu en dehors de la base",
    choice_A: 'Organiser un groupe de recherche',
    choice_B: "Ne rien faire, s'est beaucoup trop dangereux",
    result_A: {
      answer:
        "Vous subissez une attaque Alien  !",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Vous restez dans la base.',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: false, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 0 },
      { name: 'iron', value: 0 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0 },
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 3 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : paysage}

    //-----------------------------------------------------------------------------------------
  }
  ,
  {
    //-----------------------------------------------------------------------------------------
    story: 'Vos soldats découvrent une grotte',
    choice_A: 'Entrer dans la grotte',
    choice_B: 'Décider de rebrousser chemin, la grotte est trop sombre',
    result_A: {
      answer: "Vous entrez dans la grotte et vous vous faites attaquer par des Aliens ! ",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Vous prenez le chemin de votre base !',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: false, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 0 },
      { name: 'iron', value: 0 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0},
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 1 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : grotte}

    //-----------------------------------------------------------------------------------------
  }
  ,
  {
    //-----------------------------------------------------------------------------------------

    story: 'Une météorite tombe à proximitée de la base',
    choice_A: 'Partir en expédition',
    choice_B: 'Retourner se coucher la nuit a été assez agité',
    result_A: {
      answer:
        "Vous arrivez sur place et des aliens vous rackettes",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Vous ne tentez pas votre chance',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: false, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 50 },
      { name: 'iron', value: 50 },
      { name: 'GAS', value: 50 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0 },
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 0 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : meteorite}

    //-----------------------------------------------------------------------------------------
  }
  ,
  {
    //-----------------------------------------------------------------------------------------

    story: "Les soldats planque toujours des armes aux cas ou il faudrait tirer sur des drônes Amazon !",
    choice_A: 'Vous êtes en accord avec cette pratique',
    choice_B: "Vous n'aimez pas les armes ",
    result_A: {
      answer:
        "Vos soldats ajoute une arme à leur équipement",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Vous préférez en rester là...',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: true, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 0 },
      { name: 'iron', value: 0 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0 },
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 0 },
    population: { name: 'civil', value: 0 },
    upatk : {name : "point d'attaques ", value : 4},
    imageEvent : {img  : atk4}

    //-----------------------------------------------------------------------------------------
  }
  ,
  {
    //-----------------------------------------------------------------------------------------

    story: "En manque d'action ! Vos soldats on eu l'idée d'organiser un paintball létal",
    choice_A: 'Vous êtes en accord avec cette pratique',
    choice_B: "Vous n'aimez pas la létalité ",
    result_A: {
      answer:
        "Un soldat meurt n'ayant pas compris les règles...",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Vous préférez en rester là...',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: false, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 0 },
      { name: 'iron', value: 0 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0 },
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 1 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : combat}

    //-----------------------------------------------------------------------------------------
  }
  ,
  {
    //-----------------------------------------------------------------------------------------

    story: "Pendant une marche de nuit, vous rencontrez des Aliens chamanique, il vous offres un barril de bière artisanale ",
    choice_A: 'Vous acceptez de boire une bière avec eux',
    choice_B: "Vous prenez la fuite ! Saleté de hippie de l'espace ! ",
    result_A: {
      answer:
        "Après avoir bue la bière, tout vos soldats retrouve leur santée !",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Saleté de crackhead !',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: true, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 0 },
      { name: 'iron', value: 0 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0 },
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 0 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : biere},
    heal : { name : "heal" }


    //-----------------------------------------------------------------------------------------
  }
  ,
  {
    //-----------------------------------------------------------------------------------------

    story: "Pendant une marche de nuit, vous rencontrez des Aliens chamanique, il vous offres un barril de bière artisanale ",
    choice_A: 'Vous acceptez de boire une bière avec eux',
    choice_B: "Vous prenez la fuite ! Saleté de hippie de l'espace ! ",
    result_A: {
      answer:
        "Après avoir bue la bière, un soldat fait un trip super chelou, le soldat meurt !",
      action: true, // si true alors lance l'action
    },
    result_B: {
      answer: 'Saleté de crackhead !',
      action: false,
    },
    //_____________________ACTION__________________________________________________
    payed: false, // détermine si les valeurs vont être gagné(true) ou perdu(false)
    ressource: [
      { name: 'gold', value: 0 },
      { name: 'iron', value: 0 },
      { name: 'GAS', value: 0 },
    ],
    workers: [
      { name: 'Gold worker', value: 0 },
      { name: 'Iron worker', value: 0 },
      { name: 'GAS worker', value: 0 },
    ],
    soldiers: { name: 'soldier', value: 1 },
    population: { name: 'civil', value: 0 },
    imageEvent : {img  : biere},
  
    //-----------------------------------------------------------------------------------------
  }
  
]
