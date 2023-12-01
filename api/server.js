const express = require('express')
const fsp = require('fs').promises;
const app = express()
const port = 5001




// Middleware for parsing req bodies to JSON (req.body)
app.use(express.json());


// /api/volume
app.get('/api/volume', (req, res, next) => {
  fsp.readFile('data.json')
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
      fsp.writeFile('data.json', JSON.stringify(json))
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


// /api/bluetooth
app.get('/api/bluetooth', (req, res) => {
  res.json({ devices: data.bluetooth.devices });
});

// /api/bluetooth/connected
app.route('/api/bluetooth/connected')
    .get((req, res) => {
        res.json({ connected: data.bluetooth.connected });
    })
    .put((req, res) => {
        const { deviceId } = req.body;
        if (data.bluetooth.devices.some(device => device.id === deviceId)) {
            data.bluetooth.connected = deviceId;
            saveData();
            res.json({ message: 'Connected device updated successfully' });
        } else {
            res.status(400).json({ error: 'Device not found' });
        }
    });
    
// /api/playlist
app.get('/api/playlist', (req, res) => {
  const { next } = req.query;
  const startIndex = next ? parseInt(next, 10) : 0;
  const songs = data.playlist.slice(startIndex, startIndex + 5);
  res.json({ playlist: songs });
});


/*/ Path params
app.get('/api/songs/:id', (req, res) => {
  res.send(req.params.id);
});
*/


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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}); 




