import {
  $isDarkMode,
  $isModalDisplayed,
  $isModalWarningDisplayed, setDarkModeEvent,
  setModalUnVisibleEvent,
  setModalVisibleEvent,
  setModalWarningUnVisibleEvent,
  setModalWarningVisibleEvent
} from "./index";

$isModalDisplayed
  .on(setModalVisibleEvent, (_) => true)
  .on(setModalUnVisibleEvent, (_) => false)
$isModalWarningDisplayed
  .on(setModalWarningVisibleEvent, (_) => true)
  .on(setModalWarningUnVisibleEvent, (_) => false)

$isDarkMode.on(
  setDarkModeEvent, (_, isDarkMode) => isDarkMode)