const router = require("express").Router();

router.use(require("./htmlroutes"));
router.use(require("./notesRoutes"));

module.exports = router;