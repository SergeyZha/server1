import { records, db } from '../data/index.js';

// get all records
export const getAllRecords = (req, res) => {
  res.send(records);
};

// add new Record
export const addRecord = async (req, res) => {
  try {
    const data = req.body;

    records.push(data);

    await db.write();
    res.send(records);
  } catch (error) {
    next(error);
  }
};

// update Record
export const updateRecords = async (req, res) => {
  const { id } = req.params;
  let matchedRec = await records.find((record) => record.id === id);

  if (matchedRec) {
    matchedRec.name = req.body.name;
    await db.write();
    res.send(matchedRec);
  } else {
    const error = new Error('no such record in database');

    error.status = 403;
    throw error;
  }
};

// delete song by Id
export const deleteRecordById = async (req, res) => {
  try {
    const { id } = req.params;

    const recordIndex = records.findIndex((record) => record.id === id);
    if (recordIndex > -1) {
      records.splice(recordIndex, 1);

      await db.write();
      res.send('This Record has been deleted');
    } else {
      const error = new Error();

      error.status = 401;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};
