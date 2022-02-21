const user = require("../controllers/userController");

require("../db").connect();

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

const testAddUser = async () => {
  try {
    const addedUser = await user.create(userObj);
    if (!addedUser._id) {
      console.log("adding user failed");
      return false;
    }
    console.log("add user test passed");
    return true;
  } catch (e) {
    console.log("adding user error:", e);
    return false;
  }
};

const testReadUser = async () => {
  try {
    const addedUser = await user.create(userObj);
    const readUser = await user.read(addedUser._id);
    if (!readUser || readUser.firstName !== userObj.firstName) {
      console.log("reading user failed");
      return false;
    }
    console.log("user read test passed", readUser._id, readUser.firstName);
    return true;
  } catch (e) {
    console.log("reading user error:", e);
    return false;
  }
};

const testUpdateUser = async () => {
  try {
    const addedUser = await user.create(userObj);
    const updatedUser = user.update({ firstName: "dudi" }, addedUser._id);
    if (!updatedUser) {
      console.log("updating user failed");
      return false;
    }
    console.log(
      "user updating test passed",
      addedUser._id,
      addedUser.firstName
    );
    return true;
  } catch (e) {
    console.log("updating user error:", e);
    return false;
  }
};

const testDeleteUser = async () => {
  try {
    const addedUser = await user.create(userObj);
    await user.del(addedUser._id);
    const deletedFound = user.read(addedUser._id);
    if (!deletedFound) {
      console.log("deleting user failed");
      return false;
    }
    console.log("deleting user test passed");
    return true;
  } catch (e) {
    console.log("deleting user error");
    return false;
  }
};

const testUser = async () => {
  const added = await testAddUser();
  const read = await testReadUser();
  const updated = await testUpdateUser();
  const deleted = await testDeleteUser();
  if (added && read && updated && deleted) {
    console.log("testing user crud passed");
    return true;
  }
  return false;
};

module.exports = testUser;
