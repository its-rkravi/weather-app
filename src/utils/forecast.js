const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=dabb466fa010b35fa5f27eceeebb540d&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect weather services", undefined);
    } else if (body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " " +
          body.current.weather_descriptions[0]
      );
    }
  });
};

module.exports = forecast;
