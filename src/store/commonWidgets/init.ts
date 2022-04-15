import {
  $isModalDisplayed,
  $isModalWarningDisplayed,
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