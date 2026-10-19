export const contactDetails = {
  phone: '0312 400 05 62',
  phoneHref: 'tel:+903124000562',
  street: 'Konutkent Mahallesi, 3028. Cadde',
  building: 'Kule Evo No: 109',
  district: 'Çankaya / Ankara',
};

const addressQuery = `${contactDetails.street}, ${contactDetails.building}, ${contactDetails.district}`;
export const contactMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`;
