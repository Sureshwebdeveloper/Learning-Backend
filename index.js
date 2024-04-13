import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Please Enter Your URl :", name: "URL" }])
  .then((answer) => {
    const url = answer.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url,  (err) => {
      if (err) throw err;
      console.log("The File has been saved");
    });
  })
  .catch((err) => {
    if (err.TtyError) {
      console.log(err);
    } else {
    console.log("something is wrong");
    }
  });
