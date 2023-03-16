// callback fucntion single move
exports.generateCoordinates = function (calbackfn) {
  const xcord = String.fromCharCode(Math.floor(Math.random() * 10) + 65);
  const ycord = Math.floor(Math.random() * 10) + 1;
  // console.log("this is xcordinate: "+xcordinate)
  // console.log("this is ycordinate: "+ycordinate)
  const reply = {};
  // console.log("this is top respone: "+JSON.stringify(response))
  reply["status"] = "success";
  reply["content"] = {
    xcoordinate: xcord,
    ycoordinate: ycord,
    coordinate: [xcord, ycord],
  };
  console.log("this is buttom respone: " + JSON.stringify(reply["content"]));

  // countCordinate(response, function (data) {
  calbackfn(reply);
  // });
};

// call back function for multiple move
exports.generateMutipleCoordinates = function (batch, calbackfn) {
  console.log("this is batch: "+batch)
  const sendResponse = {status:'',content:[]};
  sendResponse["status"] = "success";
  for (let i = 1; i <= batch; i++) {
    const xcord = String.fromCharCode(Math.floor(Math.random() * 10) + 65);
    const ycord = Math.floor(Math.random() * 10) + 1;
    let response = {
      xcoordinate: xcord,
      ycoordinate: ycord,
      coordinate: [xcord, ycord],
    }
    sendResponse["content"].push(response);
    console.log("this is buttom respone: " + JSON.stringify(sendResponse["content"]));
  }
  calbackfn(sendResponse);
};
