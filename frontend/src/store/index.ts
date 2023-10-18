import { IBooking, ICity, IFlight } from "@/types";
import { createStore } from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
import { Passenger, Search } from "@/classes";

export type IState = {
  loadingStatus: boolean;
  searchValues: Search;
  cities: ICity[];
  flights: IFlight[];
  flight?: IFlight;
  passengers: Passenger[];
  booking?: IBooking;
};

export default createStore({
  state: {
    loadingStatus: false,
    searchValues: new Search(),
    cities: [],
    flights: [],
    passengers: [new Passenger()],
  },
  getters,
  mutations,
  actions,
});
