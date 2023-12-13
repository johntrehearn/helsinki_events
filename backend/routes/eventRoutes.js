import express, { Router, request, response } from "express";
import { Event } from "../models/eventModel.js";

let router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (!request.body.title) {
      return response
        .status(400)
        .send({ message: "There has been an Error - Title not available" });
    }

    const newEvent = { title: request.body.title };

    const event = await Event.create(newEvent);

    return response.status(201).send(event);
  } catch (error) {
    console.log(error.message);

    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const events = await Event.find({});
    return response.status(200).json({
      data: events,
      count: events.length,
    });
  } catch (error) {
    console.log(error.message);

    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return response
        .status(404)
        .json({ message: "There has been an event error" });
    }

    return response.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.log(error.message);

    response.status(500).send({ message: error.message });
  }
});

export default router;
