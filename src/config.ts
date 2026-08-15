// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'SmartMooV';
export const SITE_DESCRIPTION = 'Movemos marcas, ligamos pessoas. Publicidade em movimento para o seu negócio.';
export const SITE_URL = 'https://smartmoov.pt';
// Webmail PTisp (serviço de email gratuito associado ao registo do domínio).
// As contas deste domínio vivem no servidor de parqueamento da PTisp
// (daparking2.webserver.pt), acessível também como mail.smartmoov.pt.
// Endpoint verificado: Roundcube, login com o email completo + password.
// O HTTPS direto em mail.smartmoov.pt usa certificado de outro hostname
// (browser mostra aviso) — por isso apontamos para o hostname com certificado válido.
export const WEBMAIL_URL = 'https://daparking2.webserver.pt/webmail/';
export const BRAND_NAME = 'SmartMooV';
export const CF_WEB_ANALYTICS_TOKEN = 'fd64034b034242d88f6caf53a1ba1df9'; // Cloudflare Web Analytics → JS snippet
export const BRAND_LOGO_TEXT = 'SM';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/people/smartmoov/61593181980527/',
};

export const NAV_LINKS = [
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#faq', label: 'Perguntas Frequentes' },
];

export const FOOTER_LINKS = [
  {
    title: 'SmartMooV',
    links: [
      { label: 'Como Funciona', href: '#como-funciona' },
      { label: 'Perguntas Frequentes', href: '#faq' },
      { label: 'Entre em contacto', href: '#form-section' },
    ],
  },
  {
    title: 'Marcas',
    links: [
      { label: 'SmartMooV para Marcas', href: '/' },
    ],
  },
  {
    title: 'Condutores',
    links: [
      { label: 'SmartMooV para Condutores', href: '/drivers/' },
    ],
  },
];
