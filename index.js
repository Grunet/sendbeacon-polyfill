if (!navigator.sendBeacon) {
  navigator.sendBeacon = sendBeaconPolyfill;
}

function sendBeaconPolyfill(url, data) {
  try {
    fetch(url, {
      method: "POST",
      body: data,
      keepalive: true,
    });
  } catch (_unused) {
    return false;
  }

  return true;
}
