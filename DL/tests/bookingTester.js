const booking = require("../controllers/bookingController");

require("../db").connect();

const creditsObj = {
  monthly: 100,
  currentMonth: 85,
  nextMonth: 97,
  left: 3,
};

const bookingObj = {
  date: new Date("2022-2-22"),
  startTime: "12:00",
  finishTime: "13:30",
  roomId: "6212618664eae4a813082396", // need to add by db
  userId: "6212618564eae4a81308238a", // need to add by db
  logDate: new Date("2021-12-27"),
  // payMethod: "", // need to add by db
  calendarInviteLink: "calendar.google.com/r/ev...",
  cost: 70,
  payedBy: "", // need to add by db
};

const testAddbooking = async () => {
  try {
    const addedBooking = await booking.create(bookingObj);
    if (!addedBooking._id) {
      console.log("adding booking failed");
      return false;
    }
    console.log("add booking test passed");
    return true;
  } catch (e) {
    console.log("adding booking error:", e);
    return false;
  }
};

const testReadbooking = async () => {
  try {
    const addedbooking = await booking.create(bookingObj);
    const readbooking = await booking.read(addedbooking._id);
    if (!readbooking || readbooking.firstName !== bookingObj.firstName) {
      console.log("reading booking failed");
      return false;
    }
    console.log("booking read test passed", readbooking._id);
    return true;
  } catch (e) {
    console.log("reading booking error:", e);
    return false;
  }
};

const testUpdatebooking = async () => {
  try {
    const addedbooking = await booking.create(bookingObj);
    const updatedbooking = await booking.update(
      { cost: 99999 },
      addedbooking._id
    );
    if (!updatedbooking) {
      console.log("updating booking failed");
      return false;
    }
    console.log("booking updating test passed", addedbooking._id);
    return true;
  } catch (e) {
    console.log("updating booking error:", e);
    return false;
  }
};

const testDeletebooking = async () => {
  try {
    const addedbooking = await booking.create(bookingObj);
    const deleted = await booking.del(addedbooking._id);

    if (!deleted) {
      console.log("deleting booking failed");
      return false;
    }
    console.log("deleting booking test passed");
    return true;
  } catch (e) {
    console.log("deleting booking error");
    return false;
  }
};

const testbooking = async () => {
  const added = await testAddbooking();
  const read = await testReadbooking();
  const updated = await testUpdatebooking();
  const deleted = await testDeletebooking();
  if (added && read && updated && deleted) {
    console.log("testing booking crud passed");
    return true;
  }
  return false;
};

module.exports = testbooking;
