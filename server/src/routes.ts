import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

// index, show, create, update, delete
const pointsController = new PointsController();
const itemsController = new ItemsController();

// Items
routes.get('/items', itemsController.index);

// Points
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);

export default routes;