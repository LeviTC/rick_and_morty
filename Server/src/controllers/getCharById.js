const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    let id = req.params.id;

    axios(URL + id)
        .then((response) => {
            let character = response.data;
            if (character.name) {
                let { id, name, gender, species, origin, status, image } = character;
                return res.status(200).json({ id, name, gender, species, origin: origin.name, status, image })
            } else {
                return res.status(404).send("Not Found");
            };
        })
        .catch(error => res.status(500).json({ error: error.message }));
};


module.exports = {
    getCharById,
};



// const axios = require("axios");

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.data)
//         .then(({ name, gender, species, origin, image, status }) => {
//             const character = {
//                 id,
//                 name,
//                 gender,
//                 species,
//                 origin: origin.name,
//                 image,
//                 status
//             };
//             return res.writeHead(200, { "Content-Type": "application/json" })
//                 .end(JSON.stringify(character))
//         })
//         .catch(error => {
//             return res.writeHead(500, { "Content-Type": "text/plain" })
//                 .end(error.message);
//         });
// };

// module.exports = getCharById;