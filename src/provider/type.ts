export type CustomDataProvider = {  
  getList: (page?: number, perPage?: number, filter?: any, sort?:any, meta?: any) => Promise<any>;
  getOne: (id: string, meta?: any) => Promise<any>;
  save: (resources: any, meta?: any) => Promise<any>;
  update: (id: string, resources: any, meta?: any) => Promise<any>;
  delete: (id: string) => Promise<any>;
  getManyReference: (id: string, meta?: any) => Promise<any>;
  deleteMany: (filter?: any, meta?: any) => Promise<any>;
  getMany: (filter?: any, sort?: any, page?: number, perPage?: number, meta?: any) => Promise<any>;
  updateMany: (resources: any, filter?: any, meta?: any) => Promise<any>;
}
