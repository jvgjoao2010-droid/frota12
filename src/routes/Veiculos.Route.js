import { Router } from "express";
import { veiculosServices } from "../services/veiculos.Services.js";

export const veiculosRouter = Router();

veiculosRouter.get("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.getall();
        res.json(veiculos);
    }catch (error) {
    
        console.error (error);
    }
});

veiculosRouter.get("/:id", async (req, res) => {
    try {
        const veiculo = await veiculosServices.getById(req.params.id);
        if (!veiculo) {
            return res.status(404).json({ error: "Veículo não encontrado" });
        }
        return res.json(veiculo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao buscar veículo" });
    }
});

veiculosRouter.post("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.create(req.body);
         res.status(201).json(veiculos);
    }catch (error) {
        console.error (error);
        return res.status(500).json({ error: "Erro ao criar veículo" });
    }
});
