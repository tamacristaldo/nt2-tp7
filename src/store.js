import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colorCount: 6,
        isHard: true,
        colors: [],
        messageDisplay: "",
        pickedColor: "",
        restartText: "",
        headerColor: "steelblue",
    },
    actions: {
        restart({ commit }, colorCount) {
            commit("resetData", colorCount);
        },
        setDifficulty({ commit }, level) {
            commit("modifyDifficulty", level);
        },
        setPickedColor({ commit }, color) {
            commit("modifyPickedColor", color);
        },
    },
    mutations: {
        resetData(state, colorCount) {
            var arr = [];
            var quantity;
            if (this.ItIsHard) {
                quantity = 6;
            } else {
                quantity = 3;
            }
            for (var i = 0; i < colorCount; i++) {
                var newColor = "rgb(" +
                    Math.floor(Math.random() * 256) + ", " +
                    Math.floor(Math.random() * 256) + ", " +
                    Math.floor(Math.random() * 256) + ")";
                arr.push(newColor);
            }
            const ArrayColors = arr;
            state.colors = ArrayColors;
            state.pickedColor = ArrayColors[Math.floor(Math.random() * quantity)];
            state.messageDisplay = "";
            state.restartText = "New Colors!";
            state.headerColor = this.headerColor;
        },
        modifyDifficulty(state, level) {
            state.isHard = level.isHard;
            state.colorCount = level.colorCount;
        },
        modifyPickedColor(state, color) {
            if (color == state.pickedColor) {
                state.messageDisplay = "You Picked Right!";
                state.restartText = "Play Again!";
                state.headerColor = state.pickedColor;           
            }
            else {
                state.messageDisplay = "Try Again!";
                state.restartText = "New Colors!";
                state.headerColor = "steelblue";                
            }
            const isRight = color == state.pickedColor;            
            state.colors = state.colors.map((c) =>
                isRight ? state.pickedColor : c == color ? "#232323" : c
            );                        
        },
    }
})