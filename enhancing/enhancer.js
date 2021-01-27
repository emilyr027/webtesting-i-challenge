module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  let newItem = {...item};
  if(newItem.enhancement < 20){
    new.Item.enhancement += 1;
  }
  return newItem;
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
