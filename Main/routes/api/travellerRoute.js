const router = require(`express`).Router();

const { Traveller, Location, Trip } = require(`../../models`)

// get all traveller data
router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll({
      include: [{ model: Location }],
    });
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{ model: Trip }, { model: Location }],
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No traveller found with that id!' });
      return;
    }

    res.status(200).json(traveller);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
