![Apache Licence](https://img.shields.io/badge/Licence-Apache-blue)


# OP Violin Shop


### Description
OP Violin Shop offers violin e-books for purchase. The home screen features a carousel of top rated products, a nav bar, search bar, cart and sign in page. Home page also features the latest products. Clicking on a product will render a product image, title, description, rating, count in stock, reviews and allow a user to write a review if logged in. Items added to the cart can have their quantity changed and this will be reflected in the cart price. 

The database contains an admin user also. The admin is able to add products, delete products, view/delete users and view orders. The payment method is currently set to PayPal, although paypal functionality has been disabled. Future implementations will incorperate Stripe to make use of the GraphQL query of the Stripe API.


### Deployed Application
http://opviolinshop.herokuapp.com/

### Documentation
Click below to see a doc with detailed info on the project 
https://docs.google.com/document/d/16RgxwK2APvGgcdhBEuiPttB9ElfPHYQ-v74-FmHDDaI/edit?usp=sharing 

### Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Screenshots](#Screenshots)
- [Licence](#Licence)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

### Installation
  Firstly, if you are familiar with GitHub, then feel free to clone this repo and run: 
  - mongod to accept MongoDB requests
  - npm run data:import to seed the database
  - npm run dev to start the server and frontend concurrently
  - npm run meshdev to query the Stripe API (you need to add your Stripe API key to the .meshrc.yml file)

### Screenshots
**Home**
<img width="1434" alt="Screen Shot 2021-11-09 at 2 02 41 pm" src="https://user-images.githubusercontent.com/80560749/140854748-e7e91636-f465-4a02-af65-0afc83dc9d51.png">

**Product**
<img width="1432" alt="Screen Shot 2021-11-09 at 2 03 03 pm" src="https://user-images.githubusercontent.com/80560749/140854781-01eed78c-742a-4889-9afe-fb2672b09bc5.png">

**Cart**
<img width="1433" alt="Screen Shot 2021-11-09 at 2 03 27 pm" src="https://user-images.githubusercontent.com/80560749/140854878-64b2e66c-b8ad-41c3-9535-de7c39c05d36.png">

**Shipping**
<img width="1435" alt="Screen Shot 2021-11-09 at 2 03 52 pm" src="https://user-images.githubusercontent.com/80560749/140854912-24ccdae0-a63d-4f79-8069-e8c13e92ad65.png">

**Admin Users**
<img width="1436" alt="Screen Shot 2021-11-09 at 2 04 04 pm" src="https://user-images.githubusercontent.com/80560749/140854979-68eb946c-6416-42d5-be54-a13c71abdf08.png">

**Admin Products**
<img width="1137" alt="Screen Shot 2021-11-09 at 2 05 21 pm" src="https://user-images.githubusercontent.com/80560749/140855023-8ca089c7-9281-4aea-8dcd-2746549bd8c1.png">

**Admin Orders**
<img width="1137" alt="Screen Shot 2021-11-09 at 2 05 32 pm" src="https://user-images.githubusercontent.com/80560749/140855057-30d4673b-667b-48e1-b805-bf3d68941f1d.png">


### Licence
  Apache


### Contributing
GitHub profile of contributor(s):
  [ArneTripolone](https://github.com/ArneTripolone)


### Tests
  There are no tests for this application available at this time. 


### Questions
If you have any questions about this repo, please direct them to:
  [arnetripolone@gmail.com](mailto:arnetripolone@gmail.com)
