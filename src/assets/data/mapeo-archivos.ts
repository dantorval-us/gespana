export const MAPEO_ARCHIVOS: { [key: string]: () => Promise<any> } = {
  'comunidades-autonomas': () => import('../../assets/data/comunidades-autonomas'),
  'provincias': () => import('../../assets/data/provincias'), 
};
