import shipTypes from "./shipTypes";

function Ship(shipType) {
  let length = shipTypes[shipType].size;
  let hitCount = 0;
  let squares, axis;
  let sunkStatus = false;

  function hit() {
    this.hitCount++;

    this.isSunk();
  }

  function isSunk() {
    if (this.hitCount >= this.length) {
      this.sunkStatus = true;
      return true;
    }
    return false;
  }

  return {
    length,
    hitCount,
    squares,
    axis,
    sunkStatus,
    isSunk,
    hit,
  }
}

export default Ship;