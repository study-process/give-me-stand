import {
  $serverResponse, $serverResponseError, $serverResponseIsLoading,
  serServerResponseEvent, serServerResponseLoadingEvent, setServerResponseErrorEvent
} from "./index";

$serverResponse
  .on(serServerResponseEvent, (_, response) => response)

$serverResponseIsLoading
  .on(serServerResponseLoadingEvent, (_, isLoading) => isLoading)

$serverResponseError.on(
  setServerResponseErrorEvent, (_, errorMessage) => errorMessage)