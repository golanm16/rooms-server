const room = require("../controllers/roomController");

require("../db").connect();

const roomObj = {
  name: "test room",
  maxOfPeople: 7,
  value: 250,
};

const creditsObj = {
  monthly: 100,
  currentMonth: 85,
  nextMonth: 97,
  left: 3,
};

const testAddroom = async () => {
  try {
    const addedroom = await room.create(roomObj);
    if (!addedroom._id) {
      console.log("adding room failed");
      return false;
    }
    console.log("add room test passed");
    return true;
  } catch (e) {
    console.log("adding room error:", e);
    return false;
  }
};

const testReadroom = async () => {
  try {
    const addedroom = await room.create(roomObj);
    const readroom = await room.read(addedroom._id);
    if (!readroom || readroom.firstName !== roomObj.firstName) {
      console.log("reading room failed");
      return false;
    }
    console.log("room read test passed", readroom._id, readroom.firstName);
    return true;
  } catch (e) {
    console.log("reading room error:", e);
    return false;
  }
};

const testUpdateroom = async () => {
  try {
    const addedroom = await room.create(roomObj);
    const updatedroom = await room.update({ value: 99999 }, addedroom._id);
    if (!updatedroom) {
      console.log("updating room failed");
      return false;
    }
    console.log(
      "room updating test passed",
      addedroom._id,
      addedroom.firstName
    );
    return true;
  } catch (e) {
    console.log("updating room error:", e);
    return false;
  }
};

const testDeleteroom = async () => {
  try {
    const addedroom = await room.create(roomObj);
    const deleted = await room.del(addedroom._id);

    if (!deleted) {
      console.log("deleting room failed");
      return false;
    }
    console.log("deleting room test passed");
    return true;
  } catch (e) {
    console.log("deleting room error");
    return false;
  }
};

const testroom = async () => {
  const added = await testAddroom();
  const read = await testReadroom();
  const updated = await testUpdateroom();
  const deleted = await testDeleteroom();
  if (added && read && updated && deleted) {
    console.log("testing room crud passed");
    return true;
  }
  return false;
};

module.exports = testroom;
