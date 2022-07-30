const asyncHandler = require("express-async-handler");

const User = require("../models/userModels");
const Ticket = require("../models/ticketModel");

const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "getTickets" });
});

const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "createTicket" });
});

module.exports = {
  getTickets,
  createTicket,
};
