// Canonical public URL. Also referenced in static/robots.txt and static/sitemap.xml.
export const SITE_URL = 'https://edwardbatt.com/';

export const EMAIL = 'edward@edwardbatt.com';

// Paste the booking link (Google Calendar appointment page or Calendly) here when it exists.
// While it is empty, "Book a call" buttons open an email instead.
export const BOOKING_URL = '';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/edward-batt';

export const bookingHref = BOOKING_URL
	? BOOKING_URL
	: `mailto:${EMAIL}?subject=${encodeURIComponent('Discovery call')}&body=${encodeURIComponent(
			'Hi Edward,\n\nI would like to book a 20-minute discovery call.\n\nAbout us:\nWhere work gets stuck:\nGood times for a call:\n'
		)}`;
