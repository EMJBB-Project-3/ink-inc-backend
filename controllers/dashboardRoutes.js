const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// dashboard GET - http://localhost:3001/dashboard/
// router.get('/', withAuth, (req, res) => {
//   Strain.findAll({
//     attributes: [
//       'id',
//       'img',
//     ],
//   })
//     .then(strainData => {
//       const strains = strainData.map(strain => strain.get({ plain: true }));
//       res.render('dashboard', {
//         strains,
//         logged_in: req.session.logged_in
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;