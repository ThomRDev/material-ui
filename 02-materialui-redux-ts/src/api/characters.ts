import { instance } from './base.api'

const endpoint = "character"

export const characters = {
  getAll : ({ page = 1 }:{ page?:number }) => {
    return instance.get(endpoint,{
      params:{
        page
      }
    })

  },
  getById : (id:string) => {
    return instance.get(`${endpoint}/${id}`)
  }
}