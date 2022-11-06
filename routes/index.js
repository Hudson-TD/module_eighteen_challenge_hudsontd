const router = require("express").Router();
const apiRoutes = require("./api");
// const thoughtRoutes = require("./api/thoughtRoutes");

router.use("/api", apiRoutes);
// router.use("/thoughts", thoughtRoutes);

module.exports = router;
