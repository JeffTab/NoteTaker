const router = require("express").Router();
let notes = require("../db/db.json");

router.get("/api/notes", (req, res) => {
    res.json(notes);
});

router.post("/api/notes", (req, res) => {
    req.body.id = notes.length;
    console.log(req.body);
    notes.push(req.body);
    res.json(req.body);
});

router.delete("/api/notes/:id", (req, res) => {
    const noteToRemove = req.params.id;
    function removeNote(note) {
        return note.id != noteToRemove;
    };
    notes = notes.filter(removeNote);
    res.json(notes);
});

module.exports = router;
