import AnimalRepository from '../repositories/animal.repository.js';

async function createAnimal(animal){
    return await AnimalRepository.insertAnimal(animal);
}

async function getAnimais(){
    return await AnimalRepository.getAnimais();
}

async function getAnimal(id){
    return await AnimalRepository.getAnimal(id);
}

async function deleteAnimal(id){
    return await AnimalRepository.deleteAnimal(id);
}

async function updateAnimal(animal){
    return await AnimalRepository.updateAnimal(animal);
}

export default {
    createAnimal,
    getAnimais,
    getAnimal,
    deleteAnimal,
    updateAnimal
}