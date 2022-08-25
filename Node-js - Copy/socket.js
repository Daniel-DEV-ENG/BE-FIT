let io;
const express=require('express');
const http = require("http");
const app=express();
const { Server } = require("socket.io");

module.exports = {
 
  init: httpServer => {
    consol.log("here*********************************");
    const server = http.createServer(app);

   const io = new Server(server, {
     cors: {
       origin: "http://localhost:3006",
       methods: ["GET", "POST"],
     },
   });
     
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error('Socket.io not initialized!');
    }
    return io;
  }
};
