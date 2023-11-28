const express = require('express')
const fsp = require('fs').promises;
const app = express()
const port = 5001




// Middleware for parsing req bodies to JSON (req.body)
app.use(express.json());

app.get('/api/volume', (req, res, next) => {
  fsp.readFile('data1.json')
    .then((data) => {
      const json = JSON.parse(data);
      res.send({ volume: json.volume });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Data file not found or corrupt');
    });
});

app.put('/api/volume', (req, res) => {
  fsp.readFile('data.json')
    .then((data) => {
      const json = JSON.parse(data);
      json.volume = Number(req.body.volume);
      fsp.writeFile('data1.json', JSON.stringify(json))
        .then(() => {
          res.send({ volume: Number(req.body.volume) });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send('Data file not found or corrupt');
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('Data file not found or corrupt');
      });
});

/*/ Path params
app.get('/api/songs/:id', (req, res) => {
  res.send(req.params.id);
});
*/
app.post('/api/connectBluetooth', (req, res) => {
  const { deviceName } = req.body;

  if (deviceName) {
      const selectedDevice = knownDevices.find(device => device.name === deviceName);

      if (selectedDevice) {
          // Simulate a successful Bluetooth connection 
          console.log(`Connecting to Bluetooth device: ${selectedDevice.name} (${selectedDevice.address})`);

          //Bluetooth connection logic
          const btSerial = new bluetooth.BluetoothSerialPort();

          btSerial.connect(selectedDevice.address, 1, () => {
              console.log('Bluetooth connected');
              btSerial.close();
          });

          //Send a success message
          res.json({ status: 'Bluetooth connected', device: selectedDevice });
      } else {
          res.status(404).json({ error: 'Bluetooth device not found.' });
      }
  } else {
      res.status(400).json({ error: 'Device name is required for Bluetooth connection.' });
  }
});

const logError = (err, req, res, next) => {
  console.error(err);
  next(err);
};

const handleError = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send('An error occured');
};

// Error handling middleware
app.use(logError);
app.use(handleError);





/*
app.get('/api', (req, res) => {
  res.send('Hello World!')
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/*/Bluetooth connection
const bluetooth = require('bluetooth-serial-port'); // Install it using: npm install bluetooth-serial-port


app.use(express.json());

*/

