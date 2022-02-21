const testUser = require("./userTester");
const testBooking = require("./bookingTester");
const testRoom = require("./roomTester");

const runTests = async () => {
  if ((await testUser()) && (await testBooking()) && (await testRoom())) {
    console.log("all tests passed");
    return true;
  }
  console.log("not all tests passed, see log for details");
  return true;
};

runTests();
