import {
  $isLogoutModalVisible,
  $isModalDisplayed,
  $isModalWarningDisplayed, setLogoutModalVisibleEvent,
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

$isLogoutModalVisible.on(setLogoutModalVisibleEvent, (_, isVisible) => isVisible)