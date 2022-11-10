import express from 'express';
import {
  getAllRecords,
  addRecord,
  updateRecords,
  deleteRecordById,
} from '../controllers/records.controller.js';

const router = express.Router();

router
  .route('/:id')
  .put(updateRecords)
  .delete(deleteRecordById)
  .put(updateRecords);

router.route('/add').post(addRecord);

router.route('/all').get(getAllRecords);
export default router;
