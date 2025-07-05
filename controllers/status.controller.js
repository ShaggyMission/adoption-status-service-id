const AdoptionStatus = require('../models/status.model');

exports.getStatusByPetId = async (req, res) => {
  try {
    const { petId } = req.params;

    const status = await AdoptionStatus.findOne({ petId });

    if (!status) {
      return res.status(404).json({ message: 'Status not found for this pet.' });
    }

    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch status', error: error.message });
  }
};
