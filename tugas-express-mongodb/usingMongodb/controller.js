import { ObjectId } from "mongodb";
import db from "./db.js";
import fs from "fs";
import path from "path";
const coll = db.collection("productsMongodb");

export const home = (req, res) => {
  res.send("home using npm mongodb");
};

export const getProducts = (req, res) => {
  coll
    .find()
    .toArray()
    .then((r) => res.send(r))
    .catch((err) => res.send(err));
};

export const getProductById = (req, res) => {
  coll.findOne({ _id: new ObjectId(req.params.id) }).then((response) => {
    response == null ? res.send({ message: "no data found" }) : res.send(response);
  });
};

export const insertProduct = (req, res) => {
  try {
    let data = req.body;
    if (req.file) {
      const allowedExt = [".jpg", ".jpeg", ".png"];
      const ext = path.extname(req.file.originalname);
      if (!allowedExt.includes(ext.toLowerCase())) {
        fs.unlinkSync(`./uploads/uploadMongodb/${req.file.filename}`);
        return res.status(422).json({ msg: "Invalid image extension" });
      }
      if (req.file.size > 2000000) {
        fs.unlinkSync(`./uploads/uploadMongodb/${req.file.filename}`);
        return res.status(422).json({ msg: "image must be less than 2 MB" });
      }
      const fname = req.file.filename + ext;
      fs.renameSync(req.file.path, `./uploads/uploadMongodb/${fname}`);
      data.image = fname;
      coll.insertOne(data).then((response) => res.send({ message: "insert product success", response }));
    } else {
      coll.insertOne(data).then((response) => res.send({ message: "insert product success", response }));
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deleteProduct = (req, res) => {
  coll.findOne({ _id: new ObjectId(req.params.id) }).then((product) => {
    if (!product) {
      return res.send({ message: "no data found" });
    }
    const filepath = `./uploads/uploadMongodb/${product.image}`;
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }
    coll.deleteOne({ _id: new ObjectId(req.params.id) }).then((response) => {
      res.send({ message: "delete product success", response });
    });
  });
};

export const updateProduct = (req, res) => {
  coll.findOne({ _id: new ObjectId(req.params.id) }).then((product) => {
    if (!product) {
      return res.send({ message: "no data found" });
    }
    let data = req.body;
    if (req.file) {
      const allowedExt = [".jpg", ".jpeg", ".png"];
      const ext = path.extname(req.file.originalname);
      if (!allowedExt.includes(ext.toLowerCase())) {
        fs.unlinkSync(`./uploads/uploadMongodb/${req.file.filename}`);
        return res.status(422).json({ msg: "Invalid image extension" });
      }
      if (req.file.size > 2000000) {
        fs.unlinkSync(`./uploads/uploadMongodb/${req.file.filename}`);
        return res.status(422).json({ msg: "image must be less than 2 MB" });
      }
      const fname = req.file.filename + ext;
      const filepath = `./uploads/uploadMongodb/${product.image}`;
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      fs.renameSync(req.file.path, `./uploads/uploadMongodb/${fname}`);
      data.image = fname;
      coll
        .updateOne({ _id: new ObjectId(req.params.id) }, { $set: data })
        .then((response) => res.send({ message: "insert product success", response }));
    } else {
      coll
        .updateOne({ _id: new ObjectId(req.params.id) }, { $set: data })
        .then((response) => res.send({ message: "insert product success", response }));
    }
  });
};
