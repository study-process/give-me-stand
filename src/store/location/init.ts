import { $currentLocation } from "./stores";
import { getLocationEvent } from "./events";

$currentLocation.on(getLocationEvent, (_, location) => location)