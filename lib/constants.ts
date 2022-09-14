export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const isClient = typeof document !== 'undefined';
export const isServer = !isClient;
// @ts-ignore
export const siteURL = new URL(process.env.NEXT_PUBLIC_SITE_URL);
export const siteOrigin = siteURL.origin;

// we like putting this in the JavaScript console,
// as our signature.
// you can delete it if not needed.

export const atelierLog = `

 █████╗█████████████████╗    ███████████████╗   
██╔══██╚══██╔══██╔════██║    ████╔════██╔══██╗  
███████║  ██║  █████╗ ██║    ███████╗ ██████╔╝  
██╔══██║  ██║  ██╔══╝ ██║    ████╔══╝ ██╔══██╗  
██║  ██║  ██║  █████████████████████████║  ████╗
╚═╝  ╚═╝  ╚═╝  ╚══════╚══════╚═╚══════╚═╝  ╚═╚═╝
                                               
   From atelier. https://atlrdsgn.com
`;

// TODO: update this data
export const defaultMeta = {
  title: 'Chandler Chappell®',
  description: `A minimalist's boilerplate — Next.js with TypeScript.`,
  ogImage: `${siteOrigin}/social.jpg`,
  twitter: {
    handle: '@chvndlerch',
    site: '@chvndlerch',
  },
};

// TODO: add variable (NEXT_PUBLIC_GA_TRACKING_ID) to env if necessary
// export const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;