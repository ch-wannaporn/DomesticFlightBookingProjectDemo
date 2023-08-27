import { ICity, IFlight } from "@/interfaces";
import { createStore } from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export interface IState {
  loadingStatus: boolean;
  cities: ICity[];
  flights: IFlight[];
  flight?: IFlight;
}

export default createStore({
  state: {
    loadingStatus: false,
    cities: [],
    flights: [],
    flight: undefined,
  },
  getters,
  mutations,
  actions,
});
