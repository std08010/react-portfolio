const httpBinURL = "https://httpbin.org/post";

const formData = new FormData();
formData.append("username", "moontahoe");
formData.append("fullname", "Alex Banks");

fetch(httpBinURL, {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
