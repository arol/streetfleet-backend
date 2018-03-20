'use strict';
const car = require('./controllers/carsController');
const test = require('./controllers/testController');
const company = require('./controllers/companiesController');

const Router = require('koa-router');
const router = new Router({
    prefix: '/api/v1'
});

const authorize = async (ctx, next) => {
  if (!ctx.user) {
    ctx.status = 401;
    ctx.body = 'Unauthorized';
    return;
  }

  await next();
};

router
  .get('/testroute', test.testAdd)

  // .get('/fleet', car.getFleet)
  // .put('/fleet/car/:license_number', car.addOrUpdate)
  // .get('/fleet/car/:license_number', car.get)
  // .delete('/fleet/car/:license_number', car.delete)
  // //NOTE: car.getTripLogs will have to be faked for MVP
  // .get('/fleet/car/trips/:license_number', car.getTripLogs)
  // .post('/fleet/car/location', car.postLocation
  //
  .post('/company/sign-up', company.signUp)
  // .get('/company/sign-in', company.signIn)


  .get('/*', ctx => {
    ctx.body = `<h1>Sorry the page does not exist</h1>`
    ctx.status = 404
  });

module.exports = router;