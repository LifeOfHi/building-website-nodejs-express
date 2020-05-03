const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (request, response) => {
    const topSpeakers = await speakersService.getList();
    const allArtwork = await speakersService.getAllArtwork();
    // console.log(allArtwork);
    response.render('layout', { pageTitle: 'Welcome', template: 'index', topSpeakers, allArtwork });
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};
