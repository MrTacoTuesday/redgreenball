import State from "./state/State.mjs";



class App {
    static readonly MIN_SCREEN_WIDTH = 500;
    static readonly MIN_SCREEN_HEIGHT = 300;
    static readonly STATE = new State();
    static {
        App.STATE.a = 2;
        console.log(App);
    }
}