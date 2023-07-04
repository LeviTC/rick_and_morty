

let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
    myFavorites = myFavorites.filter(saves => saves.id != req.params.id);
    return res.status(200).json({ myFavorites });
};

module.exports = {
    postFav,
    deleteFav,
};