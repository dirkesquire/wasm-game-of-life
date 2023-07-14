// import * as wasm from "hello-wasm-pack";
// import * as wasm from "wasm-game-of-life";
// wasm.greet();

// import { Universe } from "wasm-game-of-life";
import { Universe, Cell } from "../pkg/wasm_game_of_life";

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);