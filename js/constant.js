export const basicInformation = {
  sun: {
    description:
      "The Sun is the star at the center of our Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process.",
    radius: "696,340 km",
    distanceFromSun: "0 km",
    mass: "333,000 Earth masses",
    temperatureRange: "5500°C - 15 million°C",
    dayLength: "25 days (at the equator)",
    yearLength: "365.25 Earth days",
    missions: 0,
  },
  mercury: {
    description:
      "Mercury is the smallest and innermost planet in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.",
    radius: "2439.7 km",
    distanceFromSun: "57.9 million km",
    mass: "0.330 Earth masses",
    temperatureRange: "-173°C to 427°C",
    dayLength: "4222.6 hours",
    yearLength: "88 Earth days",
    missions: 4,
  },
  venus: {
    description:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.",
    radius: "6051.8 km",
    distanceFromSun: "108.2 million km",
    mass: "4.87 Earth masses",
    temperatureRange: "462°C",
    dayLength: "2802 hours",
    yearLength: "225 Earth days",
    missions: 43,
  },
  earth: {
    description:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
    radius: "6371 km",
    distanceFromSun: "149.6 million km",
    mass: "1 Earth mass",
    temperatureRange: "-88°C to 58°C",
    dayLength: "24 hours",
    yearLength: "365.25 days",
    missions: 0,
  },
  mars: {
    description:
      "Mars is the fourth planet from the Sun. It is often referred to as the 'Red Planet' because of its reddish appearance.",
    radius: "3389.5 km",
    distanceFromSun: "227.9 million km",
    mass: "0.107 Earth masses",
    temperatureRange: "-140°C to 20°C",
    dayLength: "24.6 hours",
    yearLength: "687 Earth days",
    missions: 60,
  },
  jupiter: {
    description:
      "Jupiter is the largest planet in the Solar System. It is a gas giant with a strong magnetic field.",
    radius: "69911 km",
    distanceFromSun: "778.5 million km",
    mass: "318 Earth masses",
    temperatureRange: "-145°C",
    dayLength: "9.9 hours",
    yearLength: "11.9 Earth years",
    missions: 9,
  },
  saturn: {
    description:
      "Saturn is the sixth planet from the Sun. It is known for its prominent ring system, which is made up of ice particles and dust.",
    radius: "58232 km",
    distanceFromSun: "1433.5 million km",
    mass: "95 Earth masses",
    temperatureRange: "-178°C",
    dayLength: "10.7 hours",
    yearLength: "29.5 Earth years",
    missions: 7,
  },
  uranus: {
    description:
      "Uranus is the seventh planet from the Sun. It is an ice giant and is unique among the planets in the Solar System because it rotates on its side.",
    radius: "25362 km",
    distanceFromSun: "2872.5 million km",
    mass: "14 Earth masses",
    temperatureRange: "-224°C",
    dayLength: "17.2 hours",
    yearLength: "84 Earth years",
    missions: 2,
  },
  neptune: {
    description:
      "Neptune is the eighth and farthest planet from the Sun in the Solar System. It is similar in composition to Uranus.",
    radius: "24622 km",
    distanceFromSun: "4495.1 million km",
    mass: "17 Earth masses",
    temperatureRange: "-214°C",
    dayLength: "16.1 hours",
    yearLength: "164.8 Earth years",
    missions: 1,
  },
  pluto: {
    description:
      "Pluto is a dwarf planet in our Solar System and was formerly considered the ninth planet. It was reclassified as a dwarf planet by the International Astronomical Union (IAU) in 2006.",
    radius: "1186 km",
    distanceFromSun: "5906 million km",
    mass: "0.0025 Earth masses",
    temperatureRange: "-233°C to -223°C",
    dayLength: "153.3 hours",
    yearLength: "248 Earth years",
    missions: 1,
  },
};
export const constant = {
  approx: {
    sizeConst: 1,
    distanceConst: 1,
    selfRotateConst: 1,
    rotaingSpeedAroundSunConst: 1,
    max_view: 1000,
    max_speed: 20,
    min_speed: -2,
    point_light_limit: 300,
  },
  real: {
    sizeConst: 0.5,
    distanceConst: 2.5,
    selfRotateConst: 0.01,
    rotaingSpeedAroundSunConst: 0.075,
    max_view: 75000,
    max_speed: 10000,
    min_speed: -50,
    point_light_limit: 7500,
  },
};
export const sunData = {
  approx: 15,
  real: 69,
};
export const select = (selector) => document.querySelector(selector);
export const showInfo = (name) => {
  const temp = basicInformation[name];
  Object.keys(temp).forEach((key) => {
    select(`.info-value.${key}`).innerText = temp[key];
  });
};
