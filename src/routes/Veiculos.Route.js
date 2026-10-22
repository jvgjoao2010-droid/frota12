import { Router } from "express";
import { veiculosServices } from "../services/veiculos.Services.js";

export const veiculosRouter = Router();

veiculosRouter.get("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.getall();
        return res.json(veiculos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao buscar veículos." });
    }
});

veiculosRouter.get("/:id", async (req, res) => {
    try {
        const veiculo = await veiculosServices.getById(req.params.id);
        return res.json(veiculo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao buscar veículo." });
    }
});

veiculosRouter.post("/", async (req, res) => {
    try {
        const veiculo = await veiculosServices.create(req.body);
        return res.status(201).json(veiculo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao cadastrar veículo." });
    }
});

veiculosRouter.delete("/:id", async (req, res) => {
    try {
        const veiculo = await veiculosServices.delete(req.params.id);
        return res.json(veiculo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao excluir veículo." });
    }
});

veiculosRouter.put("/:id", async (req, res) => {
    try {
        const veiculo = await veiculosServices.update(req.params.id);
        return res.json(veiculo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao atualizar veículo." });
    }
});