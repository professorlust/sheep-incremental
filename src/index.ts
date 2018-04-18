import Vue from "vue";

import GameState from "./gameState";
import GameEngine from "./gameEngine";

import ResourceComponent from "./components/resource-component";
import ProducerComponent from "./components/producer-component";

import filters from "./filters";

const interval = 50;

let gameState = new GameState();

let gameEngine = new GameEngine(gameState);

let vm = new Vue({
    el: "#app",
    data: gameState,
    created() {
        this.$on('game-event', (data: any) => gameEngine.handleEvent(data))
    },
    methods: {
        gatherGrass: () => gameEngine.gatherGrass()
    },
    filters,
    components: {
        'resource-component': ResourceComponent,
        'producer-component': ProducerComponent
    }
});

let handle = window.setInterval(() => gameEngine.tick(Date.now()), interval);
