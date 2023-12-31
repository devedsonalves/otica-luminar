import { Router } from "express";
import GlassesService from "../services/GlassesService";

const GlassesRouter = Router()

GlassesRouter.get("/glasses/:id", GlassesService.getById)

GlassesRouter.get("/glasses", GlassesService.getAll)

GlassesRouter.post("/glasses", GlassesService.create)

GlassesRouter.patch("/glasses/:id", GlassesService.update)

GlassesRouter.delete("/glasses/:id", GlassesService.delete)

GlassesRouter.delete("/glasses/all", GlassesService.deleteAll)

export default GlassesRouter