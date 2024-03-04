// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj){
  return "key" in obj;
}
