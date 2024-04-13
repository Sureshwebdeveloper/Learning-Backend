import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const day = new Date("June 24, 2023, 11:13:00");
  console.log(day);
  const currentday = day.getDay();
  console.log(currentday);

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (currentday === 0 || currentday === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  let list = ["apple", "orange", "Banana"];
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
    fruits: list,
  });
});

app.listen(port, () => {
  console.log(`Your App is running on port number ${port}`);
});
