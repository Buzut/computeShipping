function computeShipping(weight, region) {
  var shipping;
  if (region == 0) {
    if (weight <= 1000) {
      shipping = 6;
    }
    else if (weight > 1000 && weight <= 2000) {
      shipping = 8;
    }
    else if (weight > 2000 && weight <= 5000) {
      shipping = 9;
    }
    else if (weight > 5000 && weight <= 10000) {
      shipping = 12;
    }
    else if (weight > 10000 && weight <= 30000) {
      shipping = 17;
    }
    else if (weight > 30000) {
      shipping = 25;
    }
  }
  
  // Zone 1 Allemagne, Belgique, Pays Bas, Luxembourg
  else if (region == 1) {
    if (weight <= 1000) {
      shipping = 12;
    }
    else if (weight > 1000 && weight <= 2000) {
      shipping = 13;
    }
    else if (weight > 2000 && weight <= 3000) {
      shipping = 14;
    }
    else if (weight > 3000 && weight <= 4000) {
      shipping = 14;
    }
    else if (weight > 4000 && weight <= 5000) {
      shipping = 15;
    }
    else if (weight > 5000 && weight <= 6000) {
      shipping = 16;
    }
    else if (weight > 6000 && weight <= 7000) {
      shipping = 17;
    }
    else if (weight > 7000 && weight <= 8000) {
      shipping = 17;
    }
    else if (weight > 8000 && weight <= 9000) {
      shipping = 18;
    }
    else if (weight > 9000 && weight <= 10000) {
      shipping = 19;
    }
    else if (weight > 10000 && weight <= 15000) {
      shipping = 23;
    }
    else if (weight > 15000 && weight <= 20000) {
      shipping = 27;
    }
    else if (weight > 20000 && weight <= 25000) {
      shipping = 31;
    }
    else if (weight > 25000) {
      shipping = 35;
    }
  }
  
  // Zone 2 Grande Bretagne, Italie, Espagne et Suisse
  else if (region == 2) {
    if (weight <= 1000) {
      shipping = 15;
    }
    else if (weight > 1000 && weight <= 2000) {
      shipping = 16;
    }
    else if (weight > 2000 && weight <= 3000) {
      shipping = 16;
    }
    else if (weight > 3000 && weight <= 4000) {
      shipping = 17;
    }
    else if (weight > 4000 && weight <= 5000) {
      shipping = 18;
    }
    else if (weight > 5000 && weight <= 6000) {
      shipping = 19;
    }
    else if (weight > 6000 && weight <= 7000) {
      shipping = 20;
    }
    else if (weight > 7000 && weight <= 8000) {
      shipping = 20;
    }
    else if (weight > 8000 && weight <= 9000) {
      shipping = 21;
    }
    else if (weight > 9000 && weight <= 10000) {
      shipping = 22;
    }
    else if (weight > 10000 && weight <= 15000) {
      shipping = 26;
    }
    else if (weight > 15000 && weight <= 20000) {
      shipping = 30;
    }
    else if (weight > 20000 && weight <= 25000) {
      shipping = 34;
    }
    else if (weight > 25000) {
      shipping = 38;
    }
  }
  
  // Zone 3 Autriche, Danemark, Irlande et Portugal
  else if (region == 3) {
    if (weight <= 1000) {
      shipping= 15;
    }
    else if (weight > 1000 && weight <= 2000) {
      shipping = 17;
    }
    else if (weight > 2000 && weight <= 3000) {
      shipping = 18;
    }
    else if (weight > 3000 && weight <= 4000) {
      shipping = 19;
    }
    else if (weight > 4000 && weight <= 5000) {
      shipping = 20;
    }
    else if (weight > 5000 && weight <= 6000) {
      shipping = 22;
    }
    else if (weight > 6000 && weight <= 7000) {
      shipping = 23;
    }
    else if (weight > 7000 && weight <= 8000) {
      shipping = 24;
    }
    else if (weight > 8000 && weight <= 9000) {
      shipping = 25;
    }
    else if (weight > 9000 && weight <= 10000) {
      shipping = 26;
    }
    else if (weight > 10000 && weight <= 15000) {
      shipping = 33;
    }
    else if (weight > 15000 && weight <= 20000) {
      shipping = 40;
    }
    else if (weight > 20000 && weight <= 25000) {
      shipping = 46;
    }
    else if (weight > 25000) {
      shipping = 53;
    }
  }
  
  // Zone 4 Finlande, Norvège, Suède
  else if (region == 4) {
    if (weight <= 1000) {
      shipping = 19;
    }
    else if (weight > 1000 && weight <= 2000) {
      shipping = 21;
    }
    else if (weight > 2000 && weight <= 3000) {
      shipping = 22;
    }
    else if (weight > 3000 && weight <= 4000) {
      shipping = 23;
    }
    else if (weight > 4000 && weight <= 5000) {
      shipping = 25;
    }
    else if (weight > 5000 && weight <= 6000) {
      shipping = 26;
    }
    else if (weight > 6000 && weight <= 7000) {
      shipping = 27;
    }
    else if (weight > 7000 && weight <= 8000) {
      shipping = 29;
    }
    else if (weight > 8000 && weight <= 9000) {
      shipping = 30;
    }
    else if (weight > 9000 && weight <= 10000) {
      shipping = 31;
    }
    else if (weight > 10000 && weight <= 15000) {
      shipping = 39;
    }
    else if (weight > 15000 && weight <= 20000) {
      shipping = 46;
    }
    else if (weight > 20000 && weight <= 25000) {
      shipping = 53;
    }
    else if (weight > 25000) {
      shipping = 61;
    }
  }
  
  // Zone 5 Grèce, Hongrie, Islande, Pologne, République Tchèque, Slovaquie, Slovénie
  else if (region == 5) {
    if (weight <= 1000) {
      shipping= 20;
    }
    else if (weight > 1000 && weight <= 2000) {
      shipping = 23;
    }
    else if (weight > 2000 && weight <= 3000) {
      shipping = 26;
    }
    else if (weight > 3000 && weight <= 4000) {
      shipping = 31;
    }
    else if (weight > 4000 && weight <= 5000) {
      shipping = 34;
    }
    else if (weight > 5000 && weight <= 6000) {
      shipping = 38;
    }
    else if (weight > 6000 && weight <= 7000) {
      shipping = 41;
    }
    else if (weight > 7000 && weight <= 8000) {
      shipping = 45;
    }
    else if (weight > 8000 && weight <= 9000) {
      shipping = 48;
    }
    else if (weight > 9000 && weight <= 10000) {
      shipping = 52;
    }
    else if (weight > 10000 && weight <= 15000) {
      shipping = 68;
    }
    else if (weight > 15000 && weight <= 20000) {
      shipping = 84;
    }
    else if (weight > 20000 && weight <= 25000) {
      shipping = 100;
    }
    else if (weight > 25000) {
      shipping = 116;
    }
  }
  
  // Zone 6 Autres pays de l'Europe de l'est et Maghreb
  else if (region == 6) {
  if (weight <= 1000) {
      shipping= 20;
  }
  else if (weight > 1000 && weight <= 2000) {
      shipping = 24;
  }
  else if (weight > 2000 && weight <= 3000) {
      shipping = 28;
  }
  else if (weight > 3000 && weight <= 4000) {
      shipping = 31;
  }
  else if (weight > 4000 && weight <= 5000) {
      shipping = 35;
  }
  else if (weight > 5000 && weight <= 6000) {
      shipping = 38;
  }
  else if (weight > 6000 && weight <= 7000) {
      shipping = 42;
  }
  else if (weight > 7000 && weight <= 8000) {
      shipping = 46;
  }
  else if (weight > 8000 && weight <= 9000) {
      shipping = 50;
  }
  else if (weight > 9000 && weight <= 10000) {
      shipping = 53;
  }
  else if (weight > 10000 && weight <= 15000) {
      shipping = 71;
  }
  else if (weight > 15000 && weight <= 20000) {
      shipping = 89;
  }
  else if (weight > 20000 && weight <= 25000) {
      shipping = 106;
  }
  else if (weight > 25000) {
      shipping = 124;
  }
  }
  
  // Zone 7 USA, Canada, Afrique et Moyen-Orient
  else if (region == 7) {
    if (weight <= 1000) {
      shipping= 25;
    }
    else if (weight > 1000 && weight <= 2000) {
      shipping = 33;
    }
    else if (weight > 2000 && weight <= 3000) {
      shipping = 41;
    }
    else if (weight > 3000 && weight <= 4000) {
      shipping = 49;
    }
    else if (weight > 4000 && weight <= 5000) {
      shipping = 56;
    }
    else if (weight > 5000 && weight <= 6000) {
      shipping = 63;
    }
    else if (weight > 6000 && weight <= 7000) {
      shipping = 71;
    }
    else if (weight > 7000 && weight <= 8000) {
      shipping = 79;
    }
    else if (weight > 8000 && weight <= 9000) {
      shipping = 86;
    }
    else if (weight > 9000 && weight <= 10000) {
      shipping = 94;
    }
    else if (weight > 10000 && weight <= 15000) {
      shipping = 128;
    }
    else if (weight > 15000 && weight <= 20000) {
      shipping = 163;
    }
    else if (weight > 20000 && weight <= 25000) {
      shipping = 198;
    }
    else if (weight > 25000) {
      shipping = 231;
    }
  }
  
  // Zone 8 Amériques hors USA et Canada, Asie et Océanie
  else if (region == 8) {
    if (weight <= 1000) {
      shipping= 28;
    }
    else if (weight > 1000 && weight <= 2000) {
      shipping = 38;
    }
    else if (weight > 2000 && weight <= 3000) {
      shipping = 49;
    }
    else if (weight > 3000 && weight <= 4000) {
      shipping = 59;
    }
    else if (weight > 4000 && weight <= 5000) {
      shipping = 68;
    }
    else if (weight > 5000 && weight <= 6000) {
      shipping = 78;
    }
    else if (weight > 6000 && weight <= 7000) {
      shipping = 88;
    }
    else if (weight > 7000 && weight <= 8000) {
      shipping = 98;
    }
    else if (weight > 8000 && weight <= 9000) {
      shipping = 109;
    }
    else if (weight > 9000 && weight <= 10000) {
      shipping = 119;
    }
    else if (weight > 10000 && weight <= 15000) {
      shipping = 164;
    }
    else if (weight > 15000 && weight <= 20000) {
      shipping = 211;
    }
    else if (weight > 20000 && weight <= 25000) {
      shipping = 256;
    }
    else if (weight > 25000) {
      shipping = 301;
    }
  }
  
  // Zone OM1 Guadeloupe (y compris St Barthélémy et St Martin),
  // Martinique, Réunion, Guyane, Mayotte et St Pierre et Miquelon
  else if (region == 'OM1') {
    if (weight <= 1000) {
      shipping = 16;
    }
    else if (weight > 1000 && weight <= 2000) {
      shipping = 21;
    }
    else if (weight > 2000 && weight <= 3000) {
      shipping = 26;
    }
    else if (weight > 3000 && weight <= 4000) {
      shipping = 32;
    }
    else if (weight > 4000 && weight <= 5000) {
      shipping = 37;
    }
    else if (weight > 5000 && weight <= 6000) {
      shipping = 42;
    }
    else if (weight > 6000 && weight <= 7000) {
      shipping = 48;
    }
    else if (weight > 7000 && weight <= 8000) {
      shipping = 53;
    }
    else if (weight > 8000 && weight <= 9000) {
      shipping = 58;
    }
    else if (weight > 9000 && weight <= 10000) {
      shipping = 64;
    }
    else if (weight > 10000 && weight <= 15000) {
      shipping = 88;
    }
    else if (weight > 15000 && weight <= 20000) {
      shipping = 115;
    }
    else if (weight > 20000 && weight <= 25000) {
      shipping = 142;
    }
    else if (weight > 25000) {
      shipping = 168;
    }
  }
  
  // Zone OM2 Nouvelle Calédonie et ses dépendances, Polynésie Française
  else if (region == 'OM2') {
    if (weight <= 1000) {
      shipping = 22;
    }
    else if (weight > 1000 && weight <= 2000) {
      shipping = 34;
    }
    else if (weight > 2000 && weight <= 3000) {
      shipping = 45;
    }
    else if (weight > 3000 && weight <= 4000) {
      shipping = 58;
    }
    else if (weight > 4000 && weight <= 5000) {
      shipping = 70;
    }
    else if (weight > 5000 && weight <= 6000) {
      shipping = 82;
    }
    else if (weight > 6000 && weight <= 7000) {
      shipping = 94;
    }
    else if (weight > 7000 && weight <= 8000) {
      shipping = 105;
    }
    else if (weight > 8000 && weight <= 9000) {
      shipping = 116;
    }
    else if (weight > 9000 && weight <= 10000) {
      shipping = 130;
    }
    else if (weight > 10000 && weight <= 15000) {
      shipping = 190;
    }
    else if (weight > 15000 && weight <= 20000) {
      shipping = 250;
    }
    else if (weight > 20000 && weight <= 25000) {
      shipping = 310;
    }
    else if (weight > 25000) {
      shipping = 370;
    }
  }
  
  return shipping;
}
