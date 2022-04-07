import { $isHeaderDisplayed, setHeaderUnVisibleEvent, setHeaderVisibleEvent } from "./index";

$isHeaderDisplayed
  .on(setHeaderVisibleEvent, (_) => true)
  .on(setHeaderUnVisibleEvent, (_) => false)
