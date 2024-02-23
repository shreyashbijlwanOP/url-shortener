const { ytid } = require("ytid");
const urlModal = require("../models/url.model");

const createUrlShortId = async (req, res) => {
  const url = req?.body?.url;

  if (!url) {
    return res.status(400).json({ message: "Url is required" });
  }
  const shortId = ytid();
  try {
    const createdUrl = await urlModal.create({
      shortId,
      redirectLink: url,
    });
    return res
      .status(201)
      .json({ message: "created successfully", sortUrl: createdUrl });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const redirectToUrl = async (req, res) => {
  const shortId = req.params.id;
  try {
    const link = await urlModal.findOneAndUpdate(
      { shortId },
      { $push: { visitedHistory: { timestamp: Date.now() } } },
      { new: true }
    );
    if (!link._id) {
      throw new Error("No Link Found");
    }
    const redirectLink = link.redirectLink;

    return res.status(304).redirect(redirectLink);
  } catch (error) {
    return res.status(400).json({ type: "error", message: error.message });
  }
};

const getAllUrls = async (req, res) => {
  try {
    const links = await urlModal.find({});
    return res.status(200).json(links);
  } catch (error) {
    return res.status(500).json({ type: "error", message: error.message });
  }
};

module.exports = {
  createUrlShortId,
  redirectToUrl,
  getAllUrls,
};
