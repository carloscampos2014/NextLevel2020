import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanage from "../models/Orphanage";
import orphanagesView from "../views/orphanages_view";
import * as Yup from "yup";
export default {
  async index(req: Request, res: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ["images"],
    });
    return res.status(200).json(orphanagesView.renderMany(orphanages));
  },

  async one(req: Request, res: Response) {
    const { id } = req.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return res.status(200).json(orphanagesView.render(orphanage));
  },

  async create(req: Request, res: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;
    const requestImages = req.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const orphanagesRepository = getRepository(Orphanage);

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string()
        .required("Nome é Obrigatorio!")
        .min(5, "Nome deve ter pelo menos 5 Letras"),
      latitude: Yup.number().required("Latitude é Obrigatoria!"),
      longitude: Yup.number().required("Longitude é Obrigatoria!"),
      about: Yup.string()
        .required("Informações são Obrigatorias!")
        .max(300, "Informações deve ter no maximo 300 Letras"),
      instructions: Yup.string().required(
        "Instruções de Visita são Obrigatorias!"
      ),
      opening_hours: Yup.string().required("Hora de Vissita é Obrigatorio!"),
      open_on_weekends: Yup.boolean().required(
        "Abre de Fim de Semana é Obrigatorio!"
      ),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = orphanagesRepository.create(data);
    await orphanagesRepository.save(orphanage);

    return res.status(201).json(orphanagesView.render(orphanage));
  },
};
