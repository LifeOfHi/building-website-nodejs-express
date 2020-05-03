const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (request, response) => {
    const speakers = await speakersService.getList();
    const allArtwork = await speakersService.getAllArtwork();
    response.render('layout', {
      pageTitle: 'Speakers',
      template: 'speakers',
      speakers,
      allArtwork,
    });
  });

  router.get('/:shortname', async (request, response) => {
    const speaker = await speakersService.getSpeaker(request.params.shortname);
    const speakerArtwork = await speakersService.getArtworkForSpeaker(request.params.shortname);
    // console.log(speaker);
    // console.log(speakerArtwork);
    response.render('layout', {
      pageTitle: 'Speakers',
      template: 'speakers-detail',
      speaker,
      speakerArtwork,
    });
    // return response.send(`Detail page of ${request.params.shortname}`);
  });

  return router;
};
