import { IFlight } from "@/interfaces";
import { createStore } from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export interface IState {
  loadingStatus: boolean;
  flights: IFlight[];
}

export default createStore({
  state: {
    loadingStatus: false,
    flights: [],
  },
  getters,
  mutations,
  actions,
});
