// ports.ts
export type Port = {
  unlocode: string;
  name: string;
  latitude: number;
  longitude: number;
};

export const portCoordinates: Port[] = [
  { unlocode: "USJNU", name: "Juneau, USA", latitude: 58.3019, longitude: -134.4197 },
  { unlocode: "USKTN", name: "Ketchikan, USA", latitude: 55.3422, longitude: -131.6461 },
  { unlocode: "GBSOU", name: "Southampton, UK", latitude: 50.8998, longitude: -1.4044 },
  { unlocode: "CANYC", name: "New York City, USA", latitude: 40.7128, longitude: -74.006 },
  { unlocode: "GBLIV", name: "Liverpool, UK", latitude: 53.4084, longitude: -2.9916 },
  { unlocode: "DEHAM", name: "Hamburg, Germany", latitude: 53.5511, longitude: 9.9937 },
  { unlocode: "FRMRS", name: "Marseilles, France", latitude: 43.2965, longitude: 5.3698 },
  { unlocode: "ITVCE", name: "Venice, Italy", latitude: 45.4408, longitude: 12.3155 },
  { unlocode: "ESBCN", name: "Barcelona, Spain", latitude: 41.3851, longitude: 2.1734 },
  { unlocode: "CANAP", name: "Naples, Italy", latitude: 40.8518, longitude: 14.2681 },
  { unlocode: "GRPHA", name: "Piraeus (Athens), Greece", latitude: 37.9426, longitude: 23.646 },
  { unlocode: "BRCOR", name: "Corfu, Greece", latitude: 39.6243, longitude: 19.9217 },
  { unlocode: "FRLEH", name: "Le Havre, France", latitude: 49.4944, longitude: 0.1079 },
  { unlocode: "DKCPH", name: "Copenhagen, Denmark", latitude: 55.6761, longitude: 12.5683 },
  { unlocode: "NLRTM", name: "Rotterdam, Netherlands", latitude: 51.9225, longitude: 4.4791 },
  { unlocode: "SESTO", name: "Stockholm, Sweden", latitude: 59.3293, longitude: 18.0686 },
  { unlocode: "NOOSL", name: "Oslo, Norway", latitude: 59.9139, longitude: 10.7522 },
  { unlocode: "AUBRU", name: "Bruges (Zeebrugge), Belgium", latitude: 51.2093, longitude: 3.2247 },

  { unlocode: "MXCZM", name: "Cozumel, Mexico", latitude: 20.422983, longitude: -86.922343 },
  { unlocode: "BZMZP", name: "Maya Beach, Belize", latitude: 16.5272, longitude: -88.346 },
  { unlocode: "MIPTP", name: "Miami, USA", latitude: 25.7743, longitude: -80.1937 },
  { unlocode: "BBDGI", name: "Bridgetown (Barbados)", latitude: 13.0975, longitude: -59.6167 },
  { unlocode: "VGQEF", name: "Road Town (Tortola, British Virgin Islands)", latitude: 18.4333, longitude: -64.6167 },
  { unlocode: "JMKOS", name: "Montego Bay, Jamaica", latitude: 18.4663, longitude: -77.9249 },
  { unlocode: "CUSG", name: "San Juan, Puerto Rico", latitude: 18.4655, longitude: -66.1057 },
  { unlocode: "HNRTB", name: "Roatan, Honduras", latitude: 16.3167, longitude: -86.5333 },
  { unlocode: "LCAIG", name: "Castries, Saint Lucia", latitude: 13.9094, longitude: -60.9789 },
  { unlocode: "FDFCR", name: "Fort-de-France, Martinique", latitude: 14.6091, longitude: -61.058 },
  { unlocode: "BBGOJ", name: "Georgetown, Grand Cayman", latitude: 19.2995, longitude: -81.3861 },
  { unlocode: "TTPTF", name: "Port of Spain, Trinidad and Tobago", latitude: 10.6549, longitude: -61.5019 },
  { unlocode: "AGANU", name: "Antigua", latitude: 17.0708, longitude: -61.8175 },
  { unlocode: "CAMMR", name: "Marigot, Saint Martin", latitude: 18.0706, longitude: -63.0823 },
  { unlocode: "CRSJO", name: "San Jose, Costa Rica", latitude: 9.9333, longitude: -84.0833 },
  { unlocode: "PAPTP", name: "Port-au-Prince, Haiti", latitude: 18.5392, longitude: -72.3369 },
  { unlocode: "SVPND", name: "Providencia, Colombia", latitude: 13.3594, longitude: -81.3581 },

  { unlocode: "MXLAZ", name: "Los Angeles, USA", latitude: 33.7405, longitude: -118.2755 },

  { unlocode: "AUMEL", name: "Melbourne, Australia", latitude: -37.8236, longitude: 144.9663 },
  { unlocode: "AUSYD", name: "Sydney, Australia", latitude: -33.865, longitude: 151.2094 },
  { unlocode: "NZAKL", name: "Auckland, New Zealand", latitude: -36.855, longitude: 174.743 },
  { unlocode: "NZWLG", name: "Wellington, New Zealand", latitude: -41.2995, longitude: 174.7795 },

  { unlocode: "SGSIN", name: "Singapore", latitude: 1.2644, longitude: 103.8221 },
  { unlocode: "JPTYO", name: "Tokyo (Yokohama), Japan", latitude: 35.45, longitude: 139.61 },
  { unlocode: "HKHKG", name: "Hong Kong", latitude: 22.308, longitude: 114.1746 },
  { unlocode: "JPKGL", name: "Kagoshima, Japan", latitude: 31.596, longitude: 130.557 },
  { unlocode: "KRUSN", name: "Ulsan, South Korea", latitude: 35.5384, longitude: 129.33 },
  { unlocode: "PHMNL", name: "Manila, Philippines", latitude: 14.5833, longitude: 120.9667 },
  { unlocode: "TWTPE", name: "Taipei (Keelung), Taiwan", latitude: 25.134, longitude: 121.739 },
  { unlocode: "VNHTH", name: "Ho Chi Minh City, Vietnam", latitude: 10.75, longitude: 106.6667 },
  { unlocode: "THHKT", name: "Phuket, Thailand", latitude: 7.8839, longitude: 98.3935 },
];
