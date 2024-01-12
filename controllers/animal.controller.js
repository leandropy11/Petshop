//Trata as requisições

import animalService from "../services/animal.service.js";

async function createAnimal(req, res, next){
    try {
        let animal = req.body;
        if(!animal.nome || !animal.tipo || !animal.proprietario_id){
            throw new Error("Nome, Telefone e Proprietario ID são obrigatórios");
        }

        //AnimalService

        animal = await animalService.createAnimal(animal);
        res.send(animal);
    } catch(err) {
        next(err);
    }
}

async function getAnimais(req, res, next){
    try{
        res.send(await animalService.getAnimais());
    } catch(err){
        next(err);
    }
}

async function getAnimal(req, res, next){
    try{
        res.send(await animalService.getAnimal(req.params.id));
    } catch(err){
        next(err);
    }
}

async function deleteAnimal(req, res, next){
    try{
        await animalService.deleteAnimal(req.params.id);
        res.end();
    } catch(err) {
        next(err);
    }
}

async function updateAnimal(req, res, next){
    try{
        let animal = req.body;
        if(!animal.animal_id || !animal.nome || !animal.tipo){
            throw new Error('Animal ID, Nome e tipo são obrigatórios');
        }
        animal = await animalService.updateAnimal(animal);
        res.send(animal);
    } catch(err){
        next(err);
    }
}

export default {
    createAnimal,
    getAnimais,
    getAnimal,
    deleteAnimal,
    updateAnimal
}