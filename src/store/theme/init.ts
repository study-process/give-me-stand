import { setIsDarkModeEvent } from "./events";
import { $isDarkMode, $isDarkModeLocalStorage } from "./stores";

$isDarkModeLocalStorage
  .onError((err) => console.log(err))
  .onChange(setIsDarkModeEvent)

$isDarkMode.on(setIsDarkModeEvent, (_, isDarkMode) => isDarkMode)

$isDarkMode.watch($isDarkModeLocalStorage)