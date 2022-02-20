const booking = require("./bookingController");
const room = require("./roomController");
const user = require("./userController");

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

const userObj = {
  firstName: "dani",
  lastName: "danino",
  password: "12345dani",
  email: "dani@danino.co.uk",
  phone: "(525) 122 5546",
  isManager: false,
  registerDate: new Date("2020-02-25"),
  isSubscribed: false,
  isRegistered: true,
  credits: {
    monthly: 20,
    credit: 50,
    purchase: 120,
  },
};

const bookingObj = {
  date: new Date("2022-2-22"),
  startTime: "12:00",
  finishTime: "13:30",
  roomId: "", // need to add by db
  userId: "", // need to add by db
  logDate: new Date("2021-12-27"),
  // payMethod: "", // need to add by db
  calendarInviteLink: "calendar.google.com/r/ev...",
  cost: 70,
  payedBy: "", // need to add by db
};

const testUser = async () => {
  const addedUser = user.create(userObj);
  if (!addedUser._id) {
    return false;
  }
  console.log(addedUser._id);

  const readUser = user.read(addedUser._id);
  if (!readUser || readUser.firstName !== userObj.firstName) {
    return false;
  }
  console.log("user read", readUser._id, readUser.firstName);

  const updatedUser = user.update({ firstName: "dudi" }, addedUser._id);
  if (!updatedUser) {
  }
};
