import { ICity, IFlight } from "@/interfaces";
import { createStore } from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
import { Search } from "@/classes";

export interface IState {
  loadingStatus: boolean;
  cities: ICity[];
  flights: IFlight[];
  flight?: IFlight;
  searchValues: Search;
}

export default createStore({
  state: {
    loadingStatus: false,
    cities: [],
    flights: [],
    flight: undefined,
    searchValues: new Search(),
  },
  getters,
  mutations,
  actions,
});
