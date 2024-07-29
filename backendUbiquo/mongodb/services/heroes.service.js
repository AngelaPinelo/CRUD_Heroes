const heroInformation = require('../schemas/hero_information');
const Gender = require('../schemas/gender');
const publisher = require('../schemas/publisher');


const getAllHeroes = async () => {
    try {
        const heroes = await heroInformation.aggregate([
            {
                $lookup: {
                    from: 'gender',
                    localField: 'gender_id',
                    foreignField: 'gender_id',
                    as: 'gender_info'
                }
            },
            {
                $unwind: {
                    path: '$gender_info',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'alignment',
                    localField: 'alignment_id',
                    foreignField: 'alignment_id',
                    as: 'alignment_info'
                }
            },
            {
                $unwind: {
                    path: '$alignment_info',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'publisher',
                    localField: 'publisher_id',
                    foreignField: 'publisher_id',
                    as: 'publisher_info'
                }
            },
            {
                $unwind: {
                    path: '$publisher_info',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    hero_id: 1,
                    name: 1,
                    eye_color: 1,
                    hair_color: 1,
                    skin_color: 1,
                    height: 1,
                    weight: 1,
                    race: 1,
                    publisher_id: 1,
                    gender_id: 1,
                    alignment_id: 1,
                    publisher_name: '$publisher_info.publisher_name',
                    gender_name: '$gender_info.name',
                    alignment_name: '$alignment_info.name'
                }
            },
        ]);

        return heroes;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const getHeroById = async (hero_id) => {
    try {
        const hero = await heroInformation.aggregate([
            {
                $match: { hero_id: parseInt(hero_id) }
            },
            {
                $lookup: {
                    from: 'gender',
                    localField: 'gender_id',
                    foreignField: 'gender_id',
                    as: 'gender_info'
                }
            },
            {
                $unwind: {
                    path: '$gender_info',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'alignment',
                    localField: 'alignment_id',
                    foreignField: 'alignment_id',
                    as: 'alignment_info'
                }
            },
            {
                $unwind: {
                    path: '$alignment_info',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'publisher',
                    localField: 'publisher_id',
                    foreignField: 'publisher_id',
                    as: 'publisher_info'
                }
            },
            {
                $unwind: {
                    path: '$publisher_info',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    hero_id: 1,
                    name: 1,
                    eye_color: 1,
                    hair_color: 1,
                    skin_color: 1,
                    height: 1,
                    weight: 1,
                    race: 1,
                    publisher_id: 1,
                    gender_id: 1,
                    alignment_id: 1,
                    publisher_name: '$publisher_info.publisher_name',
                    gender_name: '$gender_info.name',
                    alignment_name: '$alignment_info.name'
                }
            },
        ]);

        if (hero.length > 0) {
            return hero[0];
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

const getAllPublishers = async () => {
    try {
        const publishers = await publisher.find();

        return publishers;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const updateHeroById = async (hero_id, updateData) => {
    try {
        const result = await heroInformation.updateOne(
            { hero_id: hero_id },
            { $set: updateData }
        );

        if (result.modifiedCount > 0) {
            return { success: true, message: 'Héroe actualizado exitosamente' };
        } else {
            return { success: false, message: 'Héroe no encontrado o no hay cambios' };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error al actualizar el héroe' };
    }
}

const createHero = async (heroData) => {
    try {
        const newHero = new heroInformation(heroData);
        const result = await newHero.save();

        return { success: true, data: result };
    } catch (error) {
        console.error('Error al crear el héroe:', error);
        return { success: false, message: 'Error al crear el héroe' };
    }
};

const deleteHeroById = async (hero_id) => {
    try {
       
        const result = await heroInformation.deleteOne({ hero_id });
      
        if (result.deletedCount > 0) {
            return { success: true, message: 'Héroe eliminado exitosamente' };
        } else {
            return { success: false, message: 'Héroe no encontrado' };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error al eliminar el héroe' };
    }
}



module.exports = { 
    getAllHeroes,
    deleteHeroById,
    updateHeroById,
    getAllPublishers,
    getHeroById,
    createHero
};
