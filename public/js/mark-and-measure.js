window.addEventListener("load", thingToMeasure);

function thingToMeasure() {
  performance.mark('start')
  fetch("/api")
    .then(result => result.json())
    .then(json => {
      json.images.forEach(image => console.log(image.name));
      performance.mark('end')
      performance.measure('fetch API','start','end')
      const measure = performance.getEntriesByType('measure')
      console.log(measure)
    });
}
