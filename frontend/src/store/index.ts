import { ICity, IFlight } from "@/types";
import { createStore } from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
import { Search } from "@/classes";

export type IState = {
  loadingStatus: boolean;
  cities: ICity[];
  flights: IFlight[];
  flight?: IFlight;
  searchValues: Search;
};

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
