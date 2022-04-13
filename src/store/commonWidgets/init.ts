import { $isModalDisplayed, setModalUnVisibleEvent, setModalVisibleEvent } from "./index";

$isModalDisplayed
  .on(setModalVisibleEvent, (_) => true)
  .on(setModalUnVisibleEvent, (_) => false)
