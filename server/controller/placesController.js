const Place = require('../model/PlacesModel'); // Assuming you have a Place model defined

// Create a new place
exports.createPlace = async (req, res) => {
    try {
        const { name, location, description } = req.body;
        const newPlace = new Place({ name, location, description });
        const savedPlace = await newPlace.save();
        res.status(201).json(savedPlace);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all places
exports.getAllPlaces = async (req, res) => {
    try {
        const places = await Place.find();
        console.log(places);
        res.json(places);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single place by ID
exports.getPlaceById = async (req, res) => {
    try {
        const place = await Place.findById(req.params.id);
        if (!place) {
            return res.status(404).json({ message: 'Place not found' });
        }
        res.json(place);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a place by ID
exports.updatePlace = async (req, res) => {
    try {
        const { name, location, description } = req.body;
        const updatedPlace = await Place.findByIdAndUpdate(req.params.id, { name, location, description }, { new: true });
        if (!updatedPlace) {
            return res.status(404).json({ message: 'Place not found' });
        }
        res.json(updatedPlace);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a place by ID
exports.deletePlace = async (req, res) => {
    try {
        const deletedPlace = await Place.findByIdAndDelete(req.params.id);
        if (!deletedPlace) {
            return res.status(404).json({ message: 'Place not found' });
        }
        res.json({ message: 'Place deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
