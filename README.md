[![Build Status](https://travis-ci.org/siemiatj/airport-internetz.svg?branch=master)](https://travis-ci.org/siemiatj/airport-internetz)

# airport-internetz
List of free/paid wifi connections available on the airports across the world.

## Contributing
Because there are bazillions (not brazillions, note) of airports existing (or [41,821](https://www.cia.gov/library/publications/the-world-factbook/fields/2053.html) if you prefer exact numbers) contributing is the key to make this list complete. And sharing is caring.

So if you want to add an airport that is missing, please create a PR with data formatted in the following way :

```javascript
  "country using ISO code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2": {
    "city": [
      {
        "name": "Local airport name",
        "code": "Airport code using IATA format: http://www.iata.org/publications/Pages/code-search.aspx",
        "free": [
          {
            "name": "Name of the network",
            "description": "Description what is needed to be able to join (or what is the cost of access)",
            "active_date": "Last date when you were able to connect to this network in the following format : ''yyyy, mm, dd'"
          }
        ]
        "paid": "If there are no networks of paid/free type set the corresponding key to false"
      }
    ]
  },
```

and add it to a relevant file in `cointries` folder or create a new `ISO_NAME.json` file.
