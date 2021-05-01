const router = require(`express`).Router();
const travellerRoutes = require(`./travellerRoute`);
const locationRoutes = require(`./locationRoute`);
const tripRoutes = require(`./tripRoute`)

router.use(`/traveller`, travellerRoutes);
router.use(`/location`, locationRoutes);
// router.use(`/trip`, tripRoutes);

module.exports = router