// controllers/destination.controller.ts

import { Request, Response } from "express";
import { Destination } from "../model/destination.model";

// Create destination
const createDestination = async (req: Request, res: Response) => {
  try {
    const destination = await Destination.create(req.body);

    res.status(201).json({
      success: true,
      message: "Destination created successfully",
      data: destination,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create destination",
      error: error.message,
    });
  }
};

// Create destination
const createManyDestination = async (req: Request, res: Response) => {
  try {
    const destinations = await Destination.insertMany(req.body);

    res.status(201).json({
      success: true,
      message: "Destinations created successfully",
      data: destinations,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create destinations",
      error: error.message,
    });
  }
};

// Get all destinations
const getAllDestinations = async (_req: Request, res: Response) => {
  try {
    const destinations = await Destination.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Destinations fetched successfully",
      data: destinations,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch destinations",
      error: error.message,
    });
  }
};

// Get single destination
const getSingleDestination = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const destination = await Destination.findById(id);

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Destination fetched successfully",
      data: destination,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch destination",
      error: error.message,
    });
  }
};

// Update destination
const updateDestination = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updatedDestination = await Destination.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedDestination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Destination updated successfully",
      data: updatedDestination,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to update destination",
      error: error.message,
    });
  }
};

// Delete destination
const deleteDestination = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedDestination = await Destination.findByIdAndDelete(id);

    if (!deletedDestination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Destination deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete destination",
      error: error.message,
    });
  }
};

export const destinationControllers = {
  createDestination,
  createManyDestination,
  getAllDestinations,
  getSingleDestination,
  updateDestination,
  deleteDestination,
};
