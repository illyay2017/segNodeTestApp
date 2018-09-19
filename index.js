const express = require('express');
const Analytics = require('analytics-node');

const app = express();
const port = process.env.PORT || 3000;
const segmentWriteKey = process.env.SEG_WRITE_KEY;
const analytics = new Analytics(segmentWriteKey, { flushAt: 1 });

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/testIdentify', (req, res) => {
  analytics.identify({
    userId: '019mr8mllb3@n',
    anonymousId: 'a80b66d5-b86d-41bd-866f-fe04ee7841af',
    traits: {
      name: 'Michael Stevens',
      email: 'stevensGuy2000@initech.com',
      plan: 'Enterprise',
      friends: 52,
    },
  }, (err, batch) => {
    if (err) {
      console.log(`Error from Segment: ${err}`);
      res.status(400).send('Something went wrong with sending this identify call to Segment');
    } else {
      console.log(`Batch flushed! ${batch}`);
      res.send('Fired an identify test call!');
    }
  });
});

app.get('/testIdentify2', (req, res) => {
  analytics.identify({
    userId: '9000',
    traits: {
      name: 'Michael Dolton',
      email: 'doltonguy@initech.com',
      plan: 'Basic',
      friends: 4,
    },
  }, (err, batch) => {
    if (err) {
      console.log(`Error from Segment: ${err}`);
      res.status(400).send('Something went wrong with sending this identify call to Segment');
    } else {
      console.log(`Batch flushed! ${batch}`);
      res.send('Fired an identify test call!');
    }
  });
});

app.get('/testTrack', (req, res) => {
  analytics.track({
    userId: '123',
    event: 'Subscription Started',
    properties: {
      plan: 'Basic',
      revenue: '32',
    },
    context: {
      ip: '8.8.8.8',
      device: {
        id: '2b6f0cc904d137be2e1730235f5664094b831186',
        model: 'iPhone 6',
        brand: 'Apple',
        manufacturer: 'Apple',
      },
      os: {
        name: 'iOS',
        version: '9.1',
      },
      network: {
        carrier: 'T-Mobile',
      },
      app: {
        version: '3.5.1',
      },
      location: {
        country: 'United States',
        region: 'California',
        city: 'San Francisco',
        latitude: '37.7672319',
        longitude: '-122.4021353',
      },
      locale: {
        language: 'en-us',
      },
    },
  }, (err, batch) => {
    if (err) {
      console.log(`Error from Segment: ${err}`);
      res.status(400).send('Something went wrong with sending this track call to Segment');
    } else {
      console.log(`Batch flushed! ${batch}`);
      res.send('Fired a track test call!');
    }
  });
});

app.get('/testTrack2', (req, res) => {
  analytics.track({
    userId: '12345',
    event: 'Subscription Cancelled',
    properties: {
      plan: 'Basic',
      revenue: '500',
    },
    context: {
      ip: '9.3.8.8',
      device: {
        id: '2b6f0cc904d137be2e1730235f5664094b8311as',
        model: 'iPhone 6',
        brand: 'Apple',
        manufacturer: 'Apple',
      },
      os: {
        name: 'iOS',
        version: '10.1',
      },
      network: {
        carrier: 'AT&T',
      },
      app: {
        version: '3.5.1',
      },
      location: {
        country: 'United States',
        region: 'New York',
        city: 'New York',
        latitude: '37.7672319',
        longitude: '-122.4021353',
      },
      locale: {
        language: 'en-us',
      },
    },
  }, (err, batch) => {
    if (err) {
      console.log(`Error from Segment: ${err}`);
      res.status(400).send('Something went wrong with sending this track call to Segment');
    } else {
      console.log(`Batch flushed! ${batch}`);
      res.send('Fired a track test call!');
    }
  });
});

app.get('/testPage', (req, res) => {
  analytics.page({
    userId: 'some_user_id',
    category: 'Merchant',
    name: 'Settings',
  }, (err, batch) => {
    if (err) {
      console.log(`Error from Segment: ${err}`);
      res.status(400).send('Something went wrong with sending this page call to Segment');
    } else {
      console.log(`Batch flushed! ${batch}`);
      res.send('Fired an page test call!');
    }
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
