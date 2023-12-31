import { Request, Response } from "express"
import Glasses from "../database/models/Glasses"

class GlassesService {
  async getById(request: Request, response: Response) {
    const { id } = request.params

    try {
      const glasses = await Glasses.findById(id)

      return response.status(200).json(glasses)
    } catch (error) {
      return response.status(500).json({ msg: "error" })
    }
  }
  
  async getAll(request: Request, response: Response) {
    const allGlasses = await Glasses.find()
    
    return response.status(200).json(allGlasses)
  }

  async create(request: Request, response: Response) {
    const { name, market, type, price, stock, tags } = request.body  
    
    if (name &&
        market &&
        type &&
        price && 
        tags &&
        stock) {
          const glasses = await Glasses.create({
            name: name,
            market: market,
            type: type,
            price: price,
            stock: stock,
            tags: tags
          })
      
          return response.status(201).json(glasses)
        }
        
    return response.status(400).json({ msg: "Preencha todos os campus" })
  }
  
  async update(request: Request, response: Response) {
  }

  async delete(request: Request, response: Response) {

  }

  async deleteAll(request: Request, response: Response) {
  }
}

export default new GlassesService()