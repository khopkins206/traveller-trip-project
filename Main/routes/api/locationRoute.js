const router = require(`express`).Router();

const { Traveller, Location, Trip } = require(`../../models`)

// get all traveller data
router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll({
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const locationData = await Location.findByPk(req.params.id, {
      include: [{ model: Traveller }],
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location found with that id!' });
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
