import {ressource, soldier, population,days, workers_ressource_days , soldierList,base_pv  } from './ressource'
import { house, gold_farm, iron_farm, GAS_farm, soldier_farm } from './building'
import { aliens , aliens_soldier} from './aliens'
import { worker } from './worker'
import { step } from './step'
import { settings } from './settings'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  ressource: ressource,
  population : population,
  soldier: soldier,
  days: days,
  house : house,
  gold_farm : gold_farm,
  iron_farm : iron_farm,
  GAS_farm : GAS_farm,
  soldier_farm : soldier_farm,
  workers_ressource_days: workers_ressource_days,
  soldierList: soldierList,
  aliens:aliens,
  aliens_soldier: aliens_soldier,
  step:step,
  worker: worker,
  settings : settings,
  base_pv : base_pv

})

export default allReducers
