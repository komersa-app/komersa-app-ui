export type CustomDataProvider = {  
  getList: (page?: number, perPage?: number, filter?: any, sort?:any, meta?: any) => Promise<any>;
  getOne: (id: string, meta?: any) => Promise<any>;
  save: (resources: any, meta?: any) => Promise<any>;
  update: (id: string, resources: any, meta?: any) => Promise<any>;
  delete: (id: string) => Promise<any>;    
}