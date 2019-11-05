const enEvent = require("events");
const emitter = new enEvent.EventEmitter();

emitter.on("minEvent", (status, klubb) => {
    console.log(`${klubb}: ${status}.`);
});

emitter.emit("minEvent", "Er på 1. plass", "Liverpool");
emitter.emit("minEvent", "Er rett under midten av tabellen", "Manchester United");